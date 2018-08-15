// https://ejb.github.io/2016/05/23/a-better-way-to-structure-d3-code.html

// plant(crop('peas', groups['two'], {cx:100, cy:100}), svg2)

// var clock = new Clock()

var Clock = function(opts) {

	// load in args from config obj
	this.data = opts.data;

	this.clock =  d3.select(opts.element)
		.append("svg")
		.attr("width", opts.size)
		.attr("height", opts.size);

	console.log(this.clock)
	// create the chart
	// this.begin(opts.data, this.clock);
	this.makeCircle();
}

Clock.prototype.makeCircle = function() {
	var splat = this.clock.append('g')
  		.data(this.pie(this.data));
}

Clock.prototype.refresh = function(seeds, plot) {

	var u = plot
		.selectAll("path")
		.data(seeds);
	u.enter()
		.append('path')
		.merge(u)
		.attr('d', this.arc)
		.attr("transform", this.transformCenter)
		.attr('fill', function(d, i) {
			return color(d.data.label);
		});
	u.exit().remove();
}

/*
https://www.mathsisfun.com/geometry/radians.html
*/
Clock.prototype.mechanism = function(name, dataSet, center){

	var dataAry = [];

	var noSections = dataSet.length;

	var r = 10
	var centerR = 10
	var innerR  = 50
	var outerR  = 75

	var centerC = { cx:center.cx, cy:center.cx, r:centerR, stroke:'green', fill: 'transparent' }
	var innerC  = { cx:center.cx, cy:center.cx, r:innerR, stroke:'green', fill: 'transparent' }
	var outerC  = { cx:center.cx, cy:center.cy, r:outerR, stroke:'green', fill: 'transparent' } 

	// Tjey are sick tunes
	/*
	Plot the inner and outer reference circles
	*/
	dataAry.push(centerC)
	dataAry.push(innerC)
	dataAry.push(outerC)

	for (var i = noSections - 1; i >= 0; i--) {
		// Where r is the radius, cx,cy the origin, and a the angle.
		var x = center.cx + r * Math.cos(noSections/360);
		var y = center.cy + r * Math.sin(noSections/360);

		console.log('machine', dataSet[i])
		// r = r + 5;
		
		dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: 'transparent' } );
	}
	// console.log('-', dataAry)
	return dataAry;
}

Clock.prototype.transformCenter = function(){

	var xt = width/2;
	var yt = height/2;
	return "translate("+xt+","+yt+")";
}

Clock.prototype.arc = function(){
	return d3.arc()
  .innerRadius(0)
  .outerRadius(radius);
}

Clock.prototype.pie = function(){
	return d3.pie()
  .value(function(d) { return d.count; })
  .sort(null);
}
