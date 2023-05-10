function show_card(value){
    //flask

    if (value == 0){

        let cards = document.getElementById("flask");
        cards.style.display = "block";
    } 
    else if (value == 1){

        let cards = document.getElementById("painel");
        cards.style.display = "block";
    }
    else if (value == 2){

        let cards = document.getElementById("fast");
        cards.style.display = "block";
    }
    else if (value == 3){

        let cards = document.getElementById("portifolio");
        cards.style.display = "block";
    }
    else {
        console.log("Erro");
    }
}