const circle = {
    radius: 1,
    draw: function(){}
};

function createCircle(radius){
    return{
        radius,
        draw: function(){}
    }
}

function Circle(radius){
    this.radius = radius;
    this.draw = function(){}
}