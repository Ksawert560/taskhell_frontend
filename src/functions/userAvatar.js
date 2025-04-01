import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';



function checkAvatar(name){
    if(!localStorage.getItem("userAvatar")){
        const avatar = createAvatar(identicon, {
            seed: name,
        });
        localStorage.setItem("userAvatar", avatar.toString());
    }
}

export default checkAvatar;