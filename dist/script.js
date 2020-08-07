let quotes = [{
  quote: "Musica Pascit Animam",
  author: "Plato" },

{
  quote: "Do Re Mi",
  author: "Me" },

{
  quote: "Be yourself. Everyone else is already Taken.",
  author: "Oscar Wilde" },

{
  quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  author: "Dr. Seuss" },

{
  quote: "No one can make you feel inferior without your consent.",
  author: "Eleanor Roosevelt" },

{
  quote: "Success usually comes to those who are too busy to be looking for it.",
  author: "Henry David Thoreau" },

{
  quote: "It’s not who you are that holds you back, it’s who you think you’re not",
  author: "Unknown" },

{
  quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  author: "Aristotle" },

{
  quote: "The fear of death follows from the fear of life. A man who loves fully is prepared to die at any time.",
  author: "Mark Twain" },

{
  quote: "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.",
  author: "Wayne Dyer" },

{
  quote: "There is just one life for each of us: our own.",
  author: "Euripides" },

{
  quote: "You only live once, but if you do it right, once is enough.",
  author: "Mae West" }];


let colors = ["#F5CB5C", "#242423", "#333533", "#B7AD99", "#CFDBD5", "#06D6A0", "#63C5D9", "#56351E", "#3A015C"];
let currentQuote = quotes[Math.floor(Math.random() * quotes.length)].quote;
let currentAuthor = quotes[Math.floor(Math.random() * quotes.length)].author;

function quoteGen() {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function getNewQuote() {
  let quote = quoteGen();
  let previousQuote;
  if (quote == previousQuote) {
    quote = quoteGen();
  } else {
    currentQuote = quote.quote;
    currentAuthor = quote.author;

    var nextColor = Math.floor(Math.random() * colors.length);
    $("html body").animate(
    {
      backgroundColor: colors[nextColor] },


    800);
    $("#quote-box").animate(
    {
      color: colors[nextColor] },
    800);
    $(".quote-text").animate(
    { opacity: 0 }, 500,
    function () {
      $(this).animate({ opacity: 1 }, 500);
      $("#text").text(quote.quote);
    });

    $(".author").animate(
    { opacity: 0 }, 500,
    function () {
      $(this).animate({ opacity: 1 }, 500);
      $("#author").text(quote.author);
    });


    previousQuote = quote;
  }
}

$(document).ready(function () {
  getNewQuote();

  $('#new-quote').on('click', getNewQuote);

  $('#tweet-quote').on('click', function () {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" -' + currentAuthor));
  });

  $('#teacher').on('click', function () {
    window.open('https://freecodecamp.org/learn');
  });
});