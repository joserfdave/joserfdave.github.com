function p1obj(){
    document.getElementById("p1").style.color="red";
    alert("p1");
}
function p2obj(){
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1):nowDate.getMonth() + 1;
    var day = nowDate.getDate() <10 ?"0" + nowDate.getDate() : nowDate.getDate();
    var datestr = year + "-" +month + "-" + day;

    document.getElementById("h1").innerText=datestr;
    alert("p2");
}
function p3obj(){
    document.getElementsByClassName("m-item")[2].className+=" fn-active"
    alert("p3");
}
function p4obj(){
    var parent = document.getElementById("ul");
    var child = document.getElementById("p8");

    parent.removeChild(child);
    alert("p4");
}
function p5obj(){
    window.location='https://www.taobao.com';
    alert("p5");
}
function p6obj(){
    var p9 = document.createElement("li");
    var nod = document.createTextNode("p9")
    p9.appendChild(nod);
    document.getElementById("ul").appendChild(p9);
    alert("p6");
}
function p7obj(){
    alert("p7");
    var wide = window.screen.width;
    document.getElementsByClassName("m-box").style.width = wide;
}