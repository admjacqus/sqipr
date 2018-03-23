const sqip = require("sqip");
var svgToMiniDataURI = require("mini-svg-data-uri");

const result = sqip({
  filename: ".input/top.jpg",
  numberOfPrimitives: 8
});

var svg = result.final_svg;

var optimizedSVGDataURI = svgToMiniDataURI(svg);

console.log(optimizedSVGDataURI);


