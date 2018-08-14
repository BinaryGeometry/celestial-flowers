<?php 

	// const ASSET_DIR = '';
?>

<html>
	<head>
	    <!-- snwb-screensaver-styles -->
	    <link rel="stylesheet" type="text/css" href="http://make.something/snwb-screensaver.css">
	    <script src="http://make.something/d3/d3.min.js"></script>
	    <script 
src="http://make.something/bower_components/jquery/dist/jquery.min.js"></script>
	    <!-- <script src="http://make.something/snwb-screensaver.js"></script> -->
	    <!-- <script src="http://make.something/make.sacred.js"></script> -->
		<script>
		function generateQRCode(){
			this.qrImage.style.display ='none';
			this.qrImage.src="https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=150x150&chl="
			+encodeURIComponent(QRCode.value.trim());
			this.qrImage.style.display ='inline';
		}
		</script>
</head>	
<body style="background:black">
	<div class="wrapper">
		<div class="col-sm-12">
	        <section class="snwb-widget snwb-screensaver">
            	<center>
            	<div id="garden" style="width:240px; border:1px solid #f7f4f0; height:240px;">
				</div>

	        	<a href="#" class="click" data-id="one">01</a>
	        	<a href="#" class="click" data-id="two">02</a>
	        	<a href="#" class="click" data-id="three">03</a>
	        	<a href="#" class="click active" data-id="four">04</a>
	        	<a href="#" class="click" data-id="five">05</a>
	        	<a href="#" class="click" data-id="six">06</a>
	        	<a href="#" class="click" data-id="seven">07</a>
	        	<a href="#" class="click" data-id="eight">08</a>
	        	<a href="#" class="click" data-id="nine">09</a>
	        	<a href="#" class="click" data-id="ten">10</a>
	        	<a href="#" class="click" data-id="eleven">11</a>
	        	<a href="#" class="click" data-id="twelve">12</a>

            	</center>
        	</section>

		</div>
	</div>
	<form method="post" id="qrForm">
<!-- 		<center>
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
		</center> -->
		<!-- generate 1000 codez
		print 3000 stickers
		create signup -->
	</form>
<script src="http://make.something/star.js"></script>
</body>
</html>
