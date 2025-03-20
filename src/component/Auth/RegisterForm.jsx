import { Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';

const intialvalues={
  fullName:"",
  email:"",
  password:"",
  role:"",
};

export const RegisterForm = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const handleSubmit = (values) => {
    console.log("form values", values);
    dispatch(registerUser({ userData: values, navigate }));
  }
  return (
    <div>
      
    <Typography variant='h5' className='text-center'>
      Register
    </Typography>

      <Formik onSubmit={handleSubmit} initialValues={intialvalues}>

      <Form>

      <Field
        as={TextField}
        name="fullName"
        label="FULL NAME"
        fullWidth
        variant="outlined" 
        margin="normal"
        
        />

      <Field
        as={TextField}
        name="email"
        label="Email"
        fullWidth
        variant="outlined" 
        margin="normal"
       
         />

      <Field
        as={TextField}
        name="password"
        label="Password"
        fullWidth
        variant="outlined" 
        margin="normal"
       
        />

  <Field name="role">
    {({ field }) => (
      <Select
        {...field}
        fullWidth
        margin="normal"
        labelId="role-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
      </Select>
    )}
  </Field>

        
        <Button sx={{mt:2, padding:"1rem"}} className='mt-5' fullWidth type='submit' variant='contained'>Login</Button>

      </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{mt:3}}>
          If you have an account already?
          <Button size='small' onClick={()=>navigate("/account/login")}>
              Login
          </Button>
      </Typography>

  </div>
  )
}

export default RegisterForm
