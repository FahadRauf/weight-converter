const kgInput = document.querySelector('.weight-kg');
const lbsInput = document.querySelector('.weight-pound');


function theGreatRounding(num){
    return Math.round(num * 100) / 100;
}



function kgToLbs(){
    const  kilogramWeight = kgInput.value;
     const lbsWeight = kilogramWeight * 2.205;
     lbsInput.value = theGreatRounding(lbsWeight);
     
}

function lbsToKg(){
    const  lbsWeight = lbsInput.value;
     const kilogramWeight = lbsWeight / 2.205;
     kgInput.value = theGreatRounding(kilogramWeight);
}

 function ronaq() {
    kgInput.addEventListener('input', kgToLbs);
    lbsInput.addEventListener('input', lbsToKg);
 }
 ronaq();

