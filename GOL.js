//Specificate

var canvas = document.getElementById('cl');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;

// crate box

canvas.onclick = function (event) {
var x = event.offsetX;
var y = event.offsetY;
console.log(x);
console.log(y);
x = Math.floor(x/10);
y = Math.floor(y/10);
mas [y][x] = 1;
console.log(mas);
drowField();
}

//place

function golLife() {
    var n=30, m=30;
    for (var i=0; i<m; i++) {
        mas[i] = [];
         for (var j=0; j<n; j++) {
             mas[i][j]=0;
         }
    }
}

golLife();


//Draw one box 10*10
function drowField() {
ctx.clearRect(0, 0, 300, 300);
    for (var i=0; i<30; i++) {
        for (var j=0; j<30; j++) {
            if (mas [i][j]==1) {
                ctx.fillRect(j*10, i*10, 10, 10);
            }
        }
    }
}
//BrainBOX
function StartLife() {
    var mas_2 = [];
    for (var i=0; i<30; i++) {
         mas_2 [i] = [];
        for (var j=0; j<30; j++) {
            var neighbot = 0;
            if (mas[fpm(i)-1][j]==1) neighbot++;//uo
            if (mas[i][fpp(j)+1]==1) neighbot++;//right
            if (mas[fpp(i) + 1][j]==1) neighbot++;//down
            if (mas[i][fpm(j)-1]==1) neighbot++;//right
            if (mas[fpm(i) - 1][fpp(j) + 1]==1) neighbot++;
            if (mas[fpp(i) + 1][fpp(j) + 1]==1) neighbot++;
            if (mas[fpp(i) + 1][fpm(j) - 1]==1) neighbot++;
            if (mas[fpm(i) - 1][fpm(j) - 1]==1) neighbot++;
            (neighbot==2 || neighbot ==3) ? mas_2[i][j]= 1 : mas_2[i][j] == 0;
                    }
    }
    mas = mas_2;
    drowField();
    count++;
    document.getElementById('count').innerHTML = count;
    var timer = setTimeout(StartLife, 300); //set timer

}
//Mirror
function fpm(i) {
    if(i==0) return 30;
    else return i
}
function fpp(i) {
    if(i==29) return -1;
    else return i
}

//Button start

document.getElementById('start').onclick = StartLife;