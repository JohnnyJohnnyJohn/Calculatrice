const boutons = document.getElementsByTagName("button");
const text = document.getElementById("field");
var resultat = false;
var onCalcul = false;
var virgule = false;
var isTyping = true;
var operateur;

text.value = "";

function clear() {
    text.value = "";
    resultat = false;
    onCalcul = false;
    virgule = false;
    operateur = "";
}

function calcul(op){
    switch (op) {
        case "/":
            resultat /= parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;
        
        case "-":
            resultat -= parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;

        case "+":
            resultat += parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;

        case "*":
            resultat *= parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;

        case "%":
            resultat %= parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;
        
        default:
            break;
    }
}

function checkOp(id){
    switch (id) {
        case "divise":
            if (!onCalcul) {                
                operateur = "/";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                calcul(operateur);
                operateur = "/";
            }                    
            break;
        
        case "soustrait":
            if (!onCalcul) {
                operateur = "-";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                calcul(operateur);
                operateur = "-";
            }                    
            break;

        case "add":
            if (!onCalcul) {
                operateur = "+";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                calcul(operateur);
                operateur = "+";
            }                    
            break;

        case "fois":
            if (!onCalcul) {
                operateur = "*";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                calcul(operateur);
                operateur = "*";
            }                    
            break;
            
        case "mod":
            if (!onCalcul) {
                operateur = "%";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                calcul(operateur);
                operateur = "%";
            }                    
            break;
            
        default:
            calcul(operateur);
            operateur = "";
            onCalcul = false;
            break;
    }
}

function update(){
    if(this.id[0] == "b"){
        if (isTyping) {
            text.value += this.id[3];
        } else {
            text.value = this.id[3];
            isTyping = true;
        }
    } else if(this.id == "point"){
        if(!virgule){
            if (isTyping) {
            text.value += ".";
            } else {
                text.value = ".";
            }
            virgule = true;
        }               
    } else if(this.id == "clear"){
        clear();        
    } else if(this.id == "ce"){
        if(text.value[text.value.length-1] == "."){
            virgule = false;
        }
        text.value = text.value.slice(0, -1);
    } else {
        checkOp(this.id);
    }
}

Object.keys(boutons).forEach(key => {
    boutons[key].addEventListener("click", update);
});
