// <?php 

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
				<?php /* options */
					$summerClass = 'summer_class';

					$summer = function(){

						$summerClass = 'summer-class';

						$dreaming = [
							[ #5
							'id' => 5,
							'task' => 'Clearing the house',
							'icon' => 'fal fa-house',
							'endpoint' => 'https://themodernsquat.xyz',
							'options' => []
							],
							[ #6
							'id' => 6,
							'task' => 'Finding a parking place',
							'icon' => 'fal fa-parking',
							'endpoint' => 'https://themodernsquat.xyz',
							'options' => []
							]
						];
						$digging = [
							[ #7
								'id' => 7,
								'task' => 'Running an off grid home offce',
								'icon' => 'fal fa-solar',
								'endpoint' => 'https://themodernsquat.xyz',
								'options' => []
							],
							[ #8
								'id' => 8,
								'task' => 'Commisioning a driver',
								'icon' => 'fal fa-driver',
								'endpoint' => 'https://themodernsquat.xyz',
								'options' => []
							],
							[ #9
								'id' => 9,
								'task' => 'Settling down for the winter',
								'icon' => 'fal fa-winter',
								'endpoint' => 'https://themodernsquat.xyz/',
								'options' => []
							]
						];
						$menus = array_merge($dreaming, $digging);
						return $menus;
					};
				?>

				<!-- <h3>How many items to show?</h3> -->
				<?php foreach ($summer() as $item): ?>
					<a href="#" class="<?= $summerClass; ?>" data-noItems="<?= $item['id']; ?>"><?= $item['id']; ?></a>
				<?php endforeach ?>
				<div id="garden" style="width:240px; border:1px solid #f7f4f0; height:240px;">
				</div>
				
				<a href="#" class="click" data-splice="1">01</a>
				<a href="#" class="click" data-splice="2">02</a>
				<a href="#" class="click" data-splice="3">03</a>
				<a href="#" class="click active" data-splice="4">04</a>
				<a href="#" class="click" data-splice="5">05</a>
				<a href="#" class="click" data-splice="6">06</a>
				<a href="#" class="click" data-splice="7">07</a>
				<a href="#" class="click" data-splice="8">08</a>
				<a href="#" class="click" data-splice="9">09</a>
				<a href="#" class="click" data-splice="10">10</a>
				<a href="#" class="click" data-splice="11">11</a>
				<a href="#" class="click" data-splice="12">12</a>
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
	<h2></h2>
	<script>
		
		var GLOBAL_summer_class = '<?= $summerClass; ?>';
		
	</script>
	<script src="http://make.something/js/data.js"></script>
	<script src="http://make.something/js/library.js"></script>
	<script src="http://make.something/js/application.js"></script>
	<script src="http://make.something/js/controllers.js"></script>
	<!-- <script></script> -->

</body>
</html>
