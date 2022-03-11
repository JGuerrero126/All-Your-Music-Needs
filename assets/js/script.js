var homeBtn = $(".home");
var favArtistBtn = $(".favoriteArtists");
var upConcertsBtn = $(".upcomingConcerts");
var userInput = $("#userInput");
var searchBtn = $("#searchBtn");
var saveFavBtn = $("");
var saveConBtn = $("");
var artistName = $("");
var artistBio = $("");
var resultsPage = ("./results.html")

function artistInfo() {
    var fmUrl = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + $(userInput).val() + "&api_key=69620325977759b14543d8cfc6fa68a0&format=json"
    var ticketURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + $(userInput).val() + "&size=5&apikey=USzTc6qr6ETGb2XjLqkmH72GVPTvjCPI"

    fetch(fmUrl)
    .then(function (response) {
        if (response.status === 404) {
          console.log(response)
        } else {
          return response.json()
        }
      })
      .then(function (data) {
        console.log(data);
      });
    fetch(ticketURL)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response)
      } else {
        return response.json()
      }
    })
    .then(function (data) {
      console.log(data);
    });
}

searchBtn.on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    artistInfo();
});
