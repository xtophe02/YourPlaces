import React from "react";
import UserItem from "./UserItem";


const UsersList = ({ users }) => {
  // console.log(users)
  return (
    <>
      {users.length === 0 ? (
        <p>no users found</p>
      ) : (
        users.map(user => 
           
        <UserItem key={user.id} name={user.name} image={user.imageUrl} places={user.places.length} id={user.id}/>
       
        )
      )}
    </>
  );
};

export default UsersList;
