/*ColdCaller.js, built for Girls Who Code ATL Classroom #1
Written By: Annabel Rothschild
Last Modified: 2017
*/

//names yet to be called, names already called
var names = Array("student1", "student2", "student3");
var usedNames = Array();
//shuffle if no names left, else pull name --> remove from names and add to usedNames 
function pullName(){
    var index = Math.floor(Math.random() * names.length);
    var pulledName = names[index];
    var removeValue = names.indexOf(pulledName);
    names.splice(removeValue, 1);
    document.getElementById("nameText").innerHTML = pulledName;

    usedNames.push(pulledName);
    if (names.length < 1){
        shuffle();
    }
}
//remove all in usedNames and put back in names
function shuffle(){
    for (i=0; i < usedNames.length+2; i++) {
        var temp = usedNames.pop();
        names.push(temp);
    }
}

