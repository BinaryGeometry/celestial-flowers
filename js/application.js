/* // ############################################################################### */
// https://grokbase.com/t/gg/d3-js/1336cnkbkw/an-idiots-guide-to-arc-transitions

var width = 240;
var height = 240;
var radius = Math.min(width, height) / 2; 
var color = d3.scaleOrdinal(d3.schemeCategory20b);

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);
var pie = d3.pie()
  .value(function(d) { return d.count; })
  .sort(null);

var path = svg.selectAll('g')
  .data(pie(dataset));


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

function crop(name, dataSet, center){

	var name    = name;
	var dataSet = dataSet;
	var center  = center;

	var dataAry = [];
	var dataCoords = [];

	var l = dataSet.length;
	var r = 10;
	var centerR = 5;
	var innerR  = 50;
	var outerR  = 75;
	var angleDegrees = 360 / l;
	var angleRadians = Math.radians(angleDegrees);

	console.log('deg', angleDegrees);
	console.log('rad', angleRadians);

	var centerC = { cx:center.cx, cy:center.cx, r:centerR, stroke:'green', fill: 'transparent' }
	var innerC  = { cx:center.cx, cy:center.cx, r:innerR, stroke:'green', fill: 'transparent' }
	var outerC  = { cx:center.cx, cy:center.cy, r:outerR, stroke:'green', fill: 'transparent' } 

	// Tjey are sick tunes
	/*
	Plot the inner and outer reference circles
	*/
	var colors = ['green','gold','red','blue','purple','pink','lightgreen','orange','darkred','darkgreen','magenta','electricpink']

	points = 20
	radius = 10
	center = {x: center.cx, y: center.cy}

	function drawCirclePoints(points, radius, center){
		var datanodes = []
		let slice = 2 * Math.PI / points
		for (var i = points - 1; i >= 0; i--) {
			let zangle = slice * i
			let newX = center.x + radius * Math.cos(zangle)
			let newY = center.y + radius * Math.sin(zangle)
			let point = {cx: newX, cy: newY, r:centerR, stroke:'green', fill: 'transparent' }
			console.log(point)
			datanodes.push(point)
			dataAry.push(point)
		}
		console.log('nodes', datanodes)
		return datanodes;
	}

	drawCirclePoints(points, radius, center)

	dataAry.push(centerC)
	dataAry.push(innerC)
	dataAry.push(outerC)

	// var sections = 4;
	// var angle = 0;
	// var angleRef = angleRadians;

	// one = {cx: center.cx + 0, cy: center.cy + innerR, r:r, stroke:'green', fill: 'transparent'}
	// dataAry.push(one)
	// two = {cx: center.cx + 0, cy: center.cy - innerR, r:r, stroke:'green', fill: 'transparent'}
	// dataAry.push(two)

	// for (var i = l - 1; i >= 0; i--) {
	// 	console.log('opopop', i / sections );
	// 	// Where r is the radius, cx,cy the origin, and a the angle.
	// 	// var x = center.cx + r * Math.cos(noSections/360);
	// 	// var y = center.cy + r * Math.sin(MathnoSections/360);

	// 	// console.log('machine', dataSet[i])

	// 	var x = center.cx + outerR * Math.cos(i / sections);
	// 	var y = center.cy + outerR * Math.sin(i / sections);
		
	// 	// i / sections = angle + angleRef;

	// 	// var x = r*cos(ohm)
	// 	// var y = r*sin(ohm)

	// 	// $("#center").append("<div class='point' style='left:"+ x +"px;top:"+ y +"px'></div>");    
		
	// 	// r = r * 1 + 5 ;

	// 	// dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: 'transparent' } );
	// 	// dataAry.push( { cx:center.cx, cy:center.cy, r:r, stroke:'green', fill: 'transparent' } );
	// 	// dataAry.push( { cx:center.cx, cy:center.cy, r:r, stroke:'green', fill: 'transparent' } );
	// 	// dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: 'transparent' } );
	// 	dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: colors[i] } );
	// }

	// // console.log('pre for loop', sections)
	// for (var i = sections - 1; i >= 0; i--) {
	// 	// var r 		dataCoords.push({}
	// 	// dataAry[i].r = i * r;
	// 	// console.log('machine lives', dataSet[i])
	// 	dataCoords.push(dataSet[i]);
	// }

	console.log('-', dataAry)
	console.log('-', dataCoords)
	
	// return {
		// dataAry: dataAry,
		// dataCoords: dataCoords
	// };
	return dataAry;
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

