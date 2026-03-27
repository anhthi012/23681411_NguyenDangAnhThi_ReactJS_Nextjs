import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
        <div className="overlay">
            <div className="login-form">
                <span className="close" onClick={() => setOpen(false)}>×</span>

                <input placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        </div>
    );
}
