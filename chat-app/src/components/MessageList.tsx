// MessageList.tsx
import React, { useRef, useEffect } from "react";
import { Message } from "../types/types";

interface MessageListProps {
    messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="messages">
            {messages.map((msg) => (
                <div key={msg.id} className="message">
                    {msg.username}: {msg.content}
                    <span>
                        {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                </div>
            ))}
            <div ref={messageEndRef} />
        </div>
    );
};

export default MessageList;
