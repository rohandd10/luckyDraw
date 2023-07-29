let pic = ["car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg", "car5.jpg"];
let a = [];
function getRandomImage1() {
  let pos=-1;
  while (true) {
    pos = Math.floor(Math.random() * pic.length);
    if (a.indexOf(pos)==-1)
    {
      a.push(pos);
      break;
    }
  }
  document.getElementById("p1").src=pic[pos];
}
function getRandomImage2() {
  let pos=-1;
  while (true) {
    pos = Math.floor(Math.random() * pic.length);
    if (a.indexOf(pos)==-1)
    {
      a.push(pos);
      break;
    }
  }
  document.getElementById("p2").src=pic[pos];
}
function getRandomImage3() {
  let pos=-1;
  while (true) {
    pos = Math.floor(Math.random() * pic.length);
    if (a.indexOf(pos)==-1)
    {
      a.push(pos);
      break;
    }
  }
  document.getElementById("p3").src=pic[pos];
}