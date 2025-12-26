quotes=[
"Little by little, what you’ve begun will naturally become important to you. What you need at the start is a little bit of curiosity.",
"Flowers still look pretty when they’re dying.",
"Always an angel, never a god",
"I am built upon the small things I do every day, and the end results are no more than a byproduct of that.",
"There are some flowers you only see when you take detours.",
"Talent is something you make bloom, instinct is something you polish.",
"Courage need not be remembered, for it is never forgotten.",
"Despite everything, it’s still you.",
"Even when the cold comes crashing through; I’m putting all my bets on you; I hope they never understand us.",
];

function updateWidget() {
    const date = new Date();
    const hour = date.getHours(); // 0 - 23

    // --- 1. HANDLE THE QUOTES (Every 2 Hours) ---
    
    // Divide the current hour by 2 and round down.
    // Examples: 
    // 8:00 AM (8/2 = 4) -> Block 4
    // 9:30 AM (9/2 = 4.5 -> 4) -> Block 4
    // 10:00 AM (10/2 = 5) -> Block 5
    const timeBlock = Math.floor(hour / 2);

    // Use the modulo operator (%) to wrap around if we run out of quotes.
    // If you have 8 quotes, block 9 will wrap back to quote #1.
    const quoteIndex = timeBlock % quotes.length;

    // Update the HTML
    document.getElementById('widget').innerHTML = quotes[quoteIndex];


    // --- 2. HANDLE THE THEME (10pm to 8am) ---

    // If it is 10PM (22) or later, OR earlier than 8AM (8)
    if (hour >= 22 || hour < 8) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// Run immediately when page loads
updateWidget();

// Run every minute (60000ms) to check if the hour changed
setInterval(updateWidget, 60000);