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
    document.getElementById(operateur).className = "";
    operateur = "";
}

function calcul(op){
    switch (op) {
        case "divise":
            resultat /= parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;
        
        case "soustrait":
            resultat -= parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;

        case "add":
            resultat += parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;

        case "fois":
            resultat *= parseFloat(text.value);
            text.value = resultat;
            isTyping = false;
            break;

        case "mod":
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
            document.getElementById(id).className = "pink";

            if (!onCalcul) {                
                operateur = "divise";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                document.getElementById(operateur).className = "";
                calcul(operateur);
                operateur = "divise";
            }                    
            break;
        
        case "soustrait":
            document.getElementById(id).className = "pink";

            if (!onCalcul) {
                operateur = "soustrait";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                document.getElementById(operateur).className = "";
                calcul(operateur);
                operateur = "soustrait";
            }                    
            break;

        case "add":
            document.getElementById(id).className = "pink";

            if (!onCalcul) {
                operateur = "add";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                document.getElementById(operateur).className = "";
                calcul(operateur);
                operateur = "add";
            }                    
            break;

        case "fois":
            document.getElementById(id).className = "pink";

            if (!onCalcul) {
                operateur = "fois";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                document.getElementById(operateur).className = "";
                calcul(operateur);
                operateur = "fois";
            }                    
            break;
            
        case "mod":
            document.getElementById(id).className = "pink";

            if (!onCalcul) {
                operateur = "mod";
                resultat = parseFloat(text.value);
                onCalcul = true;
                isTyping = false;
            } else {
                document.getElementById(operateur).className = "";
                calcul(operateur);
                operateur = "mod";
            }                    
            break;
            
        default:
            document.getElementById(operateur).className = "";
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
