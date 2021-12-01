import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    onSubmit: values =>{
      alert("Login Successful"); //this only fires if there are no errors automatically
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required'; //is it empty?
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email'; //regex to check email 
      }
      if (!values.password) errors.password = 'Field required'; //is it empty?
      return errors;
    }
  });
  return (
    <div>
      <h1>Jon's Test Formik Form</h1>
    <form onSubmit = {formik.handleSubmit}>
      <div>Email</div>
      <input name="email" type="text" onChange = {formik.handleChange} value = {formik.values.email}/>
      {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>:null}
      <div>Password</div>
      <input name="password" type="text" onChange = {formik.handleChange} value = {formik.values.password}/>
      {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>:null}
      <button type="submit">Submit</button>
  </form>  
</div>
  );
}

export default App;
