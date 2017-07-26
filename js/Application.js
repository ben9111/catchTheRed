/**
 * Created by ben on 7/25/17.
 */




function Application(el) {


    console.log(el);
    this.el = el;

    window.addEventListener("hashchange", this.setPageFromHash.bind(this));


    this.setPageFromHash();
}


Application.prototype.showPage = function (Page) {

    if (Page != null) {

        var p = new Page();
        console.log(p);
        this.el.innerHTML = document.getElementById(p.gameTextid).innerHTML;

        p.enter(this.el);

    } else {

        this.el.innerHTML = document.getElementById('t-welcome').innerHTML;

    }


};

Application.prototype.setPageFromHash = function () {

    var hash = window.location.hash.substr(1);

    console.log(hash);

    if (hash === 'help') {

        this.showPage(HelpPage);
    }

    else if (hash === 'game') {

        this.showPage(CatchTheRedGame);
    }
    else {

        this.showPage(null);

    }
};
