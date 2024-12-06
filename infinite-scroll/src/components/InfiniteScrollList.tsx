import React, { useState, useRef, useCallback } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { fetchMockData } from "../utils/mockApi";

type Item = {
    id: number;
    name: string;
};

const InfiniteScrollList = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef<IntersectionObserver | null>(null);

    const lastElementRef = useInfiniteScroll({
        loading,
        hasMore,
        onLoadMore: () => setPage((prevPage) => prevPage + 1),
        observer,
    });

    // 데이터 가져오기
    const loadData = async () => {
        setLoading(true);
        const newItems = await fetchMockData(page);
        if (newItems.length === 0) setHasMore(false);
        setItems((prev) => [...prev, ...newItems]);
        setLoading(false);
    };

    React.useEffect(() => {
        loadData();
    }, [page]);

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h1>Infinite Scroll List</h1>
            <div>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        ref={index === items.length - 1 ? lastElementRef : null}
                        style={{
                            padding: "10px",
                            margin: "5px 0",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
            {!hasMore && <p style={{ textAlign: "center" }}>No more data</p>}
        </div>
    );
};

export default InfiniteScrollList;
