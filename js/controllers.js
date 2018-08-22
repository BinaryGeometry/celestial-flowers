
var fieldData = [
  { label: 'Bang Hai', count: 20 },
  { label: 'Lions den', count: 20 },
  { label: 'Uptown', count: 20 },
  { label: 'Robotika', count: 20 },
  { label: 'Town Hall', count: 20 },
  { label: 'Sector 6', count: 20 }
];

var opts = {
	name: 'peas',
	dataSet: fieldData,
	centerCoords: {cx:120, cy:120},
	points: 20,
	radius: 10,
	r: 10,
	guideColor: '#00800040',
	centerR: 5,
	innerR: 50,
	outerR: 75,
	showGuides: true,
	fill: 'transparent',
	stroke: 'green',
	colors: ['blue','purple','pink', 'electricpink']
}

// let seedingPlan = {
// 	centerNode: centerNode,
// 	opts: opts
// }
let seedingPlan = opts;

var leftField = new Field('#garden', seedingPlan);

// var crop = new Crop('peas', 4, centerNode, opts);

// plant(crop, field);

// UI controller actions
$('.click').on('click', function(e){	
	e.preventDefault();
	var $t = $(this);
	var dataID = $t.attr('data-splice');

	// TODO - Field needs method to handle this
	// seedingPlan.guideColor = 'gold';
	// seedingPlan.centerCoords = '{cx:220, cy:120}';
	
	seedingPlan.r = 20;
	leftField.rePlant(seedingPlan);

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
	
	piez(pie(fieldData)
		, svg)
}

