import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const Login = ({ onClose, onRegisterClick }) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center marginTop">
      <div className="max-w-md w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 absolute top-3 right-3"
        >
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Close</span>
        </button>
        <form className=" p-12" onSubmit={formik.handleSubmit}>
          <div className="flex justify-center text-center sm:text-left text-2xl w-full ">
            <span className="text-red-500 font-bold mr-1">GG</span> CONNECT
          </div>
          <h1 className="my-6 text-gray-500 mb-2">Log in to your account.</h1>
          <hr />
          <div className="relative z-0 w-full mb-5 mt-4 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block pb-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray peer"
              placeholder=" "
              required
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block pb-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray peer"
              placeholder=" "
              required
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <div className="text-sm mb-5">
            <span>I dont have an account </span>
            <a href="#" className="text-red-500" onClick={onRegisterClick}>
              Register
            </a>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-800 py-2.5 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5  text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
};
