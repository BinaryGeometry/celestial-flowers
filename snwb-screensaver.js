//helper
/**
 * converts degree to radians
 * @param degree
 * @returns {number}
 */
var toRadians = function (degree) {
    return degree * (Math.PI / 180);
};

/**
 * Converts radian to degree
 * @param radians
 * @returns {number}
 */
var toDegree = function (radians) {
    return radians * (180 / Math.PI);
}

/**
 * Rounds a number mathematical correct to the number of decimals
 * @param number
 * @param decimals (optional, default: 5)
 * @returns {number}
 */
var roundNumber = function(number, decimals) {
    decimals = decimals || 5;
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
//the object
var MathD = {
    sin: function(number){
        return roundNumber(Math.sin(toRadians(number)));
    },
    cos: function(number){
        return roundNumber(Math.cos(toRadians(number)));
    },
    tan: function(number){
        return roundNumber(Math.tan(toRadians(number)));
    },
    asin: function(number){
        return roundNumber(toDegree(Math.asin(number)));
    },
    acos: function(number){
       return roundNumber(toDegree(Math.acos(number)));
   },
   atan: function(number){
       return roundNumber(toDegree(Math.atan(number)));
   }
};

// the square on the hypotenuse is equal to the sum of the squares on the other two sides


// if angle less than 

var budget = {
  "budget": {
    "uid" : "all-the-budget",
    "name": "unreal product development",
    "icon":"fas fa-bug",
    "total_commited": "",
    "campaigns": [
      {"campaign_id":"1","budget_id":"all-the-budget","campaign_name":"Email Marketing",          "budget_commited":"4000","total_sales":"","total_marketing_spend":""},
      {"campaign_id":"2","budget_id":"all-the-budget","campaign_name":"Blogging and Social Media","budget_commited":"2000","total_sales":"","total_marketing_spend":""},
      {"campaign_id":"3","budget_id":"all-the-budget","campaign_name":"Loss Leaders",             "budget_commited":"6000","total_sales":"","total_marketing_spend":""}
    ],
    "assets": [
      {"asset_id":"1","asset_type":"","asset_name":"Asset Name","campaign_id":"1","total_spend":"100"},
      {"asset_id":"2","asset_type":"","asset_name":"Asset Name","campaign_id":"1","total_spend":"200"},
      {"asset_id":"3","asset_type":"","asset_name":"Asset Name","campaign_id":"2","total_spend":"300"},
      {"asset_id":"4","asset_type":"","asset_name":"Asset Name","campaign_id":"2","total_spend":"400"},
      {"asset_id":"5","asset_type":"","asset_name":"Asset Name","campaign_id":"3","total_spend":"500"},
      {"asset_id":"6","asset_type":"","asset_name":"Asset Name","campaign_id":"3","total_spend":"600"}
    ]
  }
};

var outerR = 150;
var innR   = 100;
var axleR  = 50;
var centerX = 400;
var centerY = 00;

var json = {"nodes":[
  {"x_axis":centerX, "y_axis":centerY, "radius":outerR, "color":"red", "label":"a"}, 
  {"x_axis":centerX, "y_axis":centerY, "radius":innR,   "color":"gold", "label":"b"}, 
  {"x_axis":centerX, "y_axis":centerY, "radius":axleR,  "color":"green", "label":"c"}
]};


function NodeSplicer(data)
{
     // private property
     var budget;
     var campaigns;
     var assets;

     // private constructor 
     var __construct = function() {
      
          
         budget    = data.budget;
         campaigns = budget.campaigns;
         assets    = budget.assets;
     }()

   this.getColor = function()
   {
       return color;
   };
   this.plotCenter = function()
   {
      return campaigns;
   };
}

var go = new NodeSplicer(budget);


var numberOfNodes = 6;
var angle = ( 360 / numberOfNodes );
var radius = radius;
var trueNorth = false;

console.log(go.plotCenter);



var outerR = 150;
var innR   = 100;
var axleR  = 50;
var centerX = 200;
var centerY = 200;

var oneX = ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var oneY = ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );

var twoX = ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );
var twoY = ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );

var clockFace = {
 one: {
     x: centerX + oneX,
     y: centerY + oneY
 },
 two: {
     x: centerX + twoX,
     y: centerY + twoY
 }
};

console.log(clockFace)

var json = {"nodes":[
  {"x_axis":centerX, "y_axis":centerY, "radius":outerR, "color":"red", "label":"a"}, 
  {"x_axis":centerX, "y_axis":centerY, "radius":innR,   "color":"gold", "label":"b"}, 
  {"x_axis":centerX, "y_axis":centerY, "radius":axleR,  "color":"green", "label":"c"},
  {"x_axis":clockFace.one.x, "y_axis":clockFace.one.y, "radius":20,  "color":"blue", "label":"1"},
  {"x_axis":clockFace.two.x, "y_axis":clockFace.two.y, "radius":10,  "color":"blue", "label":"2"}
]};

  var svgContainer = d3.select("#container").append("svg")
                                     .attr("width", 700)
                                     .attr("height", 700)
                                     .style("fill",function(d) { return 'orange'; });
 
  var circles = svgContainer.selectAll("circle")
                          .data(json.nodes)
                          .enter()
                          .append("circle");

  var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", function(d) { return 'transparent'; });

