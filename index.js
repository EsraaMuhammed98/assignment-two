var btn = document.getElementById('btn') ; 
var quoteDom = document.getElementById('quote'); 
var authorDom = document.getElementById('author'); 


 function newQuote (){
       
    var qoutes = [
        {
         qoute : '"The best revenge is massive success."' ,
        author :   '--Frank Sinatra' ,   
        },
        {
         qoute : `"You miss 100% of the shots you don't take."` ,
         author :"--Wayne Gretzy",
        },
       
        {
         qoute :  '"Resentment is like drinking poison and waiting for your enemies to die."',
        author :  "--Nelson Mandela", 
        },
       
        {
        qoute :`"It's not what happens to you, but how you react to it that matters."`,
        author: "--Epictetus",
    
         },
        {
        qoute :'"Do not take life too seriously. You will not get out alive."'        ,
        author: "--Elbert Hubbard",
    
         },
]
 

var qouteResult =Math.floor(Math.random()*qoutes.length ); 
var randomData=qoutes[qouteResult];
     quoteDom.innerHTML = randomData.qoute 
   authorDom.innerHTML = randomData.author 
 
 
 
 }

 
 
 