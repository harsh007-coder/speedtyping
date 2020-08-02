var quotes =[
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing." ,
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." ,
"If life were predictable it would cease to be life, and be without flavor." ,
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,
"Life is what happens when you're busy making other plans." 
]

const msg = document.getElementById('msg');  //MSG IS USED TO STORE QUOTE.
const typingArea = document.getElementById('texting'); // DEFINE TYPING.
const btn = document.getElementById('btn'); 
let startTime, endTime; // THE TIME OF TYPING.

const startGame = () =>{
    let random = Math.floor(Math.random()*quotes.length); //RANDOM = 0 1 2 3 4 5 AND SO-ON...
    msg.innerText = quotes[random];  //QUOTES[ARRAY INDEX OF RANDOM] QUOTES[0,1,2,3...]

    let date = new Date();
    startTime = date.getTime(); // THE START TIME OF TIMING 
    btn.innerText = 'Done';  // WHEN START BUTTON IS PRESSED DONE IS SHOWED .
}

const endGame = () =>{
    let date = new Date();
     endTime = date.getTime();
    let timing = ((endTime - startTime)/ 1000); //CALCULATE THE TOTAL TIME OF YOUR TYPING. (70-5)/1000MS(MILISECOND)
 
    let totalStr = typingArea.value; //TOTALSTR STORES VALUE OF YOUR TYPING.
    let wordCount = wordCounter(totalStr)

    let speed = Math.floor((wordCount/timing)*60); //SPEED = (20/10)*60 = 120
    let finalmsg = "You typed total at " +speed+ " words per minutes "; // YOU TYPED TOTAL AT 120 WORDS PER MINUTE

    finalmsg += compare(msg.innerText,totalStr) //COMPARE(MSG AND YOUR TYPING )

    msg.innerText = finalmsg;  // FINALMSG SHOWS ON SCREEN.
}

const compare =(str1,str2)=>{
let words1 = str1.split(" "); //WORDS1 STORES MSG AND SPLIT IS USED TO COMPARE EACH WORDS.
let words2 = str2.split(" "); //WORDS2 STORES YOUR TYPING AND SPLIT IS USED TO COMPARE EACH WORDS.
let cnt = 0; 

words1.forEach(function(item,index){ //WORDS1(ITEMS MEANS VALUE,INDEX )
    if(item == words2[index]){ // IF ITEM IS EQUAL TO YOURTYPING INDEX THEN CNT ++
        cnt++;
    }
})
let errorWords = (words1.length-cnt);

return (cnt + " correct out of " + words1.length + " words and the total errors are " + errorWords + ".");
}

const wordCounter = (str) =>{
 let response = str.split(" ").length; //FOR EVERY SPACE IN WORDS STORED IN ARRAY AND WE GET OUR LENGTH.
 return response;
}

btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
            typingArea.disabled = false; //YOUR TYPING IS ACTIVE IF BUTTON IS START
            startGame();
    }else if (this.innerText == 'Done'){
            typingArea.disabled = true; // YOUR TYPING IS NOT ACTIVE IF BUTTON IS DONE.
            btn.innerText ='Start'; 
            endGame();

        }
    })