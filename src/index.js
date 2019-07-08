// html setup

var faceHTMLCollection = document.getElementsByClassName('sid-face');
var faceArray = Array.from(faceHTMLCollection);

var doggoHTMLCollection = document.getElementsByClassName('polarbear');
var doggoArray = Array.from(doggoHTMLCollection);

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
        start: 8,
        end: -8,
        current: 0,
    },
    y: {
        start: 8,
        end: -8,
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
    faceArray.forEach(function (face, k) {

        face.style.transform = 'translate(' + output.x.opposite + 'px, ' + output.y.opposite + 'px)';
    });


    doggoArray.forEach(function (face, k) {

        face.style.transform = 'translate(' + output.x.opposite + 'px, ' + output.y.opposite + 'px)';
    });

}

window.addEventListener('mousemove', handleMouseMove);