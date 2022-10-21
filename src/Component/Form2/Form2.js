import React from 'react'
import './Form2.css'
const Form2 = (props) => {
  return (
    <form className='container-form2' onSubmit={props.handleSubmit}>
        <div>
            <h1>
                New Task
            </h1>
            <input className='input-form2' type='text' placeholder='Add new task...' name="input"/>
            <div>
            <div className='description'>
                <label htmlFor='des'>Description</label>
                <textarea className='description-form2' name='des' id='des'/>
            </div>
            </div>
            <div className='option-form2'>
                <div className='input'>
                    <div>Dua Date</div>
                    <input type='Date' name='date'/>
                </div>
                <div className='select'>
                    <div>Piority</div>
                    <select name='piority'>
                        <option className='low-select'>Low</option>
                        <option className='normal-selcet'>Normal</option>
                        <option className='hight-select'>Hight</option>
                    </select>
                </div>
            </div>
            <button type='submit' className='btn-add'>Add</button>
        </div>
    </form>
  )
}

export default Form2