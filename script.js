
//Object Array to hold quotes, sources, citaitons and years
var quotes = [ 	

	{
	quote: "Life can be hard but you can always power through it",
	source: "Demide.M"
	},
	{
	quote: "If you want to go fast, go alone. If you want to go far, go together.",
	source: "African proverb"
	},
	{
	quote: "It's OK to not be OK, as long as you don't stay that way.",
	source: "Femi.M"
	},
	{
	quote: "Life is a seris of choices.",
	source: "Demide.M"
	},
	{
	quote: "Believe you can and you're halfway there.",
	source: "Demide.M"
	},
		
	{
	quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
	source: "Sister Femi"
	},
	{
	quote: "It does not do to dwell on dreams and forget to live.",
	source: "Albus Dumbledore", 
	citation: "Harry Potter and the Sorcerer's Stone",
	year: "1997"
	},
	{
	quote: "Don't sweat the petty things and don't pet the sweaty things.",
	source: "George Carlin"
	},
	{
	quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
	source: "Eleanor Roosevelt"
	},
	{
	quote: "Do not set yourself on fire in order to keep others warm.",
	source: "Anonymous"
	},
	{
	quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
	source: "Doctor Who"
	},
	{
	quote: "It's supposed to be hard. If it were easy, everyone would do it.",
	source: "Jimmy Dugan",
	citation: "A League of Their Own"
	},
	{
	quote: "Love all, trust a few, do wrong to none.",
	source: "William Shakespeare"
	},
	{
	quote: "Clear eyes, full hearts, ",
	source: "Dillon Panthers",
	citation: "Friday Night Lights",
	year: "1990"
	},
	{
	quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
	source: "Aristotle"
	},
	
];


//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}</p>
		<img class="ren2" src="media/Adobe_Robot2.png" width="275" height="250" alt="gren">
		<img class="ren" src="media/Demide.Egypt.jpg" width="250" height="275" alt="gren">` 
		

		
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year" style="color:yellow">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}


//Quote automatically refreshes every 15 seconds
window.setInterval(
	function(){printQuote();}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote);






	
