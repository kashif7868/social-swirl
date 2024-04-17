import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../../asset/css/login-Sign.css"; // Import the CSS file with provided styles

const SignUp = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Perform sign-up action
    // Redirect or perform any necessary actions
    console.log(values);
    // Redirect to the login page or any other page
    window.location.href = "login_page.html";
  };

  return (
    <div className="login-container  p-8 rounded-md shadow-md">
      <p className="title text-2xl mb-4">
        Welcome To{" "}
        <Link to="/home" className="text-blue-500">
          Swirl Marketing
        </Link>
      </p>
      <div className="separator h-px bg-gray-300 mb-4"></div>
      <p className="welcome-message mb-4">
        Please provide sign up credentials to proceed and have access to all our
        services
      </p>

      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="form-control mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error text-red-500"
              />
              <i className="fas fa-user absolute top-1/2 transform -translate-y-1/2 left-4"></i>
            </div>
            <div className="form-control mb-4">
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="input"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error text-red-500"
              />
              <i className="fas fa-user absolute top-1/2 transform -translate-y-1/2 left-4"></i>
            </div>
            <div className="form-control mb-4">
              <Field
                type="password"
                name="password"
                placeholder="New Password"
                className="input"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error text-red-500"
              />
              <i className="fas fa-lock absolute top-1/2 transform -translate-y-1/2 left-4"></i>
            </div>
            <div className="form-control mb-4">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error text-red-500"
              />
              <i className="fas fa-lock absolute top-1/2 transform -translate-y-1/2 left-4"></i>
            </div>

            <button
              type="submit"
              className="submit bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>

      <p className="sign-up-link mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
