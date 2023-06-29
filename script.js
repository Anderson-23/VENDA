const esconderlink = document.querySelector(".botao")
const mudar = document.querySelector(".link1")
const caixatexto = document.querySelector(".cx-pesquisar")

   
    esconderlink.addEventListener('mouseover',()=>{
    mudar.classList.add('mudarcor')
    }
)

esconderlink.addEventListener('mouseleave',()=>{
    mudar.classList.remove('mudarcor')
    }
)

caixatexto.addEventListener("focus",()=>{
    mudar.classList.add('mudarcor2')
    }
)
caixatexto.addEventListener("blur",()=>{
    mudar.classList.remove('mudarcor2')
    }
)






