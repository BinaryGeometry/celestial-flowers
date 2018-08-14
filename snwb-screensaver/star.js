
// var user = 'office',
// domain = 'binarygeometry.co.uk',
// element = document.getElementById('email');
// element.innerHTML = user + '@' + domain;

// var b = {
// 	c
// }

// .classed
// .property
// .text
// .html

function seedingPlan(season){

	var season = season;

	var r = (20 * season);

	// console.log(r)
	return [
	{ cx:50, cy:50, r:r, stroke:'white', fill: 'transparent' }
	]
}

var plot
= d3.select("#garden")
.append("svg")
.attr("width", 100)
.attr("height", 100)

cropRotation(plot);

function plant(seeds, plot) {
	var u = plot
		.selectAll("circle")
		.data(seeds);
	u.enter()
		.append("circle")
		.merge(u)
		.attr("cx", function(d){ return d.cx; })
		.attr("cy", function(d){ return d.cy; })
		.attr("r", function(d){ return d.r; })
		.style("stroke", function(d){ return d.stroke; }) 
		.style('fill', function(d){ return d.fill; })
	u.exit().remove();
}

function cropRotation(plot){

	var season = 1
	var oldYear = true;

	function year(){
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

	setInterval(year, 600)
}

function robot(iAm){
    this.position = [0,0,0];
    this.whatAmI = function(){
        alert('I am ' + this.iAm);
        alert('I am ' + th);
    };
    return {
    	whatAmI : this.whatAmI
    }
};

var ami = new robot('ami');

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

// ami.whatAmI();