import React from 'react'
import { Item } from '../types/InventoryTypes';

interface props {
    items: Item[],
    filter: string,
    onRemove: (id: number) => void;
    onUpdate: (id: number, quanitty: number) => void;
}

const InventoryList = ({ items, filter, onRemove, onUpdate }: props) => {
    const filteredItems = items.filter((item) => filter ? item.category === filter : true);

    return (
        <div>
            <h2>Inventory List</h2>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} (Category: {item.category})
                        <button onClick={() => onRemove(item.id)}>Remove</button>
                        <button onClick={() => onUpdate(item.id, item.quantity + 1)}>+1</button>
                        <button onClick={() => onUpdate(item.id, item.quantity - 1)}>-1</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InventoryList;