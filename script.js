function valt(){
    var nev = document.getElementById('neve').value;
    var cim = document.getElementById('cime').value;
    var tel = document.getElementById('telefonsz').value;
    document.getElementById("valtnev").innerHTML=nev;
    document.getElementById("valtcim").innerHTML=cim;
    document.getElementById("valttel").innerHTML=tel;
}

function atSzinnev(){
    document.getElementById("neve").style.backgroundColor="blue";
}
function atSzincim(){
    document.getElementById("cime").style.backgroundColor="blue";
}
function atSzintel(){
    document.getElementById("telefonsz").style.backgroundColor="blue";
}

function visszaszinnev(){
    document.getElementById("neve").style.backgroundColor="white";
}

function visszaszincim(){
    document.getElementById("cime").style.backgroundColor="white";
}

function visszaszintel(){
    document.getElementById("telefonsz").style.backgroundColor="white";
}