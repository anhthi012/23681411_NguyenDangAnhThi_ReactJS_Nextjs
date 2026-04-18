import { useState, useMemo } from "react";

const products = Array.from({ length: 3000 }, (_, i) => ({
    id: i,
    name: "Product " + i,
    price: Math.floor(Math.random() * 1000)
}));

export default function ProductFilter() {
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState(1000);

    console.time("filter");

    const filtered = useMemo(() => {
        return products.filter(
            (p) =>
                p.name.toLowerCase().includes(search.toLowerCase()) &&
                p.price <= maxPrice
        );
    }, [search, maxPrice]);

    console.timeEnd("filter");

    const total = useMemo(() => {
        return filtered.reduce((sum, p) => sum + p.price, 0);
    }, [filtered]);

    return (
        <div>
            <input
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />

            <input
                type="number"
                onChange={(e) => setMaxPrice(e.target.value)}
            />

            <h3>Total price: {total}</h3>
        </div>
    );
}