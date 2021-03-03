var cnt=0;
function doDown(event){
    switch(event.buttons){
        case 1:
            var w=event.clientX
            var h=event.clientY;
            var obj=document.createElement('p');
            obj.name='create element';
            obj.className='newelement';
            obj.textContent="No, "+cnt++;
            event.target.appendChild(obj);
            break;
        case 2:
            if(event.target.name=='create element'){
                var parent=event.target.parentElement;
                parent.removeChild(event.target);
            }
            break;
    }
    event.preventDefault();
}