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

    var user = [];
    user.domain = 'binarygeometry.co.uk';
    user.space = 'office';
    
    var element = document.getElementById('email');
    element.innerHTML = user + '@' + domain;
    
    var svgContainer = d3.select("#container")
          .append("svg")
          .attr("width", 500)
          .attr("height", 500);
    var circles = svgContainer.selectAll("circle")
    
// var circleRadii = [40, 20, 10];
  var gardenTidily = function(container, soil, plant){
    var circles = soil
          .data(makeSacred(1, plant))
          .enter()
          .append("circle");  
    
    var circleAttributes = circles
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
          .attr("r", 50)
          .style("stroke", 'green') 
          .style('fill', 'transparent')

    var count = 1
    
    // setInterval(function(){
    //   if (count < 10){
    //  		count++;
    //  	}
    //  	else  {
    //  		count--;
    //  	}
    //   console.log(container, count)
    //   //rejoin data
    // 	var circles = svgContainer.selectAll("circle")
    //     .data(makeSacred(count, plant));
    //   circles.exit().remove();//remove unneeded circles
    //   circles.enter().append("circle")
    //   // circles.transition().duration(300).append("circle")
    //     .attr("cx", function(d){ return d.x; })
    //     .attr("cy", function(d){ return d.y; })
    //     .attr("r", 10+count)
    //     .style("stroke", 'green') 
    //     .style('fill', 'rgba(0, 0, 0, 0.4)')   		
    // }, 600)

  }
  
  gardenTidily("#container", circles, 'sun');
  // gardenTidily("#container", circles, 'moon');

  function plotHexagon(){
    var pythagorean_puzzle = (Math.sqrt(3)/2),
    radius = 100,
    xp = 250,
    yp = 150,
    hexagonData = [
      { "x": radius+xp,   "y": yp}, 
      { "x": radius/2+xp,  "y": radius*h+yp},
      { "x": -radius/2+xp,  "y": radius*h+yp},
      { "x": -radius+xp,  "y": yp},
      { "x": -radius/2+xp,  "y": -radius*h+yp},
      { "x": radius/2+xp, "y": -radius*h+yp}
    ];
  }

function makeSacred(radius, celestialbody){

  var sun = function(location) {
      
      location = location || {x:150,y:250};
      
      var h = (Math.sqrt(3)/2),
      radius = 100,
      xp = location.x, //150,
      yp = location.y, //250,
      // hexagonData = [
      // { "x": radius+xp,   "y": yp}, 
      // { "x": radius/2+xp,  "y": radius*h+yp},
      // { "x": -radius/2+xp,  "y": radius*h+yp},
      // { "x": -radius+xp,  "y": yp},
      // { "x": -radius/2+xp,  "y": -radius*h+yp},
      // { "x": radius/2+xp, "y": -radius*h+yp},
      // ]
      hexagonData = [
      { "x": radius+xp,   "y": yp}, 
      { "x": radius/2+xp,  "y": radius*h+yp},
      { "x": -radius/2+xp,  "y": radius*h+yp},
      { "x": -radius+xp,  "y": yp},
      { "x": -radius/2+xp,  "y": -radius*h+yp},
      { "x": radius/2+xp, "y": -radius*h+yp},
      { "x": (radius/2)+xp,   "y": yp}, 
      { "x": (radius/2)/2+xp,  "y": (radius/2)*h+yp},
      { "x": -(radius/2)/2+xp,  "y": (radius/2)*h+yp},
      { "x": -(radius/2)+xp,  "y": yp},
      { "x": -(radius/2)/2+xp,  "y": -(radius/2)*h+yp},
      { "x": (radius/2)/2+xp, "y": -(radius/2)*h+yp},
      ],
      plasma = []; //[{"x": xp, "y": yp}]; /* Contains the substance to be passed to the view updater */

      // this be the https://codepen.io/MarcBT/pen/wcLCe/ method
      for (var i = hexagonData.length - 1; i >= 0; i--) {
        plasma.push(hexagonData[i])
      }
      return plasma;

  }
  var moon = function(location){

    location = location || {x:150,y:250};
    
    plasma = []; //[{"x": xp, "y": yp}]; /* Contains the substance to be passed to the view updater */
    

    settings = {
      // startX: 150,
      // startY: 250,
      startX: location.x,
      startY: location.y,
      levels: radius,
      radius: 25
    }                    


    
    // endth here the variable declarations
    // this be mine, I think it's pretty readable if you can get past the pirate thing
    for (i = 0; i < settings.levels; i++) { 
      radialOffset = (settings.radius * (i +1));

      if (i == 0){
        plasma.push(plotCenter());
      }
    }

    plasma.push(plotA(radialOffset));
    plasma.push(plotB(radialOffset));
    plasma.push(plotC(radialOffset));
    plasma.push(plotD(radialOffset));
    plasma.push(plotE(radialOffset));
    plasma.push(plotF(radialOffset));


     return plasma;
  }

  if(celestialbody == 'moon'){
    return moon;
  }

  if(celestialbody == 'sun'){
    return sun;
  }


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