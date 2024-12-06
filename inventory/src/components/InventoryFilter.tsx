import React from 'react'

interface Props {
    filter: string;
    onFilterChange: (filter: string) => void;
}

const categories = ["All", "Food", "Electronics", "Furniture", "Clothing"];

const InventoryFilter = ({ filter, onFilterChange }: Props) => {

    return (
        <div>
            <h3>Filter by Category</h3>
            <select id="category-filter" value={filter} onChange={(e) => onFilterChange(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} value={cat === "All" ? "" : cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InventoryFilter;