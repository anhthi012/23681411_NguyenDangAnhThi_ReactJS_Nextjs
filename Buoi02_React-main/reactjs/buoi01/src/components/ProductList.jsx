import "./ProductList.css";

export default function ProductList() {
    return (
        <div className="grid">
            {Array.from({ length: 6 }).map((_, i) => (
                <div className="item" key={i}>Product {i + 1}</div>
            ))}
        </div>
    );
}
