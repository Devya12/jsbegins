let arrlist =["item1","item2","item3","item4"];
currindex=0;
function buttonpress(){
  let name= document.getElementById("newlist");   
  
 if(currindex<arrlist.length){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(arrlist[currindex]));
    name.appendChild(li)
currindex++

}

}
function deleteonpress()
{
    let deletel = document.getElementById("newlist");
    if(deletel.hasChildNodes)
{
    deletel.removeChild(deletel.lastChild)
    currindex--;
}}