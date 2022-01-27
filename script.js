
//Definindo as variaveis
let prato;
let bebida;
let sobremesa;

//Função da borda verde dos pratos

function escolherFrango(){
    document.getElementById("frango").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("frango4").style.borderColor = "white";
    prato="Frango Yin Yang"
}
function escolherFrango2(){
    document.getElementById("frango2").style.borderColor = "#32B72F";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("frango4").style.borderColor = "white";
    prato="Frango Yang Yin"
}
function escolherFrango3(){
    document.getElementById("frango3").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("frango4").style.borderColor = "white";
    prato="Frango Ying Yan"
}
function escolherFrango4(){
    document.getElementById("frango4").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    prato="Frango BodyBuilder"
}



//Função da borda verde das bebidas

function escolherBebida(){
    document.getElementById("coca").style.borderColor = "#32B72F";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("coca4").style.borderColor = "white";
    bebida="Coca gelada"
}
function escolherBebida2(){
    document.getElementById("coca2").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("coca4").style.borderColor = "white";
    bebida="Coca zero"
}
function escolherBebida3(){
    document.getElementById("coca3").style.borderColor = "#32B72F";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("coca4").style.borderColor = "white";
    bebida="Coca menos açúcar"
}
function escolherBebida4(){
    document.getElementById("coca4").style.borderColor = "#32B72F";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    bebida="Coca pequena gelada"
}



//Função da borda verde nas sobremesas

function escolherSobremesa(){
    document.getElementById("pudim").style.borderColor = "#32B72F";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("pudim4").style.borderColor = "white";
    sobremesa="Pudim padrão"
}
function escolherSobremesa2(){
    document.getElementById("pudim2").style.borderColor = "#32B72F";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("pudim4").style.borderColor = "white";
    sobremesa="Pudim light"
}
function escolherSobremesa3(){
    document.getElementById("pudim3").style.borderColor = "#32B72F";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pudim4").style.borderColor = "white";
    sobremesa="Pudim de chocolate"
}
function escolherSobremesa4(){
    document.getElementById("pudim4").style.borderColor = "#32B72F";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("pudim").style.borderColor = "white";
    sobremesa="Pudim de doce de leite"
}