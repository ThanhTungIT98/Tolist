import React from 'react'

const Form = () => {
  

  return (
    <form className='container-left'>
          <div className='input'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name="name" />
          </div>
          <div className='input'>
              <label htmlFor='tel'>Tel</label>
              <input type='text' id='tel' name="tel"/>
          </div>
          <div className='input'>
              <label htmlFor='age'>Age</label>
              <input type='text' id='age' name="age" />
          </div>
          <div className='input'>
              <label htmlFor='year'>Year of Birdth</label>
              <input type='text' id='year' name="year" />
          </div>
          <div className='input'>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' name="email" />
          </div>
          <div className='btnForm'>
                <button type='submit' className='btn-submit'>Submit
                </button>
                <button type='reset' className='btn-submit'>Hủy
                </button>
          </div>
      </form>
  )
}

export default Form