var homeBtn = $(".home");
var favArtistBtn = $(".favoriteArtists");
var upConcertsBtn = $(".upcomingConcerts");
var userInput = $("#userInput");
var searchBtn = $("#searchBtn");
var saveFavBtn = $("");
var saveConBtn = $("");
var artistName = $("");
var artistBio = $("");
var concertList = $("");
var artistImg = $("");
var resultsPage = ("./results.html");

function artistInfo() {
    var userRequest = localStorage.getItem("userInput")
    var fmUrl = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + userRequest + "&api_key=69620325977759b14543d8cfc6fa68a0&format=json"
    var bandsURL = "https://rest.bandsintown.com/artists/" + userRequest + "/?app_id=codingbootcamp"
    var concertsURL = "https://rest.bandsintown.com/artists/" + userRequest + "/events/?app_id=codingbootcamp"
    console.log(fmUrl)
    console.log(bandsURL)
    console.log(concertsURL)

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
        artistName.text(data.artist.name)
        artistBio.text(data.artist.bio.summary)


      });
    fetch(bandsURL)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response)
      } else {
        return response.json()
      }
    })
    .then(function (data) {
      console.log(data);
      artistImg.attr("src", data.image_url)
    });
    fetch(concertsURL)
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
    setUserInput();
    gotoResults();
});

function setUserInput() {
    localStorage.setItem("userInput", userInput.val().replace(/\s+/g, '+'));
}

function gotoResults() {
    window.location.href = resultsPage
}

if (window.location.pathname == "results.html") {
  artistInfo();
} else if (window.location.pathname == "/C:/Users/jerry/Codingspace/All-Your-Music-Needs/results.html") {
  artistInfo();
}