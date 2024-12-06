// Chat.tsx
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import UserSettings from "./UserSettings";

const Chat = () => {
    const [username, setUsername] = useState<string>("User1");

    return (
        <div>
            <h2>Simple Chat</h2>
            <UserSettings username={username} setUsername={setUsername} />
            <ChatWindow username={username} />
        </div>
    );
};

export default Chat;
