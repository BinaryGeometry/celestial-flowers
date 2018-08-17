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


		// page specific code goes here

		var field = d3.select('#garden')
		  .append('svg')
		  .attr('width', width)
		  .attr('height', height);

		var centerNode = {cx:120, cy:120};

		var opts = {
			// points: 20,
			// radius: 10,
			// r: 10,
			// guideColor: 'green',
			// centerR: 5,
			// innerR: 50,
			// outerR: 75,
			// showGuides: true,
			// fill: 'transparent',
			// stroke 'green'
			// ,
			// colors: ['blue','purple','pink', 'electricpink']
		}

		// plant(crop('peas', hours['six'], {cx:100, cy:100}), svg2);

		// new Field()
		var crop = new Crop('peas', 4, centerNode, opts);
		plant(crop, field);

		// UI controller actions
		$('.click').on('click', function(e){

			e.preventDefault();

			var $t = $(this);

			var dataID = $t.attr('data-splice');

			var crop = new Crop('peas', dataID, centerNode, opts);

			plant(crop, field);

			$('.click.active').removeClass('active');
			$t.addClass('active');
		});

		// $('.color').on('click', updatePattern);
		/*
		// clock.begin(4);
		*/
		// var ami = new robot('ami');