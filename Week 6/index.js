// maak de bar chart
// stap 1 -> welk element is het canvas
const myBarChart = document.getElementById('barChart');
// stap 2 -> config
const configBar = {
	type: 'bar', // we gaan een bar plot maken
	data: {     // alle data (data van de chart)
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // de verschillende ticks (waarden op de x-as)
		datasets: [{
			label: 'Reeks 1', // Naam van de reeks
			data: [1,2,3,4,5,6] // data van de reeks
		}] // welke waarden zijn er gekoppeld aan elke tick/x-waarde, datasets is een lijst want het kan meerdere reeksen bevatten
		// elke reeks is zijn eigen groep getallen (verschillende waarden op de legende)
	}
};
// stap 3 -> teken de config op het canvas element
new Chart(myBarChart, configBar);

// barchart 2 -> andere manier om te werken met x zelf te kiezen
const myBarChart2 = document.getElementById('barChart2');
const configBar2 = {
	type: 'bar', 
	data: {     
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], 
		datasets: [{
			label: 'Reeks 1', 
			data: [ // dit moeten we aanpassen om te zeggen: deze x waarde heeft deze y-waarde
				{x: 'Blue', y:1},
				{x: 'Green', y:3},
				{x: 'Orange', y:5},
			]
		}] 
	}
};
new Chart(myBarChart2, configBar2);

// andere soorten plots
const myOtherChart = document.getElementById('otherChart');
const configOther = {
	type: 'doughnut', 
	data: {    
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: 'Reeks 1',
			data: [1,2,3,4,5,6]
		}] 
	},
	options: {
		plugins: {
			legend: {
				display: true,
				labels: {
					color: 'rgb(0, 99, 132)'
				}
			}
		}
	}
};
new Chart(myOtherChart, configOther);