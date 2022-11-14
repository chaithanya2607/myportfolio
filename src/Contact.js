import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const userValidationSchema = yup.object({
  name: yup.string().required("Why not give your name?"),
  email: yup.string().required("Why not give the email?"),
  phone: yup.date().required("Phone number required"),
});

export default function Checkin() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      createUser(newUser);
    },
  });

  const navigate = useNavigate();
  const createUser = (newUser) => {
    console.log("createUser", newUser);
    fetch("https://63234c53bb2321cba916eb6e.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
  };

  return (
    <div  className="add-user">
      <div className="container mt-2">
        <div className="w-50 mx-auto shadow p-5">
          <h1 className="text-center mb-4">Contact me</h1>
          <form onSubmit={formik.handleSubmit}>
            <input
              className="form-control form-control-lg"
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
            <br></br>

            <input
              className="form-control form-control-lg"
              id="email"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
            <br></br>
            <input
              className="form-control form-control-lg"
              id="phone"
              name="phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter phone number"
            />
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""}
            <br></br>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                onClick={()=>navigate("/")}
                className="btn btn-success mt-5"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
