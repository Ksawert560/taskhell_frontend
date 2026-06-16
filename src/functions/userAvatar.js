import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';


// function that checks if avatar is already saved in local storage if not it's generated and saved
function checkAvatar(name){
    if(!localStorage.getItem("userAvatar")){
        const avatar = createAvatar(identicon, {
            seed: name,
        });
        localStorage.setItem("userAvatar", avatar.toString());
    }
}

export default checkAvatar;