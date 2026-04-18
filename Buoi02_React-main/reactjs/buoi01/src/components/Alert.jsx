import { useState } from "react";
import "./Alert.css";

export default function Alert() {
    const [type, setType] = useState(null);

    return (
        <div>
            <button onClick={() => setType("success")}>Success</button>
            <button onClick={() => setType("warning")}>Warning</button>
            <button onClick={() => setType("error")}>Error</button>

            {type && <div className={`alert alert-${type}`}>{type}</div>}
        </div>
    );
}
