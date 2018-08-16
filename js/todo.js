// Make the object spin ###################################
// Make the object spin
var dataset = [
  { label: 'Bang Hai', count: 10 },
  { label: 'Robotika', count: 20 },
  { label: 'Town Hall', count: 30 },
  { label: 'Sector 6', count: 40 }
];

var width = 360;
var height = 360;
var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal(d3.schemeCategory20b);
// var color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);

var svg = d3.select('#garden')
  .append('svg')
  .classed('pi')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

function makeSacred(radius){

	var settings = {
		startX: 250,
		startY: 250,
		levels: radius,
		radius: 25
	}                    

	var needleDrop = [];

	for (i = 0; i < settings.levels; i++) { 
		if (i == 0){
			needleDrop.push(plotCenter());
		}
		radialOffset = (settings.radius * (i +1));
		needleDrop.push(plotA(radialOffset));
		needleDrop.push(plotB(radialOffset));
		needleDrop.push(plotC(radialOffset));
		needleDrop.push(plotD(radialOffset));
		needleDrop.push(plotE(radialOffset));
		needleDrop.push(plotF(radialOffset));
	}
	return needleDrop;

	function plotCenter(){
		var plot = {};
		plot.x = settings.startX;
		plot.y = settings.startY;
		return plot;
	}
	function plotA(radius){
		var plot = {};
		plot.x = settings.startX + (radius * Math.sin(60));
		plot.y = settings.startY + (radius * Math.cos(60));
		return plot;
	}
	function plotB(radius){
		var plot = {};
		plot.x = settings.startX + radius;
		plot.y = settings.startY;
		return plot;
	}
	function plotC(radius){
		var plot = {};
		plot.x = settings.startX + (radius * Math.sin(60));
		plot.y = settings.startY -(radius * Math.cos(60));
		return plot;
	}
	function plotD(radius){
		var plot = {};
		plot.x = settings.startX - (radius * Math.sin(60));
		plot.y = settings.startY -(radius * Math.cos(60));
		return plot;
	}
	function plotE(radius){
		var plot = {};
		plot.x = settings.startX - (radius);
		plot.y = settings.startY;
		return plot;
	}
	function plotF(radius){
		var plot = {};
		plot.x = settings.startX - (radius * Math.sin(60));
		plot.y = settings.startY + (radius * Math.cos(60));
		return plot;
	}
}

function seedingPlan(seeds){

	var seeds = seeds;

	var r = (2 * seeds);

	console.log(r)
	return [
	{ cx:50, cy:50, r:r, stroke:'green', fill: 'transparent' }
	]
}



function piez(seeds, plot) {
	var u = plot
		.selectAll("path")
		.data(seeds);
	u.enter()
		.append('path')
		.merge(u)
		.attr('d', arc)
		.attr("transform", transformCenter)
		.attr('fill', function(d, i) {
			return color(d.data.label);
		});
	u.exit().remove();
}


function harvest(seeds, plot){
}

function cropRotation(plot){

	var season = 1
	var oldYear = true;

	function seasons(){
		if (oldYear){
			season++;
			if(season == 4){
				oldYear = false
			}
			
		}
		else {
			season--;
			if(season == 1){
				oldYear = true
			}
		}
		plant(seedingPlan(season), plot);
	}

	setInterval(seasons, 600)
}



