
const quotes=[
    {
        quote : "I just wanted to take another look at you",
        author : " A star is born"
    },
    {
        quote : "The greatest thing you'll ever learn is just to love and be loved in return",
        author : "Moulin Rouge"
    },
    {
        quote : "It's only after we've lost everything that we're free to do anything",
        author : "Fight Club, Tyler Durben"
    },
    {
        quote : "It is not our abilities that show what we truly are, it is our choices",
        author : "Dumbledore, Harry Potter"
    },
    {
        quote : "The past can hurt, but you can either run from it, or learn from it",
        author : "Lion King"
    },
    {
        quote : "If we didn't do what we loved, we wouldn't exis",
        author : "Adonis"
    },
    {
        quote : "Every man dies, not every man really lives",
        author : "Braveheart"
    },
    {
        quote : "Ideals are peaceful, history is violent",
        author : "Don Collier, Fury"
    },
    {
        quote : "There's no place like home",
        author : "The Wizard of Oz"
    },
    {
        quote : "All we have to decide is what to do with the time that is given to us",
        author : "Gandalf, Lord of the rings"
    }
]

const quote = document.querySelector(".quotes p");
const author = document.querySelector(".quotes span");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;









