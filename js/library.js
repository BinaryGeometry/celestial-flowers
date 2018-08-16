
// utility prototypes


/*
https://www.mathsisfun.com/geometry/radians.html
*/
Math.degrees = function(rad)
 {
 return rad*(180/Math.PI);
 }
 
Math.radians = function(deg)
 {
 return deg * (Math.PI/180);
 }

// d3 attribute callbacks

function transformCenter(){
	var xt = width/2;
	var yt = height/2;
	return "translate("+xt+","+yt+")";
}



	// var sections = 4;
	// var angle = 0;
	// var angleRef = angleRadians;

	// one = {cx: center.cx + 0, cy: center.cy + innerR, r:r, stroke:'green', fill: 'transparent'}
	// dataAry.push(one)
	// two = {cx: center.cx + 0, cy: center.cy - innerR, r:r, stroke:'green', fill: 'transparent'}
	// dataAry.push(two)

	// for (var i = l - 1; i >= 0; i--) {
	// 	console.log('opopop', i / sections );
	// 	// Where r is the radius, cx,cy the origin, and a the angle.
	// 	// var x = center.cx + r * Math.cos(noSections/360);
	// 	// var y = center.cy + r * Math.sin(MathnoSections/360);

	// 	// console.log('machine', dataSet[i])

	// 	var x = center.cx + outerR * Math.cos(i / sections);
	// 	var y = center.cy + outerR * Math.sin(i / sections);
		
	// 	// i / sections = angle + angleRef;

	// 	// var x = r*cos(ohm)
	// 	// var y = r*sin(ohm)

	// 	// $("#center").append("<div class='point' style='left:"+ x +"px;top:"+ y +"px'></div>");    
		
	// 	// r = r * 1 + 5 ;

	// 	// dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: 'transparent' } );
	// 	// dataAry.push( { cx:center.cx, cy:center.cy, r:r, stroke:'green', fill: 'transparent' } );
	// 	// dataAry.push( { cx:center.cx, cy:center.cy, r:r, stroke:'green', fill: 'transparent' } );
	// 	// dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: 'transparent' } );
	// 	dataAry.push( { cx:x, cy:x, r:r, stroke:'green', fill: colors[i] } );
	// }

	// // console.log('pre for loop', sections)
	// for (var i = sections - 1; i >= 0; i--) {
	// 	// var r 		dataCoords.push({}
	// 	// dataAry[i].r = i * r;
	// 	// console.log('machine lives', dataSet[i])
	// 	dataCoords.push(dataSet[i]);
	// }