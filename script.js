// /!!!!!!!!!!!!!   NOTE :- BOX FILLER FUNCTIONING SHOULD BE AT THE BOTTOM OF THE CODE AS IT REQUIRES THE GRID TO BE ALREADY FORMED !!!!!!!!!!!!///////



let range = document.getElementById("sizeRange");
let lastVal=range.value; 
let color ="black";
const all = document;
// const box = document;
const btn1=document.getElementById("rainbow");
const btn2=document.getElementById("input-color");
const btn3=document.getElementById("black");
const reset= document.getElementById("reset");
const erase=document.getElementById("erase");
const container= document.querySelector(".display");
const toggle=document.getElementById("toggle");


let grid_check= true;
// testing 

btn1.addEventListener('click', (e)=>{
  color=btn1.innerText;
  
  // btn2.value=color;

});

btn2.addEventListener('change', (e)=>{
  color=btn2.value;
});

btn3.addEventListener('click',(e)=>{
  color=btn3.innerText;
  btn2.value=color;
});
reset.addEventListener('click',()=>
{
container.innerHTML="";
create_grid(range.value);
boxes = document.querySelectorAll('.boxes');
    addTouch();
    toggle.innerHTML="Remove grid";
    grid_check=true;
});

let erase_toggle=false;
erase.addEventListener("click",()=>{
  if(erase_toggle==false){
  color="white";
  erase.innerHTML="Draw";
  erase_toggle=true;
  }
  else{
    color=btn2.value;
    erase.innerHTML="Erase";
    erase_toggle=false;
  }

});

toggle.addEventListener('click',(e)=>{
  if(grid_check==true){
    toggle.innerHTML="Add grid";
  grid_check=false;
  hideGrid();
  }
  else{
    toggle.innerHTML="Remove grid";

    grid_check =true;
    showGrid();
}

});
//testing


// const head =document.querySelector("h1");
// const head2 =document.querySelector("h2");


// now we want to work on creating a dynamic grid 

let total =range.value;



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
  local.style.height=`${x.toFixed(4)}px`;
  local.style.width=`${x.toFixed(4)}px`;

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
if(color=="rainbow"){
  let col=`hsl(${Math.random() * 360}, 100%, 50%)`;
  box.style.backgroundColor =col;

}
    // box.classList.add(`${color}`);
    box.style.backgroundColor =`${color}`;
  
    }

  });

box.addEventListener('mousedown', function handle(event) {
  
  if(color=="rainbow"){
    let col=`hsl(${Math.random() * 360}, 100%, 50%)`;
    box.style.backgroundColor =col;
  
  }
  // box.classList.add(`${color}`); } );
  box.style.backgroundColor =`${color}`; })

   
} );

}
addTouch();
/// here ends the functionality for coloring a pixel


//functions
function hideGrid(){
boxes.forEach(box=>{
  box.style.border="hidden black 1px";
});
};

function showGrid(){
  boxes.forEach(box=>{
    box.style.border="solid grey 1px";
  });
  };
  

