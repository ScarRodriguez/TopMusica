function display(Resultado){
    document.getElementById('resultado').value += Resultado;
}

function clearScreen(){
document.getElementById('resultado').value="";
}

function solve(){
let x = document.getElementById('resultado').value;
let y = eval(x);
document.getElementById('resultado').value = y;

return y;

}
