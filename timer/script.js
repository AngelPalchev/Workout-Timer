let countdown;
let timeLeft = 0;
let repeatCount = 1;
let currentRepeat = 0;
let rest = 0;

const timerDisplay = document.getElementById('timer');
const playButton = document.getElementById('playButton');
const setTimerButton = document.getElementById('setTimerButton');
const timeInput = document.getElementById('timeInput');
const repeatInput = document.getElementById('repeatInput');
const whistleImage = document.getElementById('whistle');
const whistleSound = document.getElementById('whistleSound');
const motivation = document.getElementById('motivation');
const restTime = document.getElementById('restInput');
const tintScreen = document.getElementById('tint');
const drinkWater = document.getElementById('water');
const quotes = [
"Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don't wait for opportunity. Create it.",
    "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream bigger. Do bigger.",
    "You don't have to be great to start, but you have to start to be great.",
    "The only bad workout is the one that didn't happen.",
    "The body achieves what the mind believes.",
    "Set your goals high, and don't stop till you get there.",
    "Your only limit is you.",
    "Train insane or remain the same.",
    "You are stronger than you think.",
    "Excuses don't burn calories.",
    "When you feel like quitting, think about why you started.",
    "If it doesn't challenge you, it doesn't change you.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Sweat is just fat crying.",
    "Don't stop until you're proud.",
    "You don't have to be extreme, just consistent.",
    "Don't give up on your dreams, or your dreams will give up on you.",
    "There is no substitute for hard work.",
    "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
    "It always seems impossible until it's done.",
    "Believe in yourself and all that you are.",
    "Success is what comes after you stop making excuses.",
    "Be stronger than your excuses.",
    "Making excuses burns zero calories per hour.",
    "The difference between wanting and achieving is discipline.",
    "The pain you feel today will be the strength you need tomorrow.",
    "Discipline is the bridge between goals and accomplishment.",
    "Don't limit your challenges. Challenge your limits.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Nothing truly great ever came from a comfort zone.",
    "You are your only limit.",
    "What seems impossible today will one day become your warm-up.",
    "Don't wait for the perfect moment, take the moment and make it perfect.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "You have to be at your strongest when you're feeling at your weakest.",
    "Success does't come from what you do occasionally, it comes from what you do consistently."
];
whistleSound.volume = 0.35;
function generateQuote() {
    const randomMotivation = Math.floor(Math.random() * quotes.length);
    const motivational = quotes[randomMotivation]
    motivation.innerHTML = motivational; 
}   

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTime(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        whistleImage.style.display = 'none';
        if (secondsLeft < 0) {
            clearInterval(countdown);
            if (currentRepeat < repeatCount - 1) {
                whistleImage.style.display = 'block';
                whistleSound.play();
                generateQuote();
                currentRepeat++;
                setTimeout(() => {
                    whistleImage.style.display = 'block';
                    timer(timeLeft);
                    whistleSound.play();

                },rest*1000 );
            } 
            else {
                // Display whistle image and play sound
                motivation.innerHTML = "Great effort! :)";
                whistleImage.style.display = 'block';
                whistleSound.play();
            }
            return;
        }
        displayTime(secondsLeft);
        const tickSound = document.getElementById('clickSound');
        if (secondsLeft < 4){
        tickSound.play();}
    }, 1000);
    whistleImage.style.display = 'none';
}

playButton.addEventListener('click', () => {
    currentRepeat = 0;
    generateQuote();
    whistleImage.style.display = 'none';
    timer(timeLeft);
});

setTimerButton.addEventListener('click', () => {
    checkTime();
    rest = parseInt(restTime.value) || 0;
    timeLeft = parseInt(timeInput.value) || 0;
    repeatCount = parseInt(repeatInput.value) || 1;
    displayTime(timeLeft);
});
function checkTime(){
    if (timeInput.value < 0 || repeatInput.value < 0 || restInput.value < 0){
        alert("Don't run away. Negative time is not enough for a workout ;)")
    }
    else if (timeInput.value <= 0){
        alert("Don't run away. No time is a No No for a workout ;)");
    }
}
