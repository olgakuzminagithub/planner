"use client"

import { useFormState, useFormStatus } from 'react-dom';
import { useState } from 'react';
import { createNewItem } from './action';
import MapForCoordinates from '@/components/Coordinates/page';

import Image from 'next/image';


const initialState = {
    message: "",
    errors: {
        title: ""
    }
}

function NewPage() {
    const [state, formAction] = useFormState(createNewItem, initialState);
    const [decode, setDecode] = useState<any>();
    const [selecredImg, setSelectedImg] = useState<string>("");

    return (
    <form action={formAction} className="form">
        <div className="form-group">
        <div className="fake-img-box">
            <Image src={selecredImg ? `/${selecredImg}` : `/noimg.jpeg`} width={400} height={300} priority={true} alt="noimg"/>
            </div>
            <div className="inp-file">
                <label htmlFor="image">Chooose img</label>
                <select 
                    name='image'
                    value={selecredImg}
                    onChange={(e) => setSelectedImg(e.target.value)}
                >
                    <option defaultValue=""></option>
                    <option value="apart1.jpg">img 1</option>
                    <option value="apart2.jpg">img 2</option>
                    <option value="apart3.jpg">img 3</option>
                    <option value="apart4.jpg">img 4</option>
                </select>
                {state?.errors && <p className='warning'>{state.errors.image}</p>}
            </div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title"/>
            {state?.errors && <p className='warning'>{state.errors.title}</p>}
            <label htmlFor="description">Description</label>
            <textarea name="description" id=""></textarea>
            {state?.errors && <p className='warning'>{state.errors.description}</p>}
            <label htmlFor="price">Price</label>
            <input type="number" name="price"/>
            {state?.errors && <p className='warning'>{state.errors.price}</p>}
            <button className='my-btn my-btn_primary'>Add</button>
        </div>
        <div className="form-group">
            <label htmlFor="lat">X</label>
            <input type="text" name="lat" defaultValue={decode && decode.lat.toFixed(4)} readOnly />
            {state?.errors && <p className='warning'>{state.errors.lat}</p>}
            <label htmlFor="lng">Y</label>
            <input type="text" name="lng" defaultValue={decode && decode.lng.toFixed(4)} readOnly/>
            {state?.errors && <p className='warning'>{state.errors.lng}</p>}
            <p>Choose point on map</p>
            <div className="map-container">
                <MapForCoordinates decode={decode} setDecode={setDecode}/>
            </div>
        </div>
</form>
  )
}

export default NewPage