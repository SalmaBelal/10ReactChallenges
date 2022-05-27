import React from "react";

export function ArrayOfUsers(){

    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];
    
    const listUsers = users.map( (user) => <li key={user.id.toString()}>{user.name}</li>)

    return(
        <div>
            <h3>User names</h3>
            <ul>{listUsers}</ul>
        </div>
    );

}


