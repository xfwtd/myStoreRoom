window.onload=function () {
    var nav=document.getElementById("navBar");
    var lis=nav.getElementsByTagName("li");
    for (var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function () {
            for(var j=0;j<lis.length;j++){
                lis[j].className="";
            }
            lis[j].className="focus";
        }
    }
}