function draw() {
    var canvas=document.querySelector('#canvas');
    var context=canvas.getContext('2d');
    context.beginPath();
    context.fillStyle="rgba(255,0,0,0.5)";
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(100+25*i,100+25*i,50,0,Math.PI*2,false);
        context.fill();
    }
    context.fill();
}