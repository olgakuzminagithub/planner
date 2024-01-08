"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {z} from 'zod'
import { toStructuredError } from "zod-structured-error"

const shema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.number(),
    lat: z.number(),
    lng: z.number(),
})

export async function createNewItem (prevState: any, formData: FormData) {
    const advert = {
        title: formData.get("title"),
        description: formData.get("description"),
        image: formData.get("image"),
        price: Number(formData.get("price")),
        lat: Number(formData.get("lat")),
        lng: Number(formData.get("lng")),
    }

    const validate = shema.safeParse(advert);

    if(!validate.success) {
        const errors = toStructuredError(validate.error);
        return {message: "validate errors", errors};
        
    }

    const data = validate.data;

    await prisma.data.create({
        data,
    });

    revalidatePath('/');
    redirect('/');
}