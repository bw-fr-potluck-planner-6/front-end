import React, { useState, useContext } from "react";
import { EventContext } from "../contexts/EventContext";


export default function EditEvent(props) {

  const {
    
    submit,
    change,
    
  } = props
  
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }
  
  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' >
        <div>
          <h1>Event form goes here.</h1>
          {/* name section */}

          <div className='name'>
            <label>Name
              <input
                onChange={onChange}
                value='name'
                type='text'
                id='name'
              />  
            </label>
          </div>

          {/* date section */}

          <div className='date container'> 
            <label>Date
              <input
                 onChange={onChange}
                value='date'
                 type='date'
                 id='date'
             />
            </label>
          </div>

          {/* time section */}

          <div className='time container'>
            <label>Time 
              <input
                onChange={onChange}
                value='time'
                type='time'
                id='time'
              />
            </label> 
          </div>

          <div className='location'>
            <label>Location
              <input
                onChange={onChange}
                value='location'
                type='text'
                id='location'
              />  
            </label>
          </div>
          
          <button>text submit</button>
        </div>
      </form>
  )
};


