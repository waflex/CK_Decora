$(document).ready(function() {
    Cocina();
});

function Cocina() {
    var folder = "https://github.com/waflex/CK_Decora/tree/gh-pages/assets/img/Cocina/?files=1";
    limpiar();

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {

                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Cocina'>" + "<div class='card h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");
                }
            });
        }
    });
}

function Baño() {
    var folder = "https://github.com/waflex/CK_Decora/tree/gh-pages/assets/img/Baño/?files=1";
    limpiar();

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Baño'>" + "<div class='card h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");
                }
            });
        }
    });
}

function Exterior() {
    var folder = "https://github.com/waflex/CK_Decora/tree/gh-pages/assets/img/Exterior/?files=1";
    limpiar();

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Exterior'>" + "<div class='card h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");

                }
            });
        }
    });
}

function Interior() {
    var folder = "https://github.com/waflex/CK_Decora/tree/gh-pages/assets/img/Interior/?files=1";
    limpiar();

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Interior'>" + "<div class='card h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");

                }
            });
        }
    });
}

function limpiar() {
    while (document.getElementById("Cocina")) {
        document.getElementById("Cocina").remove();
    }
    while (document.getElementById("Baño")) {
        document.getElementById("Baño").remove();
    }
    while (document.getElementById("Exterior")) {
        document.getElementById("Exterior").remove();
    }
    while (document.getElementById("Interior")) {
        document.getElementById("Interior").remove();
    }
}