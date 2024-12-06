import React, { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

const CitySearch: React.FC<Props> = ({ onSearch }) => {
    const [input, setInput] = useState<string>("");

    const handleSearch = () => {
        if (input.trim()) {
            onSearch(input.trim());
            setInput("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default CitySearch;
