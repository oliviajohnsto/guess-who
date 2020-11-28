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
        console.log(cheetos[key]["path"]);
        imgpath = 'url("cheeto/'+cheetos[key]["path"]+'")';
        var $newCheeto = "<div class='col-2 profile'><div class='picture' style='background-image: "
            +imgpath
            +"'></div>"
            +cheetos[key]["name"]
            +"</div>";

        console.log($newCheeto);
        // $newCheeto.css('background-image': "'url("+cheetos[key]["path"]+")'");
        $(".row").append($newCheeto);
    };


    $(".profile").click(function() {
        $(this).css('background-color','#e37bb9');
    });

});
