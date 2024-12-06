// UserSettings.tsx
import React from "react";

interface UserSettingsProps {
    username: string;
    setUsername: (name: string) => void;
}

const UserSettings = ({ username, setUsername }: UserSettingsProps) => {
    return (
        <div>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
        </div>
    );
};

export default UserSettings;
