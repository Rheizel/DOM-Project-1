// Variables //

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{

  quote: '"Nobody Decides To Die Because They Want To. Most Death Is Unexpected And Unwanted."',
  person: 'Chartollet Katakuri'

}, {

  quote: '"If We Lose Credibility Just By Admitting Fault, Then We Didnt Have Any In The First Place."',
  person: 'Fujitora'
  
}, {

  quote: '"There Comes A Time When A Man Must Stand And Fight. And That Is When His Friends Dreams Are Being Laughed At"',
  person: 'Usopp'

}, {
  quote: '“When You Aim High, You Sometimes Come Across Fights Not Worth Fighting.”',
  person: 'Marshall D. Teach'
}, {
  quote: '"You Can Pour Drinks On Me. You Can Throw Food At Me... But For Good Reason Or Not, Nobody Hurts A Friend Of Mine!"',
  person: 'Shanks'

}];
    

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})