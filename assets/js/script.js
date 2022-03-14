var homeBtn = $(".home");
var favArtistBtn = $(".favoriteArtists");
var upConcertsBtn = $(".upcomingConcerts");
var userInput = $("#userInput");
var searchBtn = $("#searchBtn");
var saveFavBtn = $(".savefavBtn");
var saveConBtn = $("");
var artistName = $(".artistsName");
var artistBio = $(".artistsBio");
var concertList = $(".upcomingTourDates");
var artistImg = $(".artistImage");
var resultsPage = "./results.html";
var favArtists = [];

function artistInfo() {
  var userRequest = localStorage.getItem("userInput");
  var fmUrl =
    "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
    userRequest +
    "&api_key=69620325977759b14543d8cfc6fa68a0&format=json";
  var bandsURL =
    "https://rest.bandsintown.com/artists/" +
    userRequest +
    "/?app_id=codingbootcamp";
  var concertsURL =
    "https://rest.bandsintown.com/artists/" +
    userRequest +
    "/events/?app_id=codingbootcamp";

  fetch(fmUrl)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response);
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      artistName.text(data.artist.name);
      artistBio.html(data.artist.bio.summary);
    });
  fetch(bandsURL)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response);
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      artistImg.attr("src", data.image_url);
    });
  fetch(concertsURL)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response);
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);

      for (i = 0; i < 5; i++) {
        var date = moment(data[i].datetime).format("MMM Do, YYYY");
        console.log(moment(date).format("MMM Do, YYYY"));
        var li = $("<li>");
        $("<a>")
          .attr("href", data[i].url)
          .text(
            data[0].artist.name +
              " Performing At " +
              data[i].venue.name +
              " " +
              data[i].venue.location +
              " " +
              date
          )
          .appendTo(li);
        li.appendTo(concertList);
      }
    });
}

searchBtn.on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  setUserInput();
  gotoResults();
});

function setUserInput() {
  localStorage.setItem("userInput", userInput.val().replace(/\s+/g, "+"));
}

function gotoResults() {
  window.location.href = resultsPage;
}

function saveToFav() {
  favArtists = JSON.parse(localStorage.getItem("FavArtist"));
  if (favArtists == null) {
    favArtists = [];
  }
  var userRequest = localStorage.getItem("userInput");
  favArtists.push(userRequest);
  localStorage.setItem("FavArtist", JSON.stringify(favArtists));
}

function getFav() {
  favArtists = JSON.parse(localStorage.getItem("FavArtist"));
}

saveFavBtn.on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  saveToFav();
  getFav();
});

getFav();