//helper
/**
 * converts degree to radians
 * @param degree
 * @returns {number}
 */
var toRadians = function (degree) {
    return degree * (Math.PI / 180);
};

/**
 * Converts radian to degree
 * @param radians
 * @returns {number}
 */
var toDegree = function (radians) {
    return radians * (180 / Math.PI);
}

/**
 * Rounds a number mathematical correct to the number of decimals
 * @param number
 * @param decimals (optional, default: 5)
 * @returns {number}
 */
var roundNumber = function(number, decimals) {
    decimals = decimals || 5;
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
//the object
var MathD = {
    sin: function(number){
        return roundNumber(Math.sin(toRadians(number)));
    },
    cos: function(number){
        return roundNumber(Math.cos(toRadians(number)));
    },
    tan: function(number){
        return roundNumber(Math.tan(toRadians(number)));
    },
    asin: function(number){
        return roundNumber(toDegree(Math.asin(number)));
    },
    acos: function(number){
       return roundNumber(toDegree(Math.acos(number)));
   },
   atan: function(number){
       return roundNumber(toDegree(Math.atan(number)));
   }
};

var budget = {
"budget": {
  "uid" : "all-the-budget",
  "name": "unreal product development",
  "icon":"fas fa-bug",
  "total_commited": "",
  "campaigns": [
    {"campaign_id":"1","budget_id":"all-the-budget","campaign_name":"Email Marketing",          "budget_commited":"4000","total_sales":"","total_marketing_spend":""},
    {"campaign_id":"2","budget_id":"all-the-budget","campaign_name":"Blogging and Social Media","budget_commited":"2000","total_sales":"","total_marketing_spend":""},
    {"campaign_id":"3","budget_id":"all-the-budget","campaign_name":"Loss Leaders",             "budget_commited":"6000","total_sales":"","total_marketing_spend":""}
  ],
  "assets": [
    {"asset_id":"1","asset_type":"","asset_name":"Asset Name","campaign_id":"1","total_spend":"100"},
    {"asset_id":"2","asset_type":"","asset_name":"Asset Name","campaign_id":"1","total_spend":"200"},
    {"asset_id":"3","asset_type":"","asset_name":"Asset Name","campaign_id":"2","total_spend":"300"},
    {"asset_id":"4","asset_type":"","asset_name":"Asset Name","campaign_id":"2","total_spend":"400"},
    {"asset_id":"5","asset_type":"","asset_name":"Asset Name","campaign_id":"3","total_spend":"500"},
    {"asset_id":"6","asset_type":"","asset_name":"Asset Name","campaign_id":"3","total_spend":"600"}
  ]
}
};

var outerR = 150;
var innR   = 100;
var axleR  = 50;
var centerX = 200;
var centerY = 200;

var oneOuterX = centerX + ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var oneOuterY = centerY - ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var oneInnerX = centerX + ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );
var oneInnerY = centerY - ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );

var twoOuterX = centerX + ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var twoOuterY = centerY - ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var twoInnerX = centerX + ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );
var twoInnerY = centerY - ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );

var threeOuterX = centerX + outerR;
var threeOuterY = centerY + 0;
var threeInnerX = centerX + innR;
var threeInnerY = centerY + 0;

var fourOuterX = centerX + ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var fourOuterY = centerY + ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var fourInnerX = centerX + ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );
var fourInnerY = centerY + ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );

var fiveOuterX = centerX + ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var fiveOuterY = centerY + ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var fiveInnerX = centerX + ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );
var fiveInnerY = centerY + ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );

var sixOuterX = centerX + 0;
var sixOuterY = centerY + outerR;
var sixInnerX = centerX + 0;
var sixInnerY = centerY + innR;

var sevenOuterX = centerX - ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var sevenOuterY = centerY + ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var sevenInnerX = centerX - ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );
var sevenInnerY = centerY + ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );

var eightOuterX = centerX - ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var eightOuterY = centerY + ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var eightInnerX = centerX - ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );
var eightInnerY = centerY + ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );

var nineOuterX = centerX - outerR;
var nineOuterY = centerY - 0;
var nineInnerX = centerX - innR;
var nineInnerY = centerY - 0;

var tenOuterX = centerX - ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var tenOuterY = centerY - ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var tenInnerX = centerX - ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );
var tenInnerY = centerY - ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );

var elevenOuterX = centerX - ( ( MathD.sin(30) ) * ( outerR / MathD.sin(90) ) );
var elevenOuterY = centerY - ( ( MathD.sin(60) ) * ( outerR / MathD.sin(90) ) );
var elevenInnerX = centerX - ( ( MathD.sin(30) ) * ( innR / MathD.sin(90) ) );
var elevenInnerY = centerY - ( ( MathD.sin(60) ) * ( innR / MathD.sin(90) ) );

var twelveOuterX = centerX - 0;
var twelveOuterY = centerY - outerR;
var twelveInnerX = centerX - 0;
var twelveInnerY = centerY - innR;

