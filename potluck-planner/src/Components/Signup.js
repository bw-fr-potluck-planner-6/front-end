import React, { useState } from 'react';
const initialSignup = []
const initialFormValues = {
  ///// TEXT INPUTS /////
  firstName:'',
  lastName:'',
  username: '',
  email: '',
  password: '',
    
}
const Signup = () => {
  const [signup, setSignup] = useState(initialSignup)          
  const [formValues, setFormValues] = useState(initialFormValues)
  const onSubmit = evt => {
    evt.preventDefault()
    const newSignup = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),

    }
    
     setSignup([signup, ...newSignup]);
     setFormValues(initialFormValues);
  }
  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target;
    
    const valueToUse = type === 'checkbox' ? checked : value;    
      setFormValues({
        ...formValues,
        [name]: value 
      })
    
  }

  return (
    <div>
      <h1>Signup Form goes here</h1>
      <form  onSubmit={onSubmit}>
      
        
        <button>signup</button>

        

      <div>
        <h4>signup information</h4>

        
        <label>First Name&nbsp;
          <input
          onChange={onChange}
            value={value.firstName}
            name='firstName'
            type='text'
          />
        </label>
        <label>Last Name&nbsp;
          <input
          onChange={onChange}
            value={values.lastName}
            name='lastName'
            type='text'
          />
        </label>
        <label>Email
          <input
          onChange={onChange}
            value={values.email}
            name='email'
            type='text'
          />
        </label>
        <label>Password&nbsp;
          <input
            onChange={onChange}
            value={values.password}
            name='password'
            type='password'
          />
        </label>
        </div>
        </form> 
    </div>
  )
};

export default Signup;

  
//   axios.get('http://buddies.com/api/friends')
//     .then(res => {
//       setFriends(res.data);
//     }).catch(err => {
//       console.error(err);
//     })
// }

// const postNewFriend = newFriend => {
  
//   axios.post('http://buddies.com/api/friends', newFriend)
//     .then(res => {
//       setFriends([res.data, ...friends]);
//     }).catch(err => {
//       console.error(err);
//     }).finally(() => {
//       setFormValues(initialFormValues);
//     })


  
  
  



  
