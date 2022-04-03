function getdiff(diff)
{
document.f.rep.value=diff;
}

function tester(num)
{
    console.log(alea);
    if(document.f.difficulté.value==0)
        {alert ("choisir un niveau de defficulte !!");
    return 0;}
    coup=document.f.rep.value;
    coup = coup -1;

if (num.value == alea) {
    test = confirm("Vous avez gagné \nNouvelle partie ?");
}
else if (num.value != alea) {
    document.f.rep.value = coup;
}
 if (coup <1 ) {
    test = confirm("T'as perdu !\n tu doit trouver : " + alea + "\nNouvelle partie ?");
}

     if (test) {
        window.location.reload();
    }
    else {
    window.close();
    }

}


const alea = Math.round(Math.random() * 9) + 1;




