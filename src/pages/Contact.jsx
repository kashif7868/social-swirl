import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../asset/css/contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string(),
    phone: Yup.string(),
    message: Yup.string().required("Message is required"),
    terms_and_policy: Yup.boolean()
      .oneOf([true], "Accept Terms of Services and Privacy Policy is required")
      .required(),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Perform action with form values (e.g., send message to server)
    console.log(values);
  };

  return (
    <div className="contact-container p-8 rounded-lg shadow-md">
      <h2 className="h2 section-title text-2xl font-bold mb-4">
        Let's Contact With Us
      </h2>
      <p className="section-text text-lg mb-6">Don't Hesitate to Reach Out</p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
          terms_and_policy: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form space-y-4">
            <div className="input-wrapper space-y-2">
              <Field
                type="text"
                name="name"
                placeholder="Your name*"
                className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error text-white"
              />
              <Field
                type="email"
                name="email"
                placeholder="Email address*"
                className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error text-white"
              />
            </div>

            <div className="input-wrapper space-y-2">
              <Field
                type="text"
                name="subject"
                placeholder="Subject"
                className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <Field
                type="number"
                name="phone"
                placeholder="Phone number"
                className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <Field
              as="textarea"
              name="message"
              placeholder="Your message...*"
              required
              className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="error text-white"
            />

            <iframe
              title="Google Map"
              className="google-map w-full h-64"
              src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="checkbox-wrapper flex items-center space-x-2">
              <Field
                type="checkbox"
                name="terms_and_policy"
                id="terms"
                className="checkbox"
              />
              <label htmlFor="terms" className="label text-sm">
                Accept{" "}
                <Link
                  to="#"
                  className="label-link text-blue-500 hover:underline"
                >
                  Terms of Services
                </Link>{" "}
                and{" "}
                <Link
                  to="#"
                  className="label-link text-blue-500 hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
              <ErrorMessage
                name="terms_and_policy"
                component="div"
                className="error text-white"
              />
            </div>

            <button
              type="submit"
              className="custom-button w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              disabled={isSubmitting}
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
