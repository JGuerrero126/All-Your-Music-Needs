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

      for (i = 0; i < 30; i++) {
        var date = moment(data[i].datetime).format("MMM Do, YYYY")
        console.log(moment(date).format("MMM Do, YYYY"))

        $("<li>", { text: data[i].venue.name + " " + data[i].venue.location + " " + date}).appendTo(concertList);
      }
    });
}

concertInfo();