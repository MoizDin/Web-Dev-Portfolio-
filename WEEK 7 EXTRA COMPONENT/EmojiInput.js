import React, { useState } from "react";
import HappyFace from './happy.png';
import LikeIcon from './like.png';
import SadEmoji from './sad.png';

function EmojiInput() {
    const [emoji, setEmoji] = useState("");

    const handleInputChange = (e) => {
        const input = e.target.value.toLowerCase();
        if (input === "happy") {
            setEmoji(HappyFace);
        } else if (input === "like") {
            setEmoji(LikeIcon);
        } else if (input === "sad") {
            setEmoji(SadEmoji);
        } else {
            setEmoji("");
        }
    };

    return (
        <div className="App">
            <input 
                type="text" 
                placeholder="Type 'Happy', 'Like', or 'Sad'" 
                onChange={handleInputChange} 
            />
            <label>
                {emoji && <img src={emoji} alt="Emoji" />}
            </label>
        </div>
    );
}

export default EmojiInput;