window.onscroll=function(){
    dofunc()
};
function dofunc()
{
    var a=document.body.scrollTop || document.documentElement.scrollTop;
    var b=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var c=(a/b)*100;
    document.getElementById("s2").style.height=c+"%";
}
function show(x)
{
    document.getElementById(x).style.height="28vw";
}
function hide(y)
{
    document.getElementById(y).style.height="0vw";
}