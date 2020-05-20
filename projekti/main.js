const slider= document.querySelector('.slider1');
const sliderimg= document.querySelectorAll('.slider1 img');

const prevbtn=document.querySelector('#prevb');
const nextbtn=document.querySelector('#nextb');

let counter = 1;

const size=sliderimg[0].clientWidth;

slider.style.transform='translateX('+(-size * counter) +'px)';

nextbtn.addEventListener('click', ()=>{
    if(counter>=sliderimg.length-1) return;
slider.style.transition = "transform 0.5s ease-in-out";
counter++;
slider.style.transform= 'translateX('+(-size * counter) +'px)';
});

prevbtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    slider.style.transition = "transform 0.5s ease-in-out";
    counter--;
    slider.style.transform= 'translateX('+(-size * counter) +'px)';
    });

   slider.addEventListener('transitionend', ()=>{
 if (sliderimg[counter].id==='lastP'){
            slider.style.transition ="none";
            counter=sliderimg.length-2;
            slider.style.transform='translateX('+(-size * counter) +'px)';
        }
        if (sliderimg[counter].id==='firstP'){
            slider.style.transition="none";
            counter=sliderimg.length-counter;
            slider.style.transform='translateX('+(-size * counter) +'px)';
        }

    });

  var x= document.getElementById("login");
  var y= document.getElementById("register");
  var z= document.getElementById("btn");

  function register(){
	  x.style.left = "-400px";
	  y.style.left = "50px";
	  z.style.left = "110px";
  }

  function login(){
	x.style.left = "50px";
	y.style.left = "450px";
	z.style.left = "0";
}