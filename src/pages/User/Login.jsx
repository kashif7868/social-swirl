import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import "../../asset/css/login-Sign.css"; // Import the CSS file with provided styles

const Login = () => {
    // Define Yup validation schema
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    // Handle form submission
    const handleSubmit = (values, { setSubmitting }) => {
        // Perform login action
        // Redirect or perform any necessary actions
        console.log(values);
        // Redirect to the next page
        window.location.href = "main_page.html";
    };

    return (
        <div className="login-container">
            <p className="title">Welcome Back To <br /> <a href="home.html">Swirl Marketing</a></p>
            <div className="separator"></div>
            <p className="welcome-message">
                Please, provide login credential to proceed and have access to all our services
            </p>

            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="login-form">
                        <div className="form-control">
                            <Field type="text" name="username" placeholder="Username" className="input" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>
                        <div className="form-control">
                            <Field type="password" name="password" placeholder="Password" className="input" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <button type="submit" className="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </Form>
                )}
            </Formik>

            <p className="sign-up-link">
                Don't have an account?
                <Link to="/sign_up">Sign up</Link>
            </p>
        </div>
    );
}

export default Login;
