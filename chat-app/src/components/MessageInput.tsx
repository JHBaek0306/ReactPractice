import React, { useState } from "react";

interface MessageInputProps {
    onSendMessage: (message: string) => void;
    onClearMessages: () => void;
}

const MessageInput = ({ onSendMessage, onClearMessages }: MessageInputProps) => {
    const [message, setMessage] = useState<string>("");

    const handleSendMessage = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage(""); // 메시지 전송 후 입력 필드 초기화
        }
    };

    return (
        <div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
            <button onClick={onClearMessages}>Clear Messages</button>
        </div>
    );
};

export default MessageInput;
