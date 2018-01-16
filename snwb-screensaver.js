var plantSeeds = function(startX, startY, spacing, color){
  
  // var jsonCircles = [];
  
  var seedMap = [
    { "x_axis": startX, "y_axis": startX, "radius": spacing, "color" : "brown" },
    { "x_axis": startX, "y_axis": (spacing * 2), "radius": spacing, "color" : "brown"},
    { "x_axis": (spacing * 2), "y_axis": 0, "radius": spacing, "color" : "green"},
    { "x_axis": (spacing * 2), "y_axis": (spacing * 2), "radius": spacing, "color" : "green"},
    { "x_axis": (spacing * 4), "y_axis": 0, "radius": spacing, "color" : "brown"},
    { "x_axis": (spacing * 4), "y_axis": (spacing * 2), "radius": spacing, "color" : "brown"}
  ];

  return seedMap;
}

function surveyPlot(width, height, startX, startY, spacing){

    var movesAlongX = ( Math.ceil( width / spacing ) );
    console.log('movesAlongX', movesAlongX)
    var movesAlongY = ( Math.ceil( height / spacing ) );
    console.log('movesAlongY', movesAlongY)

    var plantingMachinePath = [];
    
    var machineStartX = startX;
    var machineStartY = startY;
        
    var machinePositionX = machineStartX;
    var machinePositionY = machineStartY;

    // we need to know how many passes of the field the machine makes
    for (var i = movesAlongX / 2; i >= 0; i--) {

            
      // at each planting location along the pass we make a measurement
      for (var p = movesAlongX / 2; p >= 0; p--){

        plantingMachinePath.push( {"x_axis": machinePositionX, "y_axis":machinePositionY, "radius":spacing, color:"tomato"} ) 

        machinePositionX = machinePositionX + (spacing * 2);
      
      }

      // at the end we reset the y co-ordinate
      machinePositionX = 0;

      // move the machine along the row to the next pass
      machinePositionY = machinePositionY + (spacing * 2);

    }
    
    console.log('plantingMachinePath', plantingMachinePath)
    return plantingMachinePath;

}

// surveyPlot(1200, 500, 0, 0, 50);
var plantingMachineInstructions = new surveyPlot(1200, 500, 0, 0, 50);

console.log(plantingMachineInstructions)
// var jsonCircles = [
//    { "x_axis": 0, "y_axis": 0, "radius": 50, "color" : "brown" },
//    { "x_axis": 0, "y_axis": 100, "radius": 50, "color" : "brown"},
//    { "x_axis": 100, "y_axis": 0, "radius": 50, "color" : "green"},
//    { "x_axis": 100, "y_axis": 100, "radius": 50, "color" : "green"},
//    { "x_axis": 200, "y_axis": 0, "radius": 50, "color" : "brown"},
//    { "x_axis": 200, "y_axis": 100, "radius": 50, "color" : "brown"}

// ];

 
// var pl = makeSacred.go(50)
// console.log('dfd', pl)

// var foo = plantingMachineInstructions.concat()
 // console.log('dfd', foo)
 
var svgContainer = d3.select("#container").append("svg")
                                     .attr("width", 1200)
                                     .attr("height", 500);
 
var circles = svgContainer.selectAll("circle")
                          // .data(plantSeeds(0,0,50,'green'))
                          // .data(jsonCircles)
                          // .data(foo)
                          // .data(makeSacred(50, 'sun'))
                          .data(plantingMachineInstructions)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", function(d) { return 'transparent'; });

console.log(circleAttributes);





  var plough = function(container){
    var svgContainer = d3.select(container)
    var width = svgContainer.node().getBoundingClientRect().width;
    var height = svgContainer.node().getBoundingClientRect().height;
    
    console.log(width, height);

    var circleRadii = [40, 20, 10];
    
    svgContainer.append("svg")
      .attr("width", width)
      .attr("height", height);
      field.selectAll("circle")
          // .data(circleRadii)        
          .data(makeSacred(1, plant))
          .enter()
          .append("circle")
          console.log(circles)
    
    // return svgContainer;
  }

  // var svgContainer = d3.select("#container")
  //       .append("svg")
  //       .attr("width", 500)
  //       .attr("height", 500);
    
  // var circleRadii = [40, 20, 10];
  
  var gardenTidily = function(container, field, plant){

    // var circleRadii = [40, 20, 10];

    var circles = field.selectAll("circle")
    
          // .data(circleRadii)        
          .data(makeSacred(1, plant))
          .enter()
          .append("circle")
          console.log(circles)
    
    var circleAttributes = circles
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
          .attr("r", 50)
          .style("stroke", 'green') 
          // .style('fill', 'transparent')

    var count = 1;
    
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
  
  // var field = plough('#container');
  // console.log(field);
  // gardenTidily("#container", field, 'sun');
  // gardenTidily("#container", field, 'moon');

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

function makeSacred(radius){

  this.sun = function(location) {
      
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
      { "x_axis": radius+xp,   "y_axis": yp, radius:50, "color": "green"}, 
      { "x_axis": radius/2+xp,  "y_axis": radius*h+yp, radius:50, "color": "green"},
      { "x_axis": -radius/2+xp,  "y_axis": radius*h+yp, radius:50, "color": "green"},
      { "x_axis": -radius+xp,  "y_axis": yp, radius:50, "color": "green"},
      { "x_axis": -radius/2+xp,  "y_axis": -radius*h+yp, radius:50, "color": "green"},
      { "x_axis": radius/2+xp, "y_axis": -radius*h+yp, radius:50, "color": "green"},
      { "x_axis": (radius/2)+xp,   "y_axis": yp, radius:50, "color": "green"}, 
      { "x_axis": (radius/2)/2+xp,  "y_axis": (radius/2)*h+yp, radius:50, "color": "green"},
      { "x_axis": -(radius/2)/2+xp,  "y_axis": (radius/2)*h+yp, radius:50, "color": "green"},
      { "x_axis": -(radius/2)+xp,  "y_axis": yp, radius:50, "color": "green"},
      { "x_axis": -(radius/2)/2+xp,  "y_axis": -(radius/2)*h+yp, radius:50, "color": "green"},
      { "x_axis": (radius/2)/2+xp, "y_axis": -(radius/2)*h+yp, radius:50, "color": "green"},
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
    return 
      moon;
  }

  if(celestialbody == 'sun'){
    return {go: this.sun }
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
