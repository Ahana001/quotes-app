const api = "https://type.fit/api/quotes";
var realData = {};
let author = document.querySelector("#author");
let quote = document.querySelector("#quote");
let tweet = document.querySelector("#tweet");
let tweetData = "";
let tweetAuthor = "";

var getNewQuotes = () =>{
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*(realData.length));
    
    quote.innerText = realData[randomNumber].text;
    tweetData = realData[randomNumber].text ;

    if(realData[randomNumber].author == null){
        author.innerText = "By Unknown";
    }else{
    author.innerText = realData[randomNumber].author;
    tweetAuthor = "By ["+ realData[randomNumber].author +"]";
    }
}

var getQuotes = async ()  =>{
    const data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
}

getQuotes();
tweet.addEventListener("click",()=>{
    window.open(`https://twitter.com/intent/tweet?text=${tweetData} ${tweetAuthor}`);
});