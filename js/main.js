$(document).ready(() => {
    //view work button
    $("#view-work-button").hover( () => {
        $("#arrow").fadeOut(150, () => {
            $("#arrow").removeClass('fa-arrow-right').addClass('fa-arrow-down').fadeIn(150);
        })
    }, () => {
        $("#arrow").fadeOut(150, () => {
            $("#arrow").removeClass('fa-arrow-down').addClass('fa-arrow-right').fadeIn(150);
        });
    });

    //responsive web design skill card
    $("#responsive-web-design-card").hover(() => { //on enter
        $("#responsive-web-design-card").addClass("bg-dark text-white");
        $("#responsive-web-design-card").children().children().children().addClass("text-dark"); 
    }, () => { //on exit
        $("#responsive-web-design-card").removeClass("bg-dark text-white");
        $("#responsive-web-design-card").children().children().children().removeClass("text-dark"); 
    });

    //front end frameworks card
    $("#front-end-frameworks-card").hover(() => { //on enter
        $("#front-end-frameworks-card").addClass("bg-dark text-white"); 
        $("#front-end-frameworks-card").children().children().children().addClass("text-dark");
    }, () => { //on exit
        $("#front-end-frameworks-card").removeClass("bg-dark text-white");
        $("#front-end-frameworks-card").children().children().children().removeClass("text-dark");
    });

    //technologies card
    $("#technologies-card").hover(() => { //on enter
        $("#technologies-card").addClass("bg-dark text-white"); 
        $("#technologies-card").children().children().children().addClass("text-dark");
    }, () => { //on exit
        $("#technologies-card").removeClass("bg-dark text-white");
        $("#technologies-card").children().children().children().removeClass("text-dark");
    });

    //other languages card
    //technologies card
    $("#other-languages-card").hover(() => { //on enter
        $("#other-languages-card").addClass("bg-dark text-white"); 
        $("#other-languages-card").children().children().children().addClass("text-dark");
    }, () => { //on exit
        $("#other-languages-card").removeClass("bg-dark text-white");
        $("#other-languages-card").children().children().children().removeClass("text-dark");
    });
});
