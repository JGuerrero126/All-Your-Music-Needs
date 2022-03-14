function favArtistinfo() {
  var favArtist = JSON.parse(localStorage.getItem("FavArtist"));
  localStorage.setItem("FavArtist", JSON.stringify(favArtist));
  for (i = 0; i < favArtist.length; i++) {
    var fmUrl =
      "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      favArtist[i] +
      "&api_key=69620325977759b14543d8cfc6fa68a0&format=json";
    console.log(fmUrl);

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

        var cardContainer = $("<div>")
          .attr("class", "card col-md-5")
          .attr("id", "boxFour-style")
          .attr("style", "width: 18rem");
        var cardBody = $("<div>").attr("class", "card-body");
        var cardTitle = $("<h5>")
          .attr("class", "card-title text-dark")
          .attr("id", "boxFour-text")
          .text(data.artist.name);
        var cardText = $("<p>")
          .attr("class", "card-text text-black-50")
          .html(data.artist.bio.summary);

        $(cardBody).append(cardTitle).append(cardText);
        $(cardContainer).append(cardBody);
        $(".cards-wrapper").append(cardContainer);
      });
  }
}
favArtistinfo();
