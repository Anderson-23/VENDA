const divbtn = document.querySelector(".btn")
const divteste = document.querySelector(".teste")
const foramenu = document.querySelector("#bodymenu")

  function menushow(){
    if(divteste.classList.contains('divmudar')){
        divteste.classList.remove('divmudar')
    }  
    else{

        divteste.classList.add('divmudar')
    }  
}  
