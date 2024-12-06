import React, { useEffect, useState } from "react";
import { useDebounce } from "./Debounce_custom";

interface usersType {
    name: string;
    age: string;
};

function fetchDataFromServer(value: string): usersType[] {
    if (!value) {
        return [];
    }
    console.log('서버로 부터 데이터를 가져오는중');
    const users = [
        { name: "김철수", age: "16" },
        { name: "이영희", age: "26" },
        { name: "김민수", age: "15" },
        { name: "홍길동", age: "20" },
        { name: "홍민영", age: "45" },
        { name: "김민영", age: "32" },
    ];
    return users.filter((user) => user.name.startsWith(value));
};

const Debounce_exaplme = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<usersType[]>([]);
    const debouncedInput = useDebounce(input, 300);
    useEffect(() => {
        const users = fetchDataFromServer(debouncedInput);
        setResult(users);
    }, [debouncedInput]);

    return (
        <div>
            <div className="container">
                <div className="search-container">
                    <input placeholder="여기다 검색하세요" value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <ul>
                        {result.map((users) => (
                            <li key={users.name}>
                                <span>{users.name}</span>
                                <span>{users.age}세</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Debounce_exaplme;