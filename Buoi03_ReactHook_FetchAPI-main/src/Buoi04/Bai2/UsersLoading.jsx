import { useEffect, useState } from 'react'

function UserLoading() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    var url = 'https://jsonplaceholder.typicode.com/users'



    useEffect(() => {
        async function fetchdata() {
            try {
                var res = await fetch(url);
                var data = await res.json();

                if (!res.ok) {
                    throw new Error("can not load...Error!");
                }

                setData(data);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 10000)

            }

        }
        fetchdata();
    }, []);

    return (
        <>
            {
                loading ? (<p>Loading...</p>) : (error === null ? (
                    data.map((item) => {
                        return <div key={item.id}>
                            <h2>
                                {item.name}
                            </h2>
                            <h2>
                                {item.email}
                            </h2>
                        </div>
                    })
                ) : (<p>Error</p>))


            }
        </>
    )
}

export default UserLoading