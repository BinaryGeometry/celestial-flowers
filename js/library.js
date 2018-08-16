
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
