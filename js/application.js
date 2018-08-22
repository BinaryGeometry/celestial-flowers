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

// http://tobyho.com/2010/11/22/javascript-constructors-and/
// function Crop(name, dataSet, centerCoords, opts){
function Crop(dataSet, go){


	var defaults = {
		// Required
		this.name: 'peas',
		dataSet = dataSet;
		centerCoords: '{cx:120, cy:120}',
		// Optional
		guideColor: '#00800040',
		r: 10,
		centerR: 5,
		innerR: 50,
		outerR: 75,
		showGuides: true,
		stroke: 'green',
		fill: 'transparent',
		colors: ['green','gold','red','blue','purple','pink','lightgreen','orange','darkred','darkgreen','magenta','electricpink'],
	}

	if (typeof go !== "object") go = [];
	for(var i in defaults)
		if(typeof go[i] == "undefined") 
			go[i] = defaults[i];
	
	// storage variables
	this.dataAry = [];

	// definded variables
	this.dataSet = dataSet;
	this.opts = go;

	// config variables
	this.name = this.opts.name
	this.centerCoords  = this.opts.centerCoords;

	// math variables
	this.l = this.dataSet.length;
	this.angleDegrees = 360 / this.l;
	this.angleRadians = Math.radians(this.angleDegrees);

	this.r = this.opts.r;
	this.guideColor = this.opts.guideColor;
	this.centerR = this.opts.centerR;
	this.innerR  = this.opts.innerR;
	this.outerR  = this.opts.outerR;

	this.showGuides = this.opts.showGuides;

	this.stroke = this.opts.stroke;
	this.fill = this.opts.fill;
	this.colors = this.opts.colors;

	// totod
	this.center = {x: this.centerCoords.cx, y: this.centerCoords.cy};
	this.points = this.l;
	this.radius = this.r;

	// some hardcoded guidlines added to the array of data nodes
	if(this.showGuides)
		// dataAry.push({ cx:center.x, cy:center.y, r:centerR, stroke:guideColor, fill: 'transparent' })
		this.dataAry.push({ cx:this.center.x, cy:this.center.y, r:this.innerR, stroke:this.guideColor, fill: 'transparent' })
		this.dataAry.push({ cx:this.center.x, cy:this.center.y, r:this.outerR, stroke:this.guideColor, fill: 'transparent' })


	// lets call a function strait of the bat
	this.drawCirclePoints (this.points, this.radius, this.center)

	// Return an array of nodes to be consumed by our d3 tracktor
	// should the return statement be after the function definitions
	return this.dataAry;

	/*
	 * @param points - the number of things i don't understand
	*/
	this.drawCirclePoints = function(points, radius, center){
		let datanodes = []
		let slice = 2 * Math.PI / points
		for (var i = points - 1; i >= 0; i--) {
			let zangle = slice * i
			let newX = center.x + radius * Math.cos(zangle)
			let newY = center.y + radius * Math.sin(zangle)
			// var rrrr = centerRspiral(centerR, i, 'r+(r*1.5-r)');
			var rrrr = centerRspiral(centerR, i, 'r+(i*i)');
			// let point = {cx: newX, cy: newY, r:centerR, stroke:'green', fill: 'transparent' }
			let point = {cx: newX, cy: newY, r:rrrr, stroke:'green', fill: 'transparent' }
			// console.log(point)
			datanodes.push(point)
			this.dataAry.push(point)
		}
		// console.log('nodes', datanodes)
		return datanodes;
	}

	/*
	 * @param toEval - a string which maniplates the starting r and i values  
	*/
	this.centerRspiral = function(r, i, toEval){

		var r = this.r;
		var i = this.i;

		console.log(r * 1);

		// return r * i;
		// return r;
		return eval(toEval);
		// return eval(toEval);
	}

}
