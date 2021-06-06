import React from "react";
import { Redirect, Route } from "react-router";
const PrivateRoute = ({ children, ...rest }) => {
   const currentUser = sessionStorage.getItem("currentUser");
   
   return (
      <div>
         <Route
            {...rest}
            render={({ location }) =>
               currentUser ? (
                  children
               ) : (
                  <Redirect
                     to={{
                        pathname: "/signup",
                        state: { from: location },
                     }}
                  />
               )
            }
         />
      </div>
   );
};

export default PrivateRoute;
