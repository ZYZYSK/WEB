function clickNow(){
    //プルダウンメニューの処理
    var mobile=document.querySelector('#mobile');
    var res='<p>'+mobile.value+'</p>';
    //複数選択リストの処理
    var pc=document.querySelector('#pc');
    var opts=pc.getElementsByTagName('option');
    var sel_pc='<p>';
    for(var opt in opts){
        if (opts[opt].selected){
            sel_pc+=opts[opt].value+' ';
        }
    }
    sel_pc+='</p>';
    var msg=document.querySelector('#msg');
    msg.innerHTML=res+=sel_pc;
}