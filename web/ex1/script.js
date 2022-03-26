function getdiff(diff)
{
document.f.rep.value=diff;
}

function tester(num)
{
    if(document.f.defficulte.value==0)
        {alert ("choisir un niveau de defficulte !!");
    return 0;}
    coup=document.f.rep.value;
    coup = coup -1;
if (coup <1 ) {
    test = confirm("T'as perdu !\n tu doit trouver : " + alea + "\nNouvelle partie ?");
}
if (num.value == alea) {
    test = confirm("Vous avez gagné \nNouvelle partie ?");
}
if (num.value != alea) {
    document.f.rep.value = coup;
}

     if (test) {
    const alea = Math.round(Math.random() * 9) + 1;
    document.f.num.value="";
    document.f.rep.value="";
    }
    else {
    window.close();
    }

}


const alea = Math.round(Math.random() * 9) + 1;




