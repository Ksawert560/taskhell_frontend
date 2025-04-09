const passiveAggresiveComentsTasks = [
    "Fine, added.",
    "Task logged. Don't pretend you'll do it.",
    "Really? You need to write THAT down? Do you have the attention span of an ant or something?",
    "Another burst of motivation at 4 in the morning, huh?",
    "Again? Geez, get some help.",
    "Alright, now you can proceed to ignore that for the next few weeks.",
    "k.",
    "Note the 'delete' option next to your task, knowing you it might come in handy.",
    "Do you honestly intend to follow up on that one, or are you doing this just to make yourself feel better?",
    "lmao yeah that's not happening in this lifetime.",
    "Look at you. All professional and organized. Right."
];
const passiveAggresiveComentsDeleteTask = [
    "Finally given up?", 
    "Another one bites the dust.", 
    "Task deleted. Did you even try?",
    "My brother in Christ, that is just sad. Did you consider professional help?",
    "You know what? Don't try again later.",
    "Well that was short-lived wasn't it?",
    "Why do you even have a to-do list if you're not actually going to do anything from it?",
    "Not surprised. Just disappointed.",
    "You know what? You're right, that was pointless.",
    "Maybe you should try some motivational TikToks instead?",
    "Success is a choice. Not your choice, apparently, but still a choice.",
    "Womp womp."
];

function randomCommentGenerator(popUpOption){
    let randomComment = ""
    let randomIndex = 0
    switch(popUpOption){
        case "task":
            randomIndex = Math.floor(Math.random() * passiveAggresiveComentsTasks.length);
            randomComment = passiveAggresiveComentsTasks[randomIndex];
        break;
        case "delete":
            randomIndex = Math.floor(Math.random() * passiveAggresiveComentsDeleteTask.length);
            randomComment = passiveAggresiveComentsDeleteTask[randomIndex];
        break;
    }

    return {
        randomComment
    };
}


export default randomCommentGenerator;