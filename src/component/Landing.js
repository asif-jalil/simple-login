import React, { useState } from "react";
import { Alert, Container, Tab, Tabs } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";

const Landing = () => {
   const [error, setError] = useState("");

   return (
      <Container className="py-5">
         {error && <Alert variant="danger">{error}</Alert>}
         <Tabs defaultActiveKey="signup">
            <Tab eventKey="signup" title="Signup">
               <Signup setError={setError}></Signup>
            </Tab>
            <Tab eventKey="login" title="Login">
               <Login setError={setError}></Login>
            </Tab>
         </Tabs>
      </Container>
   );
};

export default Landing;
