/**
 * Created by ben on 7/25/17.
 */
function Game(gametextId) {

    this.gameTextid = gametextId;

}

function CatchTheRedGame() {

    Game.call(this, 't-box');

}

CatchTheRedGame.prototype = Object.create(Game.prototype);


CatchTheRedGame.prototype.enter = function (el) {

    this.el = {
        root: el,
        score: el.querySelector('#score')

    };

    var w = document.querySelector("#boxContainerContainer");

    w.addEventListener("click", buttonChoose);

    function buttonChoose(event) {

        if ((event.target.textContent) == 1) {
            document.getElementById('score').textContent++;
            event.target.classList.remove("max");
            event.target.textContent = 0;

        } else {

            document.getElementById('score').textContent = document.getElementById('score').textContent - 5;
            return true;
        }

        var randombox = Math.floor(((Math.random() * 4 ) + 1 ));

        console.log(randombox);
        var ra = document.querySelector("#" + "box" + randombox);

        ra.classList.add("max");
        ra.textContent = 1;
    }


    console.log("test 1..");

};


function HelpPage() {

    Game.call(this,'t-help');

}


HelpPage.prototype = Object.create(Game.prototype);



HelpPage.prototype.enter = function () {
    console.log('HelpPage enter func');

};