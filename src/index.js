// html setup

var facesHTMLCollection = document.getElementsByClassName('boy-face');
var facesArray = Array.from(facesHTMLCollection);

var facesHTMLCollection1 = document.getElementsByClassName('lexi-container');
var facesArray1 = Array.from(facesHTMLCollection1);

// input setup
var input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// output setup
var output = {
    x: {
        start: 18,
        end: -18,
        current: 0,
    },
    y: {
        start: 18,
        end: -18,
        current: 0,
    },
}

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

var handleMouseMove = function (event) {
    // mouse x input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    // mouse y input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    // output x
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    output.x.opposite = output.x.end - (input.mouseX.fraction * output.x.range);

    // output y
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
    output.y.opposite = output.y.end - (input.mouseY.fraction * output.y.range);

    // apply output to html
    facesArray.forEach(function (face, k) {

        face.style.transform = 'translate(' + output.x.opposite + 'px, ' + output.y.opposite + 'px)';
    });


    facesArray1.forEach(function (face, k) {

        face.style.transform = 'translate(' + output.x.opposite + 'px, ' + output.y.opposite + 'px)';
    });

}

window.addEventListener('mousemove', handleMouseMove);