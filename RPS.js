
let pic = ['fist.png','hello.png','peace.png'];
let computer = "";
let ps = document.getElementById('ps');
let cs = document.getElementById('cs');
var count = 0;
var countc = 0;


function paper(){
 var img = document.getElementById('player-result');
 img.src='hello.png';
 img.style.height="50px";
 var img2 = document.getElementById('computer');
 let random = Math.floor(Math.random()*pic.length);
 let x = pic[random];
 computer = x;
 img2.src = x;
 if(computer === pic[0]){
    count++;
    ps.innerHTML = count;
 }
 else if(computer === pic[2]){
    countc++;
    cs.innerHTML = countc;
 }
}


function rock(){
    var img = document.getElementById('player-result');
    img.src='fist.png';
    var img2 = document.getElementById('computer');
    let random = Math.floor(Math.random()*pic.length);
    let x = pic[random];
    computer = x;
    img2.src = x;
    if(computer === pic[2]){
       count++;
       ps.innerHTML = count;
    }
    else if(computer === pic[1]){
       countc++;
       cs.innerHTML = countc;
    }
}
function scissor(){
    var img = document.getElementById('player-result');
    img.src='peace.png';
    var img2 = document.getElementById('computer');
    let random = Math.floor(Math.random()*pic.length);
    let x = pic[random];
    computer = x;
    img2.src = x;
    if(computer === pic[1]){
       count++;
       ps.innerHTML = count;
    }
    else if(computer === pic[0]){
       countc++;
       cs.innerHTML = countc;
    }
}   
function stop(){
   if(count === countc){
      var tie = document.getElementById('tie');
      tie.innerHTML = "TIE";
   }
   else if(count>countc){
      var img = document.getElementById('imgwinner');
      img.src='man.png';
   }
   else{
      var img = document.getElementById('imgwinner');
      img.src='assistant.png';
   }
   count = 0;
   countc = 0;
   cs.innerHTML = count;
   ps.innerHTML = countc; 
}














