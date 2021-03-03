function doChange(){
    var w=document.querySelector('#w').value;
    var h=document.querySelector('#h').value;
    var msg=document.querySelector('#msg');
    msg.style.height=h+'px';
    msg.style.width=w+'px';
}