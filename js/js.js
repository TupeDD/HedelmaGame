var raha = 50;
var panos = 0;

var apple = "content/apple.jpg";
var banana = "content/banana.jpg";
var watermelon = "content/watermelon.jpg";

var fruits1 = [apple, banana, watermelon];
var fruits2 = [watermelon, banana, apple];
var fruits3 = [banana, apple, watermelon];

var rand1 = fruits1[Math.floor(Math.random() * fruits1.length)];
var rand2 = fruits2[Math.floor(Math.random() * fruits2.length)];
var rand3 = fruits3[Math.floor(Math.random() * fruits3.length)];



function pelaa() {
  document.getElementById("fruit1").src = rand1;
  document.getElementById("fruit2").src = rand2;
  document.getElementById("fruit3").src = rand3;
  peli();
  update();
}

function update(){
  document.getElementById('raha').innerHTML = raha;
}

function vaihdaPanos(uusiPanos){
  panos = uusiPanos;
  if (panos == 10) {
  document.getElementById('button1').style.backgroundColor='#333333';
  document.getElementById('button2').style.backgroundColor='#808080';
  document.getElementById('button3').style.backgroundColor='#808080';
  }
  else if (panos == 50) {
  document.getElementById('button2').style.backgroundColor='#333333';
  document.getElementById('button3').style.backgroundColor='#808080';
  document.getElementById('button1').style.backgroundColor='#808080';
  }
  else if (panos == 100) {
  document.getElementById('button3').style.backgroundColor='#333333';
  document.getElementById('button1').style.backgroundColor='#808080';
  document.getElementById('button2').style.backgroundColor='#808080';
  }
}

function peli() {
  if(rand1 == rand2 && rand2 == rand3) {
    raha += (panos * 10);
    alert("You won the jack!!!!OMGOMGOMGTROLOLOOO");
  }
  else if (rand1 == rand2 || rand2 == rand3 || rand3 == rand1) {
    raha += (panos * 5);
    alert("You won semi jackpot, niche!");
  }
  else {
    raha - panos;
    alert("You didn't win, sry...");
  }
}
update();
