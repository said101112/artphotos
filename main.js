import date from './data.js'
let contenaire= document.querySelector('.contenaire');
console.log(date);
const renderpage=()=>{
      let html;
      
      html=date.map(element => {
         console.log(element)
        return  `
      <section class="grille">
       <img src=${element.image} alt="${element.id} >
      </section>
      `
      }).join(" ");
console.log(html)
    contenaire.innerHTML= html;
}
renderpage();