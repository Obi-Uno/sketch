// /!!!!!!!!!!!!!   NOTE :- BOX FILLER FUNCTIONING SHOULD BE AT THE BOTTOM OF THE CODE AS IT REQUIRES THE GRID TO BE ALREADY FORMED !!!!!!!!!!!!///////



let range = document.getElementById("sizeRange");
let lastVal=range.value; 
let color ="black";
const all = document;
let box = document;
let btn1=document.getElementById("white");
// testing 

btn1.addEventListener('click', (e)=>{
  color=btn1.innerText;
})



//testing


// const head =document.querySelector("h1");
// const head2 =document.querySelector("h2");


// now we want to work on creating a dynamic grid 

let total =range.value;

const container= document.querySelector(".display");


function create_grid( total){

  container.innerHTML="";
  let width1=container.clientWidth ;
let height1=container.clientHeight ;
let sq= ((height1+2)*(width1+2))/total;
let x= Math.sqrt(sq)+0.3 ;

let local ;
for( let i=0;i<total;i++){
  local =document.createElement('div');
  local.className = "boxes";
  local.style.height=`${x.toFixed(2)}px`;
  local.style.width=`${x.toFixed(2)}px`;

  container.appendChild(local);
}

}

create_grid(total);
let  boxes = document.querySelectorAll('.boxes');


//we can make a grid now preferably from total-> 500-5000


// to make a new grid everytime the slider moves
range.addEventListener('mousemove',(e)=>{
  if(range.value!=lastVal){
    lastVal=range.value;
    create_grid(lastVal);
 boxes = document.querySelectorAll('.boxes');
    addTouch();
  }
});

























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

function addTouch(){


boxes.forEach(box => {
 
  box.addEventListener('mouseleave', function handle(event) {
    if(bool_check==true){

    // box.classList.add(`${color}`);
    box.style.backgroundColor =`${color}`;
  
    }

  });

box.addEventListener('mousedown', function handle(event) {
  

  // box.classList.add(`${color}`); } );
  box.style.backgroundColor =`${color}`; })

   
} );

}
addTouch();
/// here ends the functionality for coloring a pixel






