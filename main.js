let Rectangle = function (width , height) {
    this.width = width;
    this.height = height;
    this.getCanvas = function () {
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext('2d');
        ctx.fillRect(4, 4, width, height);
    }
    this.getPer = function () {
        return (width + height)*2 ;
    }
    this.getArea = function () {
        return width * height ;
    }
}
let a = parseInt(prompt('Nhâp vào chiều rộng : '))
let b = parseInt(prompt('Nhâp vào chiều dài : '))
let rectangle = new Rectangle(a,b);
rectangle.getCanvas();
let per = rectangle.getPer();
let area = rectangle.getArea();
document.write('<br />'+'Chu vi là :'+per +'<br />');
document.write('Diện tích :'+area);