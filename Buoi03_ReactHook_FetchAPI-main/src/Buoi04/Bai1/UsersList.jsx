import { useEffect, useState } from "react";

function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {

            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await res.json();

            setUsers(data);
        };

        fetchUsers();

    }, []);

    return (
        <div>
            <h2>User List</h2>

            {users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default UsersList;