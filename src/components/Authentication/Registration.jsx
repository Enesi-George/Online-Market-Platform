import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const Registration = ({ onClose }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      //reserve for international
      // .matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number.(090-222-4444)")
      .matches(/^\d{11}$/, "Invalid phone number. (e.g., 0902224444)")
      .required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    repeat_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    country: Yup.string().required("Country is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      repeat_password: "",
      country: "",
      acceptTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div className="">
      <div className="max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 absolute top-3 right-3"
        >
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Close</span>
        </button>
        <form className="p-12  overflow-y-auto" onSubmit={formik.handleSubmit}>
          <div className="flex justify-center text-center sm:text-left text-2xl w-full ">
            <span className="text-red-500 font-bold mr-1">GG</span> CONNECT
          </div>
          <h1 className="my-6 text-gray-500 mb-3">
            Create your connect account today.
          </h1>
          <hr />
          <div className="grid md:grid-cols-2 md:gap-12 mt-8">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block pb-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray peer"
                placeholder=" "
                required
                {...formik.getFieldProps("first_name")}
              />

              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.first_name}
                </div>
              ) : null}
              <label
                htmlFor="first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="block pb-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray peer"
                placeholder=" "
                required
                {...formik.getFieldProps("last_name")}
              />

              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.last_name}
                </div>
              ) : null}

              <label
                htmlFor="last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
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
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                pattern="[0-9]{10}"
                maxLength={12}
                name="phone"
                id="phone"
                className="block pb-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray peer"
                placeholder=" "
                required
                {...formik.getFieldProps("phone")}
              />

              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              ) : null}

              <label
                htmlFor="phone"
                className="peer-focus:font-medium w-full absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 ">
            <div className="text-sm mt-3">
              <span>Country of Resident:</span>
            </div>
            <div className=" z-0 w-full mb-5 group">
              <select
                id="countries"
                className="block pb-0 rounded-sm w-44 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray peer"
                disabled={loading}
                {...formik.getFieldProps("country")}
              >
                <option disabled selected>
                  {loading ? "Loading..." : "Select Country"}
                </option>
                {countries.map((country) => (
                  <option key={country.name.common} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
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

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="repeat_password"
              id="repeat_password"
              className="block pb-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray peer"
              placeholder=" "
              required
              {...formik.getFieldProps("repeat_password")}
            />

            {formik.touched.repeat_password && formik.errors.repeat_password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.repeat_password}
              </div>
            ) : null}

            <label
              htmlFor="repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>

          {/* Checkbox for terms and conditions */}
          <div className="flex items-center mb-5">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              className="h-4 w-4 text-gray-800 focus:ring-gray-600 border-gray-300 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.acceptTerms}
            />
            <label
              htmlFor="acceptTerms"
              className="ml-2 block text-sm text-gray-900"
            >
              I accept the
              <a href="#" className="text-gray-800 ml-1 hover:text-red-500">
                terms and conditions
              </a>
            </label>
          </div>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="text-red-500 text-sm">
              {formik.errors.acceptTerms}
            </div>
          ) : null}
          {/* <div className="text-sm mb-5">
            <span>Already a member?</span>
            <a href="#" className="text-red-500">
              Login
            </a>
          </div> */}

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

Registration.propTypes = {
  onClose: PropTypes.func.isRequired,
};
