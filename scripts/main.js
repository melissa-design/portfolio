$(document).ready(function() {

    $(".burger").click(function() {
        $("header").toggleClass("mobileNav");
        $(".burger").hide();
        $(".cross").show();
    });

    $(".cross").click(function() {
        $("header").toggleClass("mobileNav");
        $(".cross").hide();
        $(".burger").show();
    });

    $("body").on("click", "header.mobileNav .menuitem", function() {
        $("header").toggleClass("mobileNav");
        $(".cross").hide();
        $(".burger").show();
    });
});