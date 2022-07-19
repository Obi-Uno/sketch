// /!!!!!!!!!!!!!   NOTE :- BOX FILLER FUNCTIONING SHOULD BE AT THE BOTTOM OF THE CODE AS IT REQUIRES THE GRID TO BE ALREADY FORMED !!!!!!!!!!!!///////





const all = document;
let box = document;
const head =document.querySelector("h1");
const head2 =document.querySelector("h2");




let total =5500;
const container= document.querySelector(".display");
let local ;
for( let i=0;i<total;i++){
  local =document.createElement('div');
  local.className = "boxes";
  container.appendChild(local);
}
const  boxes = document.querySelectorAll('.boxes');









//make bool ,if mouse is down then true
//if mouse up aka false then do nothing
let bool_check =false;

function down (){
  bool_check=true;
console.log(bool_check);


}

function up(){
  bool_check=false;
console.log(bool_check);
}


all.addEventListener('mouseup',function fake () {up();});// had to put another function around up and down as they were being executed without any event listners


all.addEventListener('mousedown',function faker() {down(); });


boxes.forEach(box => {
 
  box.addEventListener('mouseleave', function handle(event) {
    if(bool_check==true){

    box.classList.add("select");
  
    }

  });

box.addEventListener('mousedown', function handle(event) {
  

  box.classList.add("select"); } );

   
} );

/// here ends the functionality for coloring a pixel




// now we want to work on creating a dynamic grid 


