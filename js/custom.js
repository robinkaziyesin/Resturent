var typed = new Typed('.test', {
    strings: ['the right ingredients for the right food'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

var options = {
    offset: '#showHere',
    offsetSide: 'top',
    classes: {
        clone: 'nav--clone',
        stick: 'nav--stick',
        unstick: 'nav--unstick'
    }
};
var nav = new Headhesive('.nav', options);