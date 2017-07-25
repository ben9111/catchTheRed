/**
 * Created by ben on 7/18/17.
 */

var w = document.querySelector("#boxContainerContainer");



w.addEventListener("click",buttonChoose)
console.log(w);



function buttonChoose (event) {



    if ((event.target.textContent) == 1) {
        document.getElementById('score').textContent++;
        event.target.classList.remove("max");
        event.target.textContent = 0;

    } else {


        document.getElementById('score').textContent =  document.getElementById('score').textContent -5;
        return true;
    }

    var randombox = Math.floor( ((Math.random() * 4 )+1 ))  ;

    console.log(randombox);
    var ra = document.querySelector("#" + "box" + randombox );

    ra.classList.add("max");

    ra.textContent = 1;

    //event.target.classList.add("max");
}
