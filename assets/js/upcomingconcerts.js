function concertInfo() {
    var userRequest = localStorage.getItem("userInput")
    var concertsURL = "https://rest.bandsintown.com/artists/" + userRequest + "/events/?app_id=codingbootcamp"
    console.log(concertsURL)

  
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

      for (i = 0; i < data.length && i < 20; i++) {
          console.log(i)
          console.log(data[i].datetime)
        var date = moment(data[i].datetime, "YYYY MM DD").format("MMM Do, YYYY")
        console.log(moment(date))
        var li = $("<li>")
        $("<a>").attr("href", data[i].url).text( data[0].artist.name + " Performing At " + data[i].venue.name + " " + data[i].venue.location + " " + date).appendTo(li);
        li.appendTo(concertList);
      }
    });
}

concertInfo();