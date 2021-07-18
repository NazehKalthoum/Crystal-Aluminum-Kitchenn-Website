var imgs = 2;

var images = ['top img/crystal aluminum (1).jpg', 'topimg/crystal aluminum (2).jpg', 'top img/crystal aluminum (3).jpg', 'top img/crystal aluminum (4).jpg', 'top img/crystal aluminum (5).jpg'];

var x = 1;

var imgs = document.getElementById('topimg');

setInterval(slider, 5000);

function slider() {


if (x < 11) {
x = x + 1;
} else {
x = 0;
}

switch (x){
  case 1:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (1).jpg" id="img1">';
      break;
   case 2:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (2).jpg" id="img1">';
      break;
   case 3:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (3).png" id="img1">';
      break;
   case 4:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (4).jpg" id="img1">';
      break;
   case 5:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (5).jpg" id="img1">';
      break;
    case 6:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (6).jpg" id="img1">';
      break;
    case 7:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (7).jpg" id="img1">';
      break;
    case 8:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (8).jpg" id="img1">';
      break;
   case 9:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (9).jpg" id="img1">';
      break;
    case 10:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (10).jpg" id="img1">';
      break;
    case 11:
      imgs.innerHTML = '<img src="topimg/crystal aluminum (11).jpg" id="img1">';
      break;

}
}