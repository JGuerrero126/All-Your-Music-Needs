var homeBtn = $(".home");
var favArtistBtn = $(".favoriteArtists");
var upConcertsBtn = $(".upcomingConcerts");
var userInput = $("#userInput");
var searchBtn = $("#searchBtn");
var saveFavBtn = $("");
var saveConBtn = $("");

function artistInfo() {
    var fmUrl = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + userInput + "&api_key=69620325977759b14543d8cfc6fa68a0&format=json"
    var ticketURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + userInput + "&size=5&apikey=USzTc6qr6ETGb2XjLqkmH72GVPTvjCPI"

    fetch(fmUrl)
    fetch(ticketURL)
    .then(function (response) {
      if (response.status !== 404) {
        console.log(response.status);
      }
    })
    .then(function (data) {
      console.log(data);
    });
}

searchBtn.on("click", artistInfo());
