import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
const initialSignup = [];
const initialFormValues = {
  ///// TEXT INPUTS /////
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  // const onSubmit = evt => {
  //   evt.preventDefault()
  //   const newSignup = {
  //     firstName: formValues.firstName.trim(),
  //     lastName: formValues.lastName.trim(),
  //     email: formValues.email.trim(),
  //     password: formValues.password.trim(),

  //   }

  const handleUserSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      //need to add proper url
      .post("/users/", formValues)
      .then((res) => {
        // console.log("submitted, returned: ", res);

        push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onChange = (evt) => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Signup Form goes here</h1>

      <form onSubmit={handleUserSubmit}>
        <button>signup</button>

        <div>
          <h4>signup information</h4>

          <div>
            <label>
              First Name&nbsp;
              <input
                onChange={onChange}
                value={formValues.firstName}
                name="firstName"
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              Last Name&nbsp;
              <input
                onChange={onChange}
                value={formValues.lastName}
                name="lastName"
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                onChange={onChange}
                value={formValues.email}
                name="email"
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              Password&nbsp;&nbsp;
              <input
                onChange={onChange}
                value={formValues.password}
                name="password"
                type="password"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
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
