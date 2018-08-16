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
