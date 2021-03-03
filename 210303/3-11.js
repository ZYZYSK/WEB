function doDown(event){
    if(event.target.id=='msg'){
        event.target.style.backgroundColor='#cc7777';
    }
}
function doUp(event){
    if(event.target.id=='msg'){
        event.target.style.backgroundColor='#ffaaaa';
    }
}
function doMove(event){
    if(event.target.id=='msg'){
        if(event.buttons==1){
            var w=event.clientX;
            var h=event.clientY;
            event.target.style.left=(w-50)+'px';
            event.target.style.top=(h-50)+'px';
        }
    }
}