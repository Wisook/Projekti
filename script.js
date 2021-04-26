window.onload = function() {
	Stats();
}

function Stats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/118')
	.then(function(resp) { 
        return resp.json() 
    })
	.then(function(data) {
		var population = data.location.country_population;
		var update = data.location.last_updated;
		var confirmedCases = data.location.latest.confirmed;
		var deaths = data.location.latest.deaths;

		document.getElementById('vaesto').innerHTML = population.toLocaleString('en');
		document.getElementById('paivitys').innerHTML = update.substr(0, 10);
		document.getElementById('tapaukset').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('kuolemat').innerHTML = deaths.toLocaleString('en');
	})
	.catch(function() {
		console.log("error");
	})
}
function refreshPage(){
    window.location.reload();
} 