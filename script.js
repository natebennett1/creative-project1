

let url = "https://www.balldontlie.io/api/v1/teams";
fetch (url)
.then(function(response) {
    return response.json();
}).then(function(json){
    console.log(json)
    let teams = "";
    teams += "<table class='center'>"
                teams += "<tr>"
                    teams += "<th class='top25h'>" + "Location</th>";
                    teams += "<th class='top25h'>" + "Team</th>";
                    teams += "<th class='top25h'>" + "Conference</th>";
                    teams += "<th class='top25h'>" + "Division</th>";
                teams += "</tr>";
    for (let i = 0; i < json.data.length; i++) {
        if (i % 2 == 0) {
        teams += "<tr>";
            teams += "<th class='top25a'>" + json.data[i].city + "</th>";
            teams += "<th class='top25a'>" + json.data[i].name + "</th>";
            teams += "<th class='top25a'>" + json.data[i].conference + "</th>";
            teams += "<th class='top25a'>" + json.data[i].division + "</th>";
        teams += "</tr>";
        }
        if (i % 2 != 0) {
            teams += "<tr>";
                teams += "<th class='top25b'>" + json.data[i].city + "</th>";
                teams += "<th class='top25b'>" + json.data[i].name + "</th>";
                teams += "<th class='top25b'>" + json.data[i].conference + "</th>";
                teams += "<th class='top25b'>" + json.data[i].division + "</th>";
            teams += "</tr>";
            }

    }
    teams += "</table>";
    document.getElementById("NBA").innerHTML = teams;
})
  