// bindable functions dependant on application.js

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


// plant(crop('peas', hours['six'], {cx:100, cy:100}), svg2);
var centerNode = {cx:120, cy:120};

var opts = {
	points: 20,
	radius: 10,
	r: 10,
	guideColor: 'green',
	centerR: 5,
	innerR: 50,
	outerR: 75,
	showGuides: true,
	fill: 'transparent',
	stroke: 'green',
	colors: ['blue','purple','pink', 'electricpink']
}

let seedingPlan = {
	centerNode: centerNode,
	opts: opts
}

let configObj = opts;
		
var Field = function(plot, configObj){

	this.initial = configObj.opts;
	// this.opts = configObj.opts;
	this.crop;

	this.centerNode = configObj.centerNode

	this.field = d3.select(plot)
	  .append('svg')
	  .attr('width', width)
	  .attr('height', height);
	// page specific code goes here

	this.sow = function(){

		this.crop = new Crop('peas', 4, centerNode, this.initial);

		plant(this.crop, this.field);
	}

	this.plough = function(peas, dataID, centerNode, opts){

		this.crop = new Crop(peas, dataID, centerNode, opts);

		plant(this.crop, this.field);
	}
}

var field = new Field('#garden', seedingPlan);
// 
field.sow();

// var crop = new Crop('peas', 4, centerNode, opts);

// plant(crop, field);

// UI controller actions
$('.click').on('click', function(e){

	e.preventDefault();

	var $t = $(this);

	var dataID = $t.attr('data-splice');
 
	field.plough('peas', dataID, centerNode);

	$('.click.active').removeClass('active');
	$t.addClass('active');
});

$('.'.GLOBAL_summer_class).on('click', function(e){
	console.log('clocick')
	// e.preventDefault();

	// var $t = $(this);

	// var dataID = $t.attr('data-noItems');
 
	// field.plough('peas', dataID, centerNode);

	// $('.click.active').removeClass('active');
	// $t.addClass('active');
});

// $('.color').on('click', updatePattern);
/*
// clock.begin(4);
*/
// var ami = new robot('ami');