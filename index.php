<?php 

	// const ASSET_DIR = '';
?>

<html>
	<head>
		<!-- snwb-screensaver-styles -->
		<link rel="stylesheet" type="text/css" href="http://make.something/snwb-screensaver.css">
		<script src="http://make.something/d3/d3.min.js"></script>
		<script src="http://make.something/bower_components/jquery/dist/jquery.min.js"></script>
		<!-- <script src="http://make.something/snwb-screensaver.js"></script> -->
		<!-- <script src="http://make.something/make.sacred.js"></script> -->
		<?php /*
		<script>

		</script>
		*/?>
</head>
<body style="background:black">
	<div class="wrapper">
		<div class="col-sm-12">
			<section class="snwb-widget snwb-screensaver">
			<center>
				<div id="garden" style="width:240px; border:1px solid #f7f4f0; height:240px;">
				</div>

				<a href="#" class="click" data-splice="set1">01</a>
				<a href="#" class="click" data-splice="set2">02</a>
				<a href="#" class="click" data-splice="set3">03</a>
				<a href="#" class="click" data-splice="set4">04</a>
				<a href="#" class="click" data-splice="set5">05</a>
				<a href="#" class="click active" data-splice="set6">06</a>

				<!-- <a href="#" class="click" data-id="seven">07</a> -->
				<!-- <a href="#" class="click" data-id="eight">08</a> -->
				<!-- <a href="#" class="click" data-id="nine">09</a> -->
				<!-- <a href="#" class="click" data-id="ten">10</a> -->
				<!-- <a href="#" class="click" data-id="eleven">11</a> -->
				<!-- <a href="#" class="click" data-id="twelve">12</a> -->
				
				<a href="#" class="color" data-splice="red" style="background:red;">**</a>
				<a href="#" class="color" data-splice="gold" style="background:gold;">**</a>
				<a href="#" class="color active" data-splice="blue" style="background:blue;">**</a>
				<a href="#" class="color" data-splice="green" style="background:green;">**</a>

				</center>
			</section>

		</div>
	</div>

	<?php /*
	<form method="post" id="qrForm"> -->
		<center>
			<h6>Generate QR Code using Google Chart API<h6>
			<br>
			<label>Type Website URL and hit enter:</label>
			<input type="QRCode" id="QRCode" value="https://officetricks.com" size="20">
			<br>
			<input type="button" value="Make QR Code" onclick="javascript:generateQRCode();"><br>
			<p>Output QR Image:</p>
			<img id='qrImage' style='display:inline;' 
			src='https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=200x200&chl=http%3A%2F%2Fofficetricks.com'/>
			<p>
			For more Tips and Queries, logon to <a href="https://officetricks.com" target="blank">
			https://officetricks.com<a> or email to <a href="mailto:officetricks123@gmail.com">officetricks123@gmail.com</a>.
			</p>
		</center>
		<!-- generate 1000 codez
		print 3000 stickers
		create signup -->
	</form>
	*/ ?>

	<script src="http://make.something/js/data.js"></script>
	<script src="http://make.something/js/library.js"></script>
	<script src="http://make.something/js/application.js"></script>
	<script src="http://make.something/js/controllers.js"></script>

	<script>

		// page specific code goes here

		var svg = d3.select('#garden')
		  .append('svg')
		  .attr('width', width)
		  .attr('height', height);

		var svg2 = d3.select('#garden')
		  .append('svg')
		  .attr('width', width)
		  .attr('height', height);

		plant(crop('peas', hours['six'], {cx:100, cy:100}), svg2);

		// UI controller actions
		$('.click').on('click', repaintGraph);

		$('.color').on('click', colorGraph)

		// var plant = new Plant({
		//     element: document.querySelector('#garden'),
		//     data: Hours,
		//     size:240
		// });

		/*
		// clock.begin(4);
		*/

		// var ami = new robot('ami');

	</script>

</body>
</html>
