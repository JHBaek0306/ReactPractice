// ChatWindow.tsx
import React, { useReducer } from "react";
import { Message } from "../types/types";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

interface ChatState {
    messages: Message[];
};

type ChatAction =
    | { type: "ADD_MESSAGE"; payload: Message }
    | { type: "CLEAR_MESSAGES" };

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return { ...state, messages: [...state.messages, action.payload] };
        case "CLEAR_MESSAGES":
            return { ...state, messages: [] }; // 메시지를 모두 삭제
        default:
            return state;
    }
};

const initialState: ChatState = {
    messages: [],
};

interface ChatWindowProps {
    username: string;
}

const ChatWindow = ({ username }: ChatWindowProps) => {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    const handleSendMessage = (content: string) => {
        const newMessage: Message = {
            id: state.messages.length + 1,
            username,
            content,
            timestamp: new Date(),
        };
        dispatch({ type: "ADD_MESSAGE", payload: newMessage });
    };

    const handleClearMessages = () => {
        dispatch({ type: "CLEAR_MESSAGES" }); // 메시지 삭제 액션 디스패치
    };

    return (
        <div className="chat-window">
            <MessageList messages={state.messages} />
            <MessageInput
                onSendMessage={handleSendMessage}
                onClearMessages={handleClearMessages} // 삭제 버튼에 함수 전달
            />
        </div>
    );
};

export default ChatWindow;
