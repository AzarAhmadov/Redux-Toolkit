import React from 'react'
import { useSelector } from 'react-redux';

export default function Global() {
    const count = useSelector((state) => state.counter.value)
    return (
        <div className='global'>
            <h1> Global </h1>
            <span>
                {count}
            </span>
        </div>
    )
}