var clockFace = {
  one: {
    outer: {
      x: oneOuterX,
      y: oneOuterY
    },
    inner: {
      x: oneInnerX,
      y: oneInnerY
    }
  },
  two: {
    outer: {
      x: twoOuterX,
      y: twoOuterY
    },
    inner: {
      x: twoInnerX,
      y: twoInnerY
    }
  },
  three: {
    outer: {
      x: threeOuterX,
      y: threeOuterY
    },
    inner: {
      x: threeInnerX,
      y: threeInnerY
    }
  },
  four: {
    outer: {
      x: fourOuterX,
      y: fourOuterY
    },
    inner: {
      x: fourInnerX,
      y: fourInnerY
    }
  },
  five: {
    outer: {
      x: fiveOuterX,
      y: fiveOuterY
    },
    inner: {
      x: fiveInnerX,
      y: fiveInnerY
    }
  },
  six: {
    outer: {
      x: sixOuterX,
      y: sixOuterY
    },
    inner: {
      x: sixInnerX,
      y: sixInnerY
    }
  },
  seven: {
    outer: {
      x: sevenOuterX,
      y: sevenOuterY
    },
    inner: {
      x: sevenInnerX,
      y: sevenInnerY
    }
  },
  eight: {
    outer: {
      x: eightOuterX,
      y: eightOuterY
    },
    inner: {
      x: eightInnerX,
      y: eightInnerY
    }
  },
  nine: {
    outer: {
      x: nineOuterX,
      y: nineOuterY
    },
    inner: {
      x: nineInnerX,
      y: nineInnerY
    }
  },
  ten: {
    outer: {
      x: tenOuterX,
      y: tenOuterY
    },
    inner: {
      x: tenInnerX,
      y: tenInnerY
    }
  },
  eleven: {
    outer: {
      x: elevenOuterX,
      y: elevenOuterY
    },
    inner: {
      x: elevenInnerX,
      y: elevenInnerY
    }
  },
  twelve: {
    outer: {
      x: twelveOuterX,
      y: twelveOuterY
    },
    inner: {
      x: twelveInnerX,
      y: twelveInnerY
    }
  }

};

var json = {"nodes":[

  {"x_axis":centerX, "y_axis":centerY, "radius":outerR, "color":"red", "label":"a"}, 
  {"x_axis":centerX, "y_axis":centerY, "radius":innR,   "color":"gold", "label":"b"}, 
  {"x_axis":centerX, "y_axis":centerY, "radius":axleR,  "color":"green", "label":"c"},
  
  {"x_axis":clockFace.one.outer.x, "y_axis":clockFace.one.outer.y, "radius":20,  "color":"blue", "label":"1"},
  {"x_axis":clockFace.one.inner.x, "y_axis":clockFace.one.inner.y, "radius":10,  "color":"blue", "label":"1"},
  
  {"x_axis":clockFace.two.outer.x, "y_axis":clockFace.two.outer.y, "radius":20,  "color":"blue", "label":"2"},
  {"x_axis":clockFace.two.inner.x, "y_axis":clockFace.two.inner.y, "radius":10,  "color":"blue", "label":"2"},
  
  {"x_axis":clockFace.three.outer.x, "y_axis":clockFace.three.outer.y, "radius":20,  "color":"blue", "label":"3"},
  {"x_axis":clockFace.three.inner.x, "y_axis":clockFace.three.inner.y, "radius":10,  "color":"blue", "label":"3"},

  {"x_axis":clockFace.four.outer.x, "y_axis":clockFace.four.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.four.inner.x, "y_axis":clockFace.four.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.five.outer.x, "y_axis":clockFace.five.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.five.inner.x, "y_axis":clockFace.five.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.six.outer.x, "y_axis":clockFace.six.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.six.inner.x, "y_axis":clockFace.six.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.seven.outer.x, "y_axis":clockFace.seven.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.seven.inner.x, "y_axis":clockFace.seven.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.eight.outer.x, "y_axis":clockFace.eight.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.eight.inner.x, "y_axis":clockFace.eight.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.nine.outer.x, "y_axis":clockFace.nine.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.nine.inner.x, "y_axis":clockFace.nine.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.ten.outer.x, "y_axis":clockFace.ten.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.ten.inner.x, "y_axis":clockFace.ten.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.eleven.outer.x, "y_axis":clockFace.eleven.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.eleven.inner.x, "y_axis":clockFace.eleven.inner.y, "radius":10,  "color":"blue", "label":"4"},

  {"x_axis":clockFace.twelve.outer.x, "y_axis":clockFace.twelve.outer.y, "radius":20,  "color":"blue", "label":"4"},
  {"x_axis":clockFace.twelve.inner.x, "y_axis":clockFace.twelve.inner.y, "radius":10,  "color":"blue", "label":"4"}

]};


  var svgContainer = d3.select("#container").append("svg")
                                     .attr("width", 700)
                                     .attr("height", 700)
                                     .style("fill",function(d) { return 'orange'; });
 
  var circles = svgContainer.selectAll("circle")
                          .data(json.nodes)
                          .enter()
                          .append("circle");

  var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", function(d) { return 'transparent'; });









