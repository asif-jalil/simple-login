import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";

const Login = ({ setError }) => {
   const history = useHistory();
   const location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   const {register, formState: { errors }, handleSubmit} = useForm();

   const onSubmit = async (data) => {
      fetch("https://parseapi.back4app.com/login", {
         method: "POST",
         headers: {
            'Content-type': 'application/json',
            "X-Parse-Application-Id": "1aKNPKlZZkL3gKe1avjN4bJzq1pkgAw7vj2aLRO3",
            "X-Parse-REST-API-Key": "ibV2rrC1p90TfLxwUumNkKAzI7Rgk49bCj4ODnLV",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.sessionToken) {
               sessionStorage.setItem("currentUser", JSON.stringify(data.sessionToken))
               history.replace(from)
            } else if(data.error) {
               setError(data.error)
               setTimeout(() => setError(''), 3000);
            }
         })
         
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="py-3">
         <div className="mb-3">
            <input
               className="form-control"
               {...register("username", {
                  required: true,
                  pattern: /^[a-zA-Z0-9]{6,}$/,
               })}
               placeholder="Username"
            />
            <span className="text-danger">
               {errors.username &&
                  "Username is required and at least 6 characters. (No special character)"}
            </span>
         </div>

         <div className="mb-3">
            <input
               className="form-control"
               {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/,
               })}
               placeholder="Password"
            />
            <span className="text-danger">
               {errors.password &&
                  "Password must be between 6 to 20 characters which contain at least one numeric digit and one letter"}
            </span>
         </div>
         <button className="btn btn-primary w-100" type="submit">
            Login
         </button>
      </form>
   );
};

export default Login;