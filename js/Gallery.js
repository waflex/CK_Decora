$(document).ready(function() {
    Cocina();
});

function Cocina() {
    var folder = "assets/img/Cocina";
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
    var folder = "assets/img/Baño";
    while (document.getElementById("Exterior")) {
        document.getElementById("Exterior").remove();
    }
    while (document.getElementById("Interior")) {
        document.getElementById("Interior").remove();
    }
    while (document.getElementById("Cocina")) {
        document.getElementById("Cocina").remove();
    }
    while (document.getElementById("Baño")) {
        document.getElementById("Baño").remove();
    }

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
    var folder = "assets/img/Exterior";
    while (document.getElementById("Interior")) {
        document.getElementById("Interior").remove();
    }
    while (document.getElementById("Cocina")) {
        document.getElementById("Cocina").remove();
    }
    while (document.getElementById("Baño")) {
        document.getElementById("Baño").remove();
    }
    while (document.getElementById("Exterior")) {
        document.getElementById("Exterior").remove();
    }


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
    var folder = "assets/img/Interior";
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