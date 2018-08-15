
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

function seedingPlan(seeds){

	var seeds = seeds;

	var r = (2 * seeds);

	console.log(r)
	return [
	{ cx:50, cy:50, r:r, stroke:'green', fill: 'transparent' }
	]
}

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
		.attr("class", function(d) { return d3.select(this).attr("class") + " " + d; })
		.style("stroke", function(d){ return d.stroke; }) 
		.style('fill', function(d){ return d.fill; })
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

function robot(iAm){
    this.position = [0,0,0];
    this.whatAmI = function(){
        alert('I am ' + this.iAm);
        alert('I am ' + th);
    };
    return {
    	whatAmI : this.whatAmI
    }
}

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

/*
https://www.mathsisfun.com/geometry/radians.html
*/
function crop(name, dataSet, center){

	var dataAry = [];

	var noSections = dataSet.length;

	var r = 10;
	var centerR = 5;
	var innerR  = 50;
	var outerR  = 75;

	var centerC = { cx:center.cx, cy:center.cx, r:centerR, stroke:'green', fill: 'transparent' }
	var innerC  = { cx:center.cx, cy:center.cx, r:innerR, stroke:'green', fill: 'transparent' }
	var outerC  = { cx:center.cx, cy:center.cy, r:outerR, stroke:'green', fill: 'transparent' } 

	// Tjey are sick tunes
	/*
	Plot the inner and outer reference circles
	*/
	// dataAry.push(centerC)
	// dataAry.push(innerC)
	// dataAry.push(outerC)

	var sections = 19;

	for (var i = sections - 1; i >= 0; i--) {

		// Where r is the radius, cx,cy the origin, and a the angle.
		// var x = center.cx + r * Math.cos(noSections/360);
		// var y = center.cy + r * Math.sin(noSections/360);

		console.log('machine', dataSet[i])

		var x = center.cx + outerR * Math.cos(2 * Math.PI * i / sections);
		var y = center.cy + outerR * Math.sin(2 * Math.PI * i / sections);
		// $("#center").append("<div class='point' style='left:"+ x +"px;top:"+ y +"px'></div>");    

		// dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: 'transparent' } );
		dataAry.push( { cx:center.cx, cy:center.cy, r:r, stroke:'green', fill: 'transparent' } );
		// dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: 'transparent' } );
	}
	// console.log('-', dataAry)
	return dataAry;
}

// var plot
// = d3.select("#garden")
// .append("svg")
// .attr("width", 240)
// .attr("height", 240)

// cropRotation(plot);

// ami.whatAmI();
// var ami = new robot('ami');

/* // ############################################################################### */

// https://grokbase.com/t/gg/d3-js/1336cnkbkw/an-idiots-guide-to-arc-transitions

var groups = {
	'one'   : [{name:'One'}],
	'two'   : [{name:'One'},{name:'Two'}],
	'three' : [{name:'One'},{name:'Two'},{name:'Three'}],
	'four'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'}],
	'five'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'}],
	'six'   : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'}],
	'seven' : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'}],
	'eight' : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'}],
	'nine'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'}],
	'ten'   : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'}],
	'eleven': [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'},{name:'Eleven'}],
	'twelve': [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'},{name:'Eleven'},{name:'Twelve'}]
}

// plant(crop('peas', groups['two'], {cx:100, cy:100}), plot)
// plant(seedingPlan(season), plot);
// plant(buildGroup('six', groups, {cx:50, cy:50}), plot);

var dataset = [
  { label: 'Bang Hai', count: 20 },
  { label: 'Lions den', count: 20 },
  { label: 'Crew', count: 20 },
  { label: 'Robotika', count: 20 },
  { label: 'Town Hall', count: 20 },
  { label: 'Sector 6', count: 20 }
];

var data = {
	set1: [{ label: 'Bang Hai', count: 20 }],
	set2: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 }],
	set3: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 }],
	set4: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 },{ label: 'Robotika', count: 20 }],
	set5: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 },{ label: 'Robotika', count: 20 },{ label: 'Town Hall', count: 20 }],
	set6: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 },{ label: 'Robotika', count: 20 },{ label: 'Town Hall', count: 20 },{ label: 'Sector 6', count: 20 }]
}

var width = 240;
var height = 240;
var radius = Math.min(width, height) / 2; 

var color = d3.scaleOrdinal(d3.schemeCategory20b);

// var color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);

// var svg = d3.select('#garden')
//   .append('svg')
//   .attr('width', width)
//   .attr('height', height)
// plot

var svg = d3.select('#garden')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var svg2 = d3.select('#garden')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// svg.append('g')
// // .attr('class', 'ti')
// // .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

var pie = d3.pie()
  .value(function(d) { return d.count; })
  .sort(null);

var path = svg.selectAll('g')
  .data(pie(dataset));

// path
// .enter()
// .append('path')
// .attr('d', arc)
// .attr("transform", "translate(120,120)")
// .attr('fill', function(d, i) {
// 	return color(d.data.label);
// });


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

function transformCenter(){
	var xt = width/2;
	var yt = height/2;
	return "translate("+xt+","+yt+")";
}


$('.click').on('click', repaintGraph);

$('.color').on('click', colorGraph)

function colorGraph(e) {

	e.preventDefault();
	var $t = $(this);
	var color = $t.attr('data-splice');
	$('.color.active').removeClass('active');
	$t.addClass('active');
	console.log('dsf', color);
	// .duration(1000).attr('width', 250);
	// path.transition
}

function repaintGraph(e) {

	e.preventDefault();

	var $t = $(this);

	var dataID = $t.attr('data-splice');

	var dataset = data[dataID];

	$('.click.active').removeClass('active');
	$t.addClass('active');
	
	piez(pie(dataset)
		, svg)
}
