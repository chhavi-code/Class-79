nameofthestudentsarray=[];

function submit(){
 var name1=document.getElementById("name1").value;
 var name2=document.getElementById("name2").value;
 var name3=document.getElementById("name3").value;
 var name4=document.getElementById("name4").value;

 nameofthestudentsarray.push(name1);
 nameofthestudentsarray.push(name2);
 nameofthestudentsarray.push(name3);
 nameofthestudentsarray.push(name4);

 console.log(nameofthestudentsarray);
 document.getElementById("dispname").innerHTML=nameofthestudentsarray;
 document.getElementById("button1").style.display="none";
 document.getElementById("button2").style.display="inline-block";

}

function sort(){

    nameofthestudentsarray.sort();
    console.log(nameofthestudentsarray);
    document.getElementById("dispname").innerHTML=nameofthestudentsarray;
}