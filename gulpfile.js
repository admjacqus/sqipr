const sqip = require("sqip");
var gulp = require("gulp");
var svgToMiniDataURI = require("mini-svg-data-uri");

gulp.task('sqip', function () {
    const result = sqip({
        filename: "input/top.jpg",
        numberOfPrimitives: 8
    });

    var svg = result.final_svg;

    var optimizedSVGDataURI = svgToMiniDataURI(svg);

    console.log(optimizedSVGDataURI);
});