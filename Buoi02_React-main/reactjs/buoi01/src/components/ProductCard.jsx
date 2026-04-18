import "./ProductCard.css";

export default function ProductCard({ image, name, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">{price}₫</p>
            <button>Add to cart</button>
        </div>
    );
}
