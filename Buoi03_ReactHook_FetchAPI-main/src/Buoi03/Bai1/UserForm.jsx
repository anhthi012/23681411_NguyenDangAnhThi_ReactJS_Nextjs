import { useState } from "react";

export default function UserForm() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    return (
        <div>
            <h2>User Form</h2>

            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="age" placeholder="Age" onChange={handleChange} />

            <h3>Preview</h3>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
        </div>
    );
}