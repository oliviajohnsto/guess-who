var cheetos = {
    "cheeto": {
        "name": "flaming hot",
        "path": "1.jpeg"
    },
    "ian": {
        "name": "ian",
        "path": "ian.png"
    },
};

$(document).ready(function() {
    for (var key in cheetos) {
        imgpath = 'url("cheeto/'+cheetos[key]["path"]+'")';
        var $newCheeto = "<div class='col-2 profile'><div class='picture' style='background-image: "
            +imgpath
            +"'></div>"
            +cheetos[key]["name"]
            +"</div>";

        $(".row").append($newCheeto);
    };


    $(".profile").click(function() {
        color = $(this).css('background-color');
        if (color == "rgb(232, 202, 220)") {
            $(this).css('background-color','#e37bb9');
        }
        else {
            $(this).css('background-color','#e8cadc');
        }
    });

});
