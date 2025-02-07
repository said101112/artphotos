import date from './data.js'
let contenaire= document.querySelector('.contenaire');


const contenairezomed=document.querySelector('.zomed');


// image zomed
let currentIndex=-1;
const x=document.querySelector('.x');



const renderpage=()=>{
      let html=date.map(element => {
         console.log(element)
         let imgs=`
      <section class="grille">
       <img src=${element.imag} data-img=${element.imag} data-id="${element.id}" >
      </section>`
        return imgs;
      }).join("");

    contenaire.innerHTML= html;
};
renderpage();



// selectioner grille apres que la page est render et les images  sont ajouter 
let grille=document.querySelectorAll('.grille');
grille.forEach((element)=>{
  element.addEventListener('click',(event)=>{
    let button=event.target;
    currentIndex=parseInt(event.target.dataset.id);
    let dataImg=button.dataset.img;
    document.getElementById('zo').src=dataImg;
    contenairezomed.style.display="flex";
    contenaire.style.display='none';
  })
})


document.body.addEventListener('keydown', (event) => {
  console.log(event.key); // Vérification de la touche appuyée
  switch (event.key) {
      case'ArrowRight':  nextImge();// Flèche droite
          break;
      case'ArrowLeft': // Flèche gauche
          backImage();
          break;
          default: break;
  }
});


x.addEventListener('click',()=>{
    contenairezomed.style.display='none';
    contenaire.style.display='grid';
})



// ++ 
const imgeSuivant=document.querySelector('.s');
imgeSuivant.addEventListener('click',nextImge);
function nextImge(){
   if(currentIndex!==-1){
    currentIndex=(currentIndex+1) % date.length;
    document.getElementById('zo').src=date[currentIndex].imag;
   }
}

nextImge();
// -- 
// ajouter evenemt click sur imageprecident span icon

imageprecedent.addEventListener('click',backImage);


const imageprecedent=document.querySelector('.p');
function backImage(){
     currentIndex=(currentIndex-1+date.length) % date.length;
     document.getElementById('zo').src=date[currentIndex].imag;  
}
backImage();


