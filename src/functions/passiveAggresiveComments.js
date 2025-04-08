const passiveAggresiveComentsTasks = [
    "Fine, added.", 
    "Another one added to the pile.", 
    "Task logged. Don't pretend you'll do it."
];
const passiveAggresiveComentsDeleteTask = [
    "Finally given up?", 
    "Another one to dust.", 
    "Task deleted. Did you even tried?"
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