import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function CoffeeStoreUI() {
    const menuItems = [
        { name: 'Espresso', price: 3.50 },
        { name: 'Latte', price: 4.00 },
        { name: 'Cappuccino', price: 4.50 },
        { name: 'Americano', price: 3.00 },
    ];

    return (
        <div className="coffee-store">
            <header>
                <h1>Welcome to Our Coffee Store</h1>
            </header>
            <main>
                <h2>Menu</h2>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <button>Order Now</button>
            </main>
            <footer>
                <p>&copy; 2023 Coffee Store</p>
            </footer>
        </div>
    );
}

export default CoffeeStoreUI;