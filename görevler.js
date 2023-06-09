/**tamamlanmış görevler */
function tamamlanmis(){
    var list_elemanları=document.getElementsByTagName("li");
console.log(list_elemanları);

for(var x=0; x<list_elemanları.length; x++){
    //console.log( list_elemanları[x]);
    list_elemanları[x].addEventListener("click",function(){
        this.classList.toggle("tamamlanmis");
    });
}
}
tamamlanmis();

/**silinen görevler  */

function silinengörevler(){
    var silbuton=document.getElementsByTagName("span");

for(var i=0; i<silbuton.length; i++){
    silbuton[i].addEventListener("click",function(){
        var silinecek=this.parentElement;
        silinecek.remove();
    });
}
}
silinengörevler();

/** rgrbr */
 var gorev=document.getElementsByTagName("input")[0];

 gorev.addEventListener("keypress",function(e){
    //console.log(e.keyCode);
    if(e.keyCode===13){
        //alert("enter'a basıldı");
        var yeninot=document.createElement ("li");
        yeninot.innerHTML=gorev.value;

        var yenispan=Document.createElement("span");
        var yeniİkon=document.createElement("i");
        yeniİkon.setAttribute("class","fa fa-window-close"); 

        yenispan.insertBefore(yeniİkon,yenispan.firstchild);
        yeninot.insertBefore(yenispan,yeninot.firstChild); 

        var gorevler=document.getElementsByTagName("ul")[0];

        gorevler.insertBefore(yeninot,gorevler.lastChild); 

       silinengörevler();
       tamamlanmis();








    }
 });