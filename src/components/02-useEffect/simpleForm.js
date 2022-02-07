import React, { useEffect, useState } from 'react';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            name: '',
            email: ''
        }
    )

    const { name, email } = formState;

    const handleInputChange = ({ target }) => {
        console.log(target.value)
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        console.log('awd')
    }, [formState])

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placehold='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}></input>
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placehold='Tu nombre'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}></input>
            </div>

        </>
    )
}