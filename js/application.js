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
function Crop(name, dataSet, centerCoords, opts){

	console.log('sdf', opts);

	this.name    = (typeof name === undefined) ? 'peas' : name;
	this.dataSet = dataSet;
	this.centerCoords  = (typeof centerCoords === undefined) ? '{cx:120, cy:120}' : centerCoords;
	this.opts = (typeof opts === undefined) : new Object ? opts
	
	console.log(opts);

	this.dataAry = [];

	this.l = (typeof optionalArg === undefined) ? 6 : this.dataSet.length;

	this.angleDegrees = 360 / this.l;
	this.angleRadians = Math.radians(this.angleDegrees);

	this.r = opts.r;

	this.guideColor = opts.guideColor;
	this.centerR = opts.centerR;
	this.innerR  = opts.innerR;
	this.outerR  = opts.outerR;

	this.showGuides = opts.showGuides;

	this.stroke = opts.stroke;
	this.fill = opts.fill;
	this.colors = opts.colors;

	/* 
	None of the opts where optinional
	this.guideColor = (typeof opts.guideColor === undefined) ? '#00800040' : opts.guideColor;
	this.centerR = (typeof opts.centerR === undefined) ? 5 : opts.centerR;
	this.innerR  = (typeof opts.innerR === undefined) ? 50 : opts.innerR;
	this.outerR  = (typeof opts.outerR === undefined) ? 75 : opts.outerR;

	this.showGuides = (typeof opts.showGuides === undefined) ? true : opts.showGuides;

	this.stroke = (typeof opts.stroke === undefined) ? 'green' : opts.stroke;
	this.fill = (typeof opts.fill === undefined) ? 'transparent' : opts.fill;
	this.colors = (typeof opts.colors === undefined) ? ['green','gold','red','blue','purple','pink','lightgreen','orange','darkred','darkgreen','magenta','electricpink'] : opts.colors;
	*/

	this.center = {x: this.centerCoords.cx, y: this.centerCoords.cy};
	this.points = this.l;
	this.radius = this.r;

	if(this.showGuides)
		// dataAry.push({ cx:center.x, cy:center.y, r:centerR, stroke:guideColor, fill: 'transparent' })
		this.dataAry.push({ cx:this.center.x, cy:this.center.y, r:this.innerR, stroke:this.guideColor, fill: 'transparent' })
		this.dataAry.push({ cx:this.center.x, cy:this.center.y, r:this.outerR, stroke:this.guideColor, fill: 'transparent' })

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

	this.centerRspiral = function(r, i, toEval){

		var r = this.r;
		var i = this.i;

		console.log(r * 1);

		// return r * i;
		// return r;
		return eval(toEval);
		// return eval(toEval);
	}

	this.drawCirclePoints (this.points, this.radius, this.center)
	
	return this.dataAry;
}
