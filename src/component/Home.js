import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
   const history = useHistory()

   const handleLogout = () => {
      sessionStorage.setItem("currentUser", '');
      history.push("/")
   }

   return (
      <Container className="py-5">
         <Card className="border-0 shadow text-center">
            <Card.Body>
               <Card.Title>Now You Are Signed In</Card.Title>
               <Link className="btn btn-link"  to="/profile">Go to Profile</Link>
               <button onClick={handleLogout} className="btn btn-link">Logout</button>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default Home;
