let btn = document.getElementById("btn");
let carre = document.getElementById("carre");
let animate = document.getElementsByClassName("animate");
let test = 0 
btn.addEventListener('click',() => {
    console.log("j'ai cliquer")
    test += 10;
        carre.style.color = "yellow"
        carre.style.left = test + 'px';
        carre.style.transition = "left 1s";    
        if(test >= 200){     //si test est superieur ou egale a 200px  !!!
             test -= 50;    // rentre de 50px     !!!
            carre.style.color = "green"     // le texte dans le carre prend la couleur green  !!!
            carre.style.left = test + 'px';   // le carre avance a partir du niveau ou il est !!!

            carre.style.transition = "right 1s";   // transition pour le deplacement du carre et c est grace a cette transition que le carre se deplace  !!!
            
            carre.style.borderRadius = "100px"    //   aprés avoir atteint les 200px le carre prend des bordure ronde !!!
        }

})