import React, {useState} from "react";
import './style_register.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Formik} from 'formik';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Register = () => {
  const [alignment, setAlignment] = useState('register');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return(
    <div>
      <section className="register" >
        <div className="register-container">
            <div className="register-button-box">
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="login" aria-label="left aligned">
                  Log in
                </ToggleButton>
                <ToggleButton value="register" aria-label="centered">
                  Register
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <Formik
              initialValues={{ userName: '', email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className="Register-form" onSubmit={handleSubmit}>
                  <TextField 
                    required
                    name="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName} 
                    label="User Name"
                    variant="filled"
                  />
                  <TextField
                    required
                    type="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <TextField
                    type="password"
                    name="password"
                    label="Password"
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <FormGroup className="Checkbox-label">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </FormGroup>
                  <Button type="submit" disabled={isSubmitting} variant="contained">
                    Register
                  </Button>
                </form>
              )}
            </Formik>
            {/* <form id="register" className="input-group">
                <input type="text" className="input-field" placeholder="Username" required/>
                <input type="email" className="input-field" placeholder="Email" required/>
                <input type="text" className="input-field" placeholder="Enter Password" required/>
                <input type="checkbox" className="chech-box" /> <span>I agree to the term and conditions </span>
                <Button type="submit" variant="contained" >Register</Button>            
                
            </form> */}
        </div>
      </section>
    </div>
  );
}

export { Register };