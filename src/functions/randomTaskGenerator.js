const procrastinationTasks = [
    "Learn the basics of Morse code.",
    "Research how CRT displays work.",
    "Try to learn the alphabet in sign language.",
    "Watch a tutorial on how to juggle 3 balls.",
    "Read the Wikipedia page for a randomly selected historical event.",
    "Figure out how your microwave actually heats food.",
    "Draw a map of a fictional place.",
    "Try to fold a piece of paper more than 7 times (and research why it's hard).",
    "Learn to tie 5 different types of knots.",
    "Find out the history of your favorite snack food.",
    "Explore a random location on Google Street View for 15 minutes.",
    "Listen to a genre of music you've never heard before.",
    "Attempt to write a haiku about procrastination.",
    "Learn the NATO phonetic alphabet (Alpha, Bravo, Charlie...).",
    "Research the basics of how cryptocurrency blockchain works.",
    "Find and watch a live nature cam online (e.g., birds, bears, ocean).",
    "Try to solve a Rubik's Cube (even just one side).",
    "Plan a hypothetical trip to Mars.",
    "Learn a simple magic trick involving cards or coins.",
    "Read about a conspiracy theory you find interesting (for entertainment only!).",
    "Try basic origami: fold a crane or a boat.",
    "Design your dream treehouse layout.",
    "Look up the etymology (origin) of 5 common words.",
    "Try identifying 3 constellations visible tonight (use an app/website).",
    "Write a short story where the main character is an inanimate object.",
    "Learn how to whistle loudly using your fingers.",
    "Research the different types of clouds and try to identify some outside.",
    "Create a playlist for a very specific, unusual mood (e.g., 'Cyberpunk rainy Tuesday').",
    "Try drawing something using only ASCII characters.",
    "Learn the rules of a board game or card game you've never played.",
    "Watch a documentary on a topic you know nothing about.",
    "Try to write your name legibly with your non-dominant hand.",
    "Explore the 'random article' feature on Wikipedia for 20 minutes.",
    "Learn about the history of video games.",
    "Try pixel art: create a small sprite.",
    "Research how bioluminescence works in deep-sea creatures.",
    "Invent a secret handshake.",
    "Find the weirdest product currently for sale on eBay or Etsy.",
    "Translate the lyrics of your favorite song into emojis.",
    "Learn how to beatbox a basic rhythm.",
    "Read about the Dunning-Kruger effect.",
    "Try to identify 5 different bird calls (use online resources).",
    "Design a flag for your bedroom or workspace.",
    "Learn the basic principles of lock picking (understanding tumbler locks).",
    "Research unusual or extinct animals.",
    "Try 'blackout poetry' with a newspaper page or old book page.",
    "Figure out your 'astronaut name' (using a silly online generator or formula).",
    "Watch a time-lapse video of something interesting (e.g., plant growth, city traffic).",
    "Learn about different logical fallacies.",
    "Try finger knitting or making a friendship bracelet."
  ];

function randomTaskGenerator(){
    const randomIndex = Math.floor(Math.random() * procrastinationTasks.length);
    const randomTask = procrastinationTasks[randomIndex];
    return {
        randomTask
    };
}


export default randomTaskGenerator;