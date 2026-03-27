import { useEffect, useState } from "react";

function PostSearch() {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchPosts = async () => {

            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            const data = await res.json();

            setPosts(data);
        };

        fetchPosts();

    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            <input
                placeholder="Search title"
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredPosts.map(post => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                </div>
            ))}

        </div>
    );
}

export default PostSearch;