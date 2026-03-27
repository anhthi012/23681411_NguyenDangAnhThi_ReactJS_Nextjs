import { useEffect, useState } from "react";

function UserById() {

    const [userId, setUserId] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!userId) return;

        if (userId < 1 || userId > 10) {
            setError("User not found");
            setUser(null);
            return;
        }

        const fetchUser = async () => {

            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );

            const data = await res.json();

            setUser(data);
            setError("");
        };

        fetchUser();

    }, [userId]);

    return (
        <div>

            <input
                type="number"
                placeholder="Enter user id (1-10)"
                onChange={(e) => setUserId(e.target.value)}
            />

            {error && <p>{error}</p>}

            {user && (
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            )}

        </div>
    );
}

export default UserById;