function clickNow(){
    var ck=document.querySelector('#check1');
    var rA=document.querySelector('#radioA');
    var rB=document.querySelector('#radioB');
    var res="";
    if(ck.checked){
        res="あなたは大人ですね．"
    }else{
        res="まだ子供ですね．"
    }
    if (rA.checked){
        res+="女性ですね．"
    }
    if(rB.checked){
        res+="男性ですね．"
    }
    var msg=document.querySelector('#msg');
    msg.textContent=res;
}