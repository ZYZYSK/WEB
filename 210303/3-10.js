function doChange(){
    var x=document.querySelector('#x').value;
    var y=document.querySelector('#y').value;
    var msg=document.querySelector('#msg');
    msg.style.left=x+'px';
    msg.style.top=y+'px';
}