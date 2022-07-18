const boxes = document.querySelectorAll('.boxes');
const all = document;
let box = document;
const head =document.querySelector("h1");
const head2 =document.querySelector("h2");
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
  
box.addEventListener('click', function handle(event) {
  

  box.classList.add("select"); } );

   
} );

/// here ends the functionality for coloring a pixel











// function above(){
//   boxes.forEach(box => {
//     box.addEventListener('mouseleave', function handle(event) {
  
//       box.classList.add("select");
//     } 
//   );

// } );


// }





// all.addEventListener('mousedown',above (event));
// all.removeEventListener('mouseup',above());


// all.addEventListener('mouseup',function all(event){
//   boxes.forEach(box => {
//     box.addEventListener('mouseleave', function handle(event) {
      
      
//       // console.log( event);
  
//       box.setAttribute('style', 'background-color: red;');
//     });

//   });

// } );

