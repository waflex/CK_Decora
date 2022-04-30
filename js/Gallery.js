$(document).ready(function() {
    Cocina();
});

function Cocina() {
    var folder = "../assets/img/Cocina";
    limpiar();
    // $(".Cocina").each(function() {
    //     $(".Cocina").attr("hidden", false);
    // });

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    val = "assets/img/Cocina/" + val;
                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Cocina'>" + "<div class='card mx-auto mx-md-0 h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");
                }
            });
        }
    });
}

function Baño() {
    var folder = "../assets/img/Bano";
    limpiar();
    // $(".Baño").each(function() {
    //     $(".Baño").attr("hidden", false);
    // });

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    val = "assets/img/Bano/" + val;
                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Baño'>" + "<div class='card mx-auto mx-md-0 h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");
                }
            });
        }
    });
}

function Exterior() {
    var folder = "../assets/img/Exterior";
    limpiar();
    // $(".Exterior").each(function() {
    //     $(".Exterior").attr("hidden", false);
    // });

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    val = "assets/img/Exterior/" + val;
                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Exterior'>" + "<div class='card mx-auto mx-md-0 h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");
                }
            });
        }
    });
}

function Interior() {
    var folder = "../assets/img/Interior";
    limpiar();
    // $(".Interior").each(function() {
    //     $(".Interior").attr("hidden", false);
    // });

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    val = "assets/img/Interior/" + val;
                    $(".fill").append("<div class='col my-2 justify-content-center' ID='Interior'>" + "<div class='card mx-auto mx-md-0 h-50' style='width:18rem;'>" + "<img src='" + val + "' class='card-img-top shadow'>");
                }
            });
        }
    });
}

function Ocultar() {

    $(".Cocina").each(function() {
        $(".Cocina").attr("hidden", true);
    });
    $(".Baño").each(function() {
        $(".Baño").attr("hidden", true);
    });
    $(".Interior").each(function() {
        $(".Interior").attr("hidden", true);
    });
    $(".Exterior").each(function() {
        $(".Exterior").attr("hidden", true);
    });
}

function limpiar() {
    while (document.getElementById("Cocina")) {
        document.getElementById("Cocina").remove();
    }
    while (document.getElementById("Baño")) {
        document.getElementById("Baño").remove();
    }
    while (document.getElementById("Interior")) {
        document.getElementById("Interior").remove();
    }
    while (document.getElementById("Exterior")) {
        document.getElementById("Exterior").remove();
    }
}

function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
    return decodeURIComponent(escape(s));
}