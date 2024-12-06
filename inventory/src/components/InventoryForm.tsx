import React, { useState } from 'react'

interface props {
    onAdd: (name: string, category: string, quanitty: number) => void;
}

const categories = ["Food", "Electronics", "Furniture", "Clothing"];

const InventoryForm = ({ onAdd }: props) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && category) {
            onAdd(name, category, quantity);
            setName("");
            setCategory("");
            setQuantity(0);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Item Name' value={name} onChange={(e) => setName(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <input type="number" placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
                <button type='submit'>Add Item</button>
            </form>
        </div>
    );
};

export default InventoryForm;