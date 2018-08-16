/* // ############################################################################### */
// https://grokbase.com/t/gg/d3-js/1336cnkbkw/an-idiots-guide-to-arc-transitions
// https://bl.ocks.org/mbostock/3e961b4c97a1b543fff2
// http://bl.ocks.org/mbostock/5100636

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

// var path = svg.selectAll('g')
//   .data(pie(dataset));

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

function Crop(name, dataSet, centerCoords, opts){

	var name    = name;
	var dataSet = dataSet;
	var centerCoords  = centerCoords;

	var dataAry = [];
	var dataCoords = [];

	var l = dataSet.length;

	var angleDegrees = 360 / l;
	var angleRadians = Math.radians(angleDegrees);

	var r = opts.r || 10;
	
	var guideColor = opts.guideColor || 'green';
	var centerR = opts.centerR || 5;
	var innerR  = opts.innerR || 50;
	var outerR  = opts.outerR || 75;

	var showGuides = opts.showGuides || true;

	var stroke = opts.stroke || 'green';
	var fill = opts.fill || 'transparent';
	var colors = opts.colors || ['green','gold','red','blue','purple','pink','lightgreen','orange','darkred','darkgreen','magenta','electricpink'];

	var center = {x: centerCoords.cx, y: centerCoords.cy};
	var points = l;
	var radius = r;

	if(showGuides)
		dataAry.push({ cx:center.x, cy:center.y, r:centerR, stroke:guideColor, fill: 'transparent' })
		dataAry.push({ cx:center.x, cy:center.y, r:innerR, stroke:guideColor, fill: 'transparent' })
		dataAry.push({ cx:center.x, cy:center.y, r:outerR, stroke:guideColor, fill: 'transparent' })

	function drawCirclePoints(points, radius, center){
		var datanodes = []
		let slice = 2 * Math.PI / points
		for (var i = points - 1; i >= 0; i--) {
			let zangle = slice * i
			let newX = center.x + radius * Math.cos(zangle)
			let newY = center.y + radius * Math.sin(zangle)
			var rrrr = centerRspiral(centerR, i, 'r+(r*1.5)');
			// let point = {cx: newX, cy: newY, r:centerR, stroke:'green', fill: 'transparent' }
			let point = {cx: newX, cy: newY, r:rrrr, stroke:'green', fill: 'transparent' }
			console.log(point)
			datanodes.push(point)
			dataAry.push(point)
		}
		console.log('nodes', datanodes)
		return datanodes;
	}

	function centerRspiral(r, i, toEval){

		var r = r;
		var i = i;

		console.log(r * 1);

		return r * i;
		// return eval(toEval);
		// return eval(toEval);
	}

	drawCirclePoints (points, radius, center)
	
	return dataAry;
}
