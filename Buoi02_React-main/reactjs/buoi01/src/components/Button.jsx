import "./Button.css";

export default function Button({ type = "primary", children }) {
    return (
        <button className={`btn btn-${type}`}>
            {children}
        </button>
    );
}
