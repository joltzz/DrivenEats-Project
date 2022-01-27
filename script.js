
//Definindo as variaveis
let prato;
let bebida;
let sobremesa;
let valor_prato;
let valor_bebida;
let valor_sobremesa;
let valorTotal=valor_prato+valor_bebida+valor_sobremesa;
let verifVerde=document.querySelector(".botao-cinza") 
let container=document.querySelector(".botao-verde");

//Função da borda verde dos pratos

function escolherFrango(){
    document.getElementById("frango").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("frango4").style.borderColor = "white";
    prato="Frango Yin Yang"
    verificaCor();
    valor_prato=14.90;
}
function escolherFrango2(){
    document.getElementById("frango2").style.borderColor = "#32B72F";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("frango4").style.borderColor = "white";
    prato="Frango Yang Yin"
    verificaCor();
    valor_prato=15,90;
}
function escolherFrango3(){
    document.getElementById("frango3").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("frango4").style.borderColor = "white";
    prato="Frango Ying Yan"
    verificaCor();
    valor_prato=16,90;
}
function escolherFrango4(){
    document.getElementById("frango4").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    prato="Frango BodyBuilder"
    verificaCor();
    valor_prato=17.90;
}



//Função da borda verde das bebidas

function escolherBebida(){
    document.getElementById("coca").style.borderColor = "#32B72F";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("coca4").style.borderColor = "white";
    bebida="Coca gelada"
    verificaCor();
    valor_bebida=3.90;
}
function escolherBebida2(){
    document.getElementById("coca2").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("coca4").style.borderColor = "white";
    bebida="Coca zero"
    verificaCor();
    valor_bebida=4.25;
}
function escolherBebida3(){
    document.getElementById("coca3").style.borderColor = "#32B72F";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("coca4").style.borderColor = "white";
    bebida="Coca menos açúcar"
    verificaCor();
    valor_bebida=4.50;
}
function escolherBebida4(){
    document.getElementById("coca4").style.borderColor = "#32B72F";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    bebida="Coca pequena gelada"
    verificaCor();
    valor_bebida=2.90;
}



//Função da borda verde nas sobremesas

function escolherSobremesa(){
    document.getElementById("pudim").style.borderColor = "#32B72F";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("pudim4").style.borderColor = "white";
    sobremesa="Pudim padrão"
    verificaCor();
    valor_sobremesa=6.49;
}
function escolherSobremesa2(){
    document.getElementById("pudim2").style.borderColor = "#32B72F";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("pudim4").style.borderColor = "white";
    sobremesa="Pudim light"
    verificaCor();
    valor_sobremesa=6.75;
}
function escolherSobremesa3(){
    document.getElementById("pudim3").style.borderColor = "#32B72F";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pudim4").style.borderColor = "white";
    sobremesa="Pudim de chocolate"
    verificaCor();
    valor_sobremesa=6.90;
}
function escolherSobremesa4(){
    document.getElementById("pudim4").style.borderColor = "#32B72F";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("pudim").style.borderColor = "white";
    sobremesa="Pudim de doce de leite"
    verificaCor();
    valor_sobremesa=7.29;
}

function verificaCor(){
    if((prato!=null) && (bebida!=null) && (sobremesa!=null)){
        verifVerde.style.display="none";
        container.style.display = "block";
}
}
function finalizarPedido(){
    let mensagem;
    
    mensagem=
    "Olá, gostaria de fazer o pedido: \n- Prato: "
    +prato+
    "\n- Bebida: "
    +bebida+
    "\n- Sobremesa: "
    +sobremesa+
    "\nTotal: R$ "
    +valorTotal+
    ".";
    window.open("https://wa.me/+5551982012955?text="+ mensagem)
}