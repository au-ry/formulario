import React from 'react'

const Form = () => {
    return (
        <form action="#">
            <div className='name item' ><label>Name</label><input type="text" name="name" /></div>
            <div className='email item'><label>E-mail</label><input type="email" name="email" /></div>
            <div className='gender item'>
                <label>Gender</label>
                <input type="radio" name="options" id='female' value="Female" />
                <label htmlFor="female">Female</label>
                <input type="radio" name="options" id='male' value="Male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="options" id='transformer' value="Transformer" />
                <label htmlFor="transformer">Transformer</label>
            </div>
            <div className='submit item'><button type="submit">Submit</button></div>
        </form>
    )
}

export default Form