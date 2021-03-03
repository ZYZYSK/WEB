function clickNow(){
    var r=document.querySelector('#red').value;
    var g=document.querySelector('#green').value;
    var b=document.querySelector('#blue').value;
    var msg=document.querySelector('#msg');
    msg.style.backgroundColor='rgb('+r+','+g+','+b+')';
}