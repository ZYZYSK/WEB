function clickNow(){
    var input1=document.querySelector('#input1');
    var value=input1.value;
    var msg=document.querySelector('#msg')
    msg.textContent="こんにちは, "+value+"さん!"
}