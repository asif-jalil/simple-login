import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Profile = () => {
   const [userProfile, setUserProfile] = useState({})
   const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
   const history = useHistory()
   
   useEffect(() => {
      fetch("https://parseapi.back4app.com/users/me", {
         method: "GET",
         headers: {
            "X-Parse-Application-Id": "1aKNPKlZZkL3gKe1avjN4bJzq1pkgAw7vj2aLRO3",
            "X-Parse-REST-API-Key": "ibV2rrC1p90TfLxwUumNkKAzI7Rgk49bCj4ODnLV",
            "X-Parse-session-token": currentUser
         }
      })
         .then(res => res.json())
         .then(data=> setUserProfile(data))
   }, [currentUser])

   const handleLogout = () => {
      sessionStorage.setItem("currentUser", '');
      history.push("/")
   }

   return (
      <Container className="py-5">
         <Card className="border-0 shadow text-center">
            <Card.Body>
               <Card.Title>Hello, {userProfile.username}</Card.Title>
               <Link className="btn btn-link" exact="true" to="/">Go to home</Link>
               <button onClick={handleLogout} className="btn btn-link">Logout</button>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default Profile;