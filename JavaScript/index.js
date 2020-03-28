
function comp()
{
    document.getElementById("logo").innerHTML ="Learning Right Preschool";
    document.getElementById("logo").style.backgroundColor ="lightgreen";
    document.getElementById("logo").style.textAlign="center";
    document.getElementById("text").innerHTML="Here at Learning Right, we believe that every child has the right to an education at their level with easy entry and access to. Here we help ready your children academically and socially ready for Kindergarten."
}

//Submission results from the signup infromation
function info()
{
    var parent=document.getElementById("parent").value; 
var child=document.getElementById("child").value;
var phone=document.getElementById("phone").value;

   var answer=prompt("are you sure your information is correct type y for yes or n for no (Only yes works for some odd reason)");
    if(answer="y" || "yes")
    {
        alert("the following info has been submitted: Adult's name =" + parent + " Child's name = " + child + " Adult's phone number = " + phone);
    }

    else if(answer="n" || "no")
    {
        alert("please put in the correct information then hit the submit button");
    }

    else
    {
        alert("There are 2 appropriate answers, please use one of the two");
    }
}
