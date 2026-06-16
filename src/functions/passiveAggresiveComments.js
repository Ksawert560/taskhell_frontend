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

const passiveAggresiveComentsTasksFinish = [
    "Wait, you actually finished one? Are you feeling okay?",
    "Marked as 'done'. Are we being honest with ourselves here?",
    "Wow. Don't let this sudden burst of productivity go to your head.",
    "Okay, what important thing did you neglect in order to finish *this*?",
    "Did you click that option by accident? Be careful.",
    "Finished? Or just lowered your standards enough to call it done?",
    "One task down. Now you can relax... and ignore the rest.",
    "Alright, *that's* done. Ready to revert to your usual habits?",
    "Impressive. For you, I mean.",
    "*Slow, sarcastic clap*",
    "You completed a task! Do you want a participation trophy?",
    "Okay, logged. Don't expect a parade.",
    "Look at you, pretending to be productive.",
    "Finished? Let's see how long that lasts."
  ];
  
  const passiveAggresiveComentsTasksUnfinish = [
    "Ah, back to its natural state: unfinished. That feels right.",
    "Knew that 'finished' flag looked out of place.",
    "Changed your mind already? Can't say I'm surprised.",
    "Was the crushing weight of accomplishment too much to bear?",
    "There we go. Balance is restored to the universe.",
    "So... you *didn't* actually finish it? Color me shocked.",
    "Un-doing tasks now? Bold strategy.",
    "Right, because 'finished' is such a strong commitment.",
    "Welcome back to the 'I'll do it later' pile.",
    "Indecisive much? Just leave it unchecked next time.",
    "Okay, it's 'undone'. Feel better now?",
    "Back it goes. It probably prefers being ignored anyway.",
    "Couldn't handle the success, huh?",
    "Yep, that seems more your speed."
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
        case "finish":
            randomIndex = Math.floor(Math.random() * passiveAggresiveComentsTasksFinish.length);
            randomComment = passiveAggresiveComentsTasksFinish[randomIndex];
        break;
        case "unfinish":
            randomIndex = Math.floor(Math.random() * passiveAggresiveComentsTasksUnfinish.length);
            randomComment = passiveAggresiveComentsTasksUnfinish[randomIndex];
        break;
    }

    return {
        randomComment
    };
}


export default randomCommentGenerator;