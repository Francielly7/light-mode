function selectMode(mode){


var color ='ghostWhite';
var image ='/img/light-icon.png';
var label ='Light Mode';

if (mode ==='dark'){
    color ='darkSlateBlue';
    image ='dark.png';
    label ='Dark Mode';
} else if (mode ==='light'){
    color ='#c7af42';
    image ='light.jpg';
    label ='Light Mode';

}else {
    color ='dimGray';
    image ='ninja.png';
    label ='Ninja Mode';
}
console.log(label);



document.getElementById('icon').src = image;

document.getElementById('theme').style.backgroundColor= color;
document.getElementById('label').innerHTML= label;
}