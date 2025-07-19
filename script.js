const $ = (id) => document.getElementById(id);

const score = $("score");
const frog = $("frog");
const quotes = $("frog-quotes");

// Source: ChatGPT
const frogQuotes = [
    "Ribbit.",
    "You clicked me.",
    "Again?",
    "Wow, you’re still here.",
    "You good, bro?",
    "Every click brings me closer to god.",
    "I felt that one in my soul.",
    "If you’re waiting for something to happen... it won’t.",
    "I was once a prince. Then you came along.",
    "You call this entertainment?",
    "My uncle was a toad. Disgraceful.",
    "Okay. Too many clicks. Are you okay?",
    "Is this love? Is this obsession?",
    "Your mouse must be so tired.",
    "CLICK. CLICK. CLICK. You’re addicted.",
    "Ribbit means ‘help’ in my language.",
    "You win nothing. But you keep clicking. Curious.",
    "Do you think I enjoy this?",
    "Every 500 clicks I gain self-awareness.",
    "That one felt personal.",
    "One day I’ll click back.",
    "There’s no badge. No trophy. Just the void.",
    "Click me one more time and I’ll turn into a spreadsheet.",
    "Bro please go outside.",
    "This is the worst idle game ever and you love it.",
    "Frog: 1 | Dignity: 0",
    "You clicked me more times than you texted your crush.",
    "Go touch grass. Wait. I am grass-adjacent.",
    "This isn’t even animated. And yet here we are.",
    "I can't stop you. But I can silently judge you.",
    "Ribbit. That’s frog for ‘why?’",
    "Did you just come back? I missed your chaos.",
    "You’ll hit a million someday. I fear that day.",
    "My frog therapist says this is toxic.",
    "I dare you to click me 9999 times. Nothing will happen.",
    "You’ve earned a break. JK. Keep clicking.",
    "You don’t need therapy. You need Frog Clicker.",
    "Achievement unlocked: ✨Emotional Damage✨",
    "I’m not even a real frog.",
    "Your persistence scares me.",
];

// Source: ChatGPT
const frogStartQuotes = [
    "Hey, I'm a frog. You can click me. I don't mind.",
    "You again? I missed your fingers. Wait, that sounded weird.",
    "I’m just a frog. But today… I feel clickable.",
    "Click me. Or don’t. I’m just a pixel frog living on borrowed time.",
    "Ribbit. That means ‘sup’ in frog.",
    "Welcome back. I’ve been waiting. Silently. Menacingly.",
    "I don’t do much. But I do it well.",
    "Do not click me. Unless you’re serious about it.",
    "This is not a game. This is FROG DESTINY.",
    "I'm not just a frog. I'm *the* frog.™",
];

let scoreVal = window.localStorage.getItem("score") ?? 0;

let canClick = true;
let cooldown = 150;

document.addEventListener("DOMContentLoaded", (e) => {
    score.innerText = scoreVal;
    quotes.innerText = `${
        frogStartQuotes[~~(Math.random() * frogStartQuotes.length)]
    }`;
});

document.addEventListener("keydown", (e) => {
    if (e.key !== "b") return;

    scoreVal = 0;
    window.localStorage.setItem("score", scoreVal);
    score.innerText = scoreVal;
});

frog.addEventListener("click", (e) => {
    if (!canClick) return;

    canClick = false;

    scoreVal++;
    score.innerText = `${scoreVal}`;

    if (Math.random() < 0.5) {
        quotes.style.opacity = 0;
        setTimeout(() => {
            quotes.innerText = `${
                frogQuotes[~~(Math.random() * frogQuotes.length)]
            }`;
            quotes.style.opacity = 1;
        }, 100);
    }

    window.localStorage.setItem("score", scoreVal);
    setTimeout(() => {
        canClick = true;
    }, cooldown);
});
