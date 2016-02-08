var raha = 30;
var panos = 0;

var apple = "content/apple.jpg";
var banana = "content/banana.jpg";
var watermelon = "content/watermelon.jpg";

var fruits1 = [apple, banana, watermelon];
var fruits2 = [apple, banana, watermelon];
var fruits3 = [apple, banana, watermelon];

function pelaa() {
  if (raha >= 10) {
    if (panos >= 10) {
      if (raha >= panos) {
        peli();
      }
      else {
        alert("You dont have enough money.");
        update();
      }
    }
    else {
      alert("Choose stake first 10, 50 or 100.");
      update();
    }
  }
  else {
    alert("Game Over");
    update();
  }

}

function update(){
  document.getElementById('raha').innerHTML = raha;
  document.getElementById('info').innerHTML = "";
}

function vaihdaPanos(uusiPanos){
  update();
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
  var rand1 = fruits1[Math.floor(Math.random() * fruits1.length)];
  var rand2 = fruits2[Math.floor(Math.random() * fruits2.length)];
  var rand3 = fruits3[Math.floor(Math.random() * fruits3.length)];

  document.getElementById("fruit1").src = rand1;
  document.getElementById("fruit2").src = rand2;
  document.getElementById("fruit3").src = rand3;
  update();

  if(rand1 == rand2 && rand2 == rand3) {
    raha = (raha - panos);
    raha += (panos * 5);
    update();
    document.getElementById('info').innerHTML = "OMG JACKPOT!!!";
  }
  else if (rand1 == rand2 || rand2 == rand3 || rand3 == rand1) {
    raha = (raha - panos);
    raha += (panos * 2.5);
    update();
    document.getElementById('info').innerHTML = "You got two same!";
  }
  else {
    raha = (raha - panos);
    update();
    document.getElementById('info').innerHTML = "No win sry...";
    if (raha < 10) {
      alert("Game Over");
      if (confirm("Do you want to play again?") == true) {
        location.reload();
      }
      else {
        document.body.style.backgroundImage = "url('content/gameover.jpg')";
      }
    }
  }
}
