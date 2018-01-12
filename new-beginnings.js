// console.log('hello')

// d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

// var theData = [ 1, 2, 3 ]

// var p = d3.select("body").selectAll("p")
//   .data(theData)
//   .enter()
//   .append("p")
//   .text(function (d,i) {
//     return "i = " + i + " d = "+d;
//   });

// var circleRadii = [40, 20, 10];
var user = 'office',
    domain = 'binarygeometry.co.uk',
    element = document.getElementById('email');

    element.innerHTML = user + '@' + domain;

var svgContainer = d3.select("#container")
					.append("svg")
                    .attr("width", 500)
                    .attr("height", 500);


 var circles = svgContainer.selectAll("circle")
                           // .data(makeSacred(1))
                           .data(plotGarden())
                           .enter()
                          .append("circle"); 

// var circleAttributes = circles
//                        .attr("cx", function(d){ return d.x; })
//                        .attr("cy", function(d){ return d.y; })
//                        .attr("r", 50)
//                        .style("stroke", 'green') 
//                        .style('fill', 'transparent')

//                        var count = 1

//                        setInterval(function(){
//                        		if (count < 10){

//                        		count++;
//                        		}
//                        		else  {
//                        			count--;
//                        		}
//                        		console.log(count)
//                        		//rejoin data
//                     var circles = svgContainer.selectAll("circle")
//                         			.data(makeSacred(count));
// circles.exit().remove();//remove unneeded circles
//                     circles.enter().append("circle")
//                     // circles.transition().duration(300).append("circle")
//                         			 .attr("cx", function(d){ return d.x; })
//                        .attr("cy", function(d){ return d.y; })
//                        .attr("r", 10+count)
//                        .style("stroke", 'green') 
//                        .style('fill', 'rgba(0, 0, 0, 0.4)')

                       		
//                        }, 600)



var robot = function(){
    this.position = [0,0,0];
    this.whatAmI = function(){
        alert('I am ' + this.iAm);
    };
};






function plotGarden(){
	return [
	{x:2, y:7}
	]
}










function makeSacred(radius){


	var settings = {
		startX: 250,
		startY: 250,
		levels: radius,
		radius: 25
	}                    

	var needleDrop = [];

	for (i = 0; i < settings.levels; i++) { 
		if (i == 0){
			needleDrop.push(plotCenter());
		}
		radialOffset = (settings.radius * (i +1));
		needleDrop.push(plotA(radialOffset));
		needleDrop.push(plotB(radialOffset));
		needleDrop.push(plotC(radialOffset));
		needleDrop.push(plotD(radialOffset));
		needleDrop.push(plotE(radialOffset));
		needleDrop.push(plotF(radialOffset));
	}
	return needleDrop;

	function plotCenter(){
		var plot = {};
		plot.x = settings.startX;
		plot.y = settings.startY;
		return plot;
	}
	function plotA(radius){
		var plot = {};
		plot.x = settings.startX + (radius * Math.sin(60));
		plot.y = settings.startY + (radius * Math.cos(60));
		return plot;
	}
	function plotB(radius){
		var plot = {};
		plot.x = settings.startX + radius;
		plot.y = settings.startY;
		return plot;
	}
	function plotC(radius){
		var plot = {};
		plot.x = settings.startX + (radius * Math.sin(60));
		plot.y = settings.startY -(radius * Math.cos(60));
		return plot;
	}
	function plotD(radius){
		var plot = {};
		plot.x = settings.startX - (radius * Math.sin(60));
		plot.y = settings.startY -(radius * Math.cos(60));
		return plot;
	}
	function plotE(radius){
		var plot = {};
		plot.x = settings.startX - (radius);
		plot.y = settings.startY;
		return plot;
	}
	function plotF(radius){
		var plot = {};
		plot.x = settings.startX - (radius * Math.sin(60));
		plot.y = settings.startY + (radius * Math.cos(60));
		return plot;
	}
}
 // makeSacred();




