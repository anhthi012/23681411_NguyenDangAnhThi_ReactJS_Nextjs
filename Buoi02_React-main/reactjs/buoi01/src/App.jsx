import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import Alert from "./components/Alert";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";

import aoThun from "./assets/aothun.jpg";

function App() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Product Card</h2>
            <ProductCard
                image={aoThun}
                name="Áo thun"
                price="10000000"
            />

            <h2>Buttons</h2>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="danger">Danger</Button>

            <h2>Alert</h2>
            <Alert />

            <h2>Login Form</h2>
            <LoginForm />

            <h2>Product List</h2>
            <ProductList />
        </div>
    );
}

export default App;
