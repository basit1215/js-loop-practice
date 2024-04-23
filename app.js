 

var player =["babar", "rizwan", "saim", "amir", "imad", "iftikhar", "shadab", "shaheen", "naseem", "abrar", "usman", "haris", "usama", "abbas", "irfan", "zaman", "hasan"];
var userInput= prompt("Hi, PCB announced the Pakistan squad against New Zealand series \nNow your check the player name \n Enter the name of player");
var flag=false;
for ( i=0; i<player.length; i++){
if (player[i]=== userInput){
    flag=true
}
}
if(flag){
     alert("Selected");
}
else{
    alert("Not selected");
}


var player =["babar", "rizwan", "saim", "amir", "imad", "iftikhar", "shadab", "shaheen", "naseem", "abrar", "usman", "haris", "usama", "abbas", "irfan", "zaman", "hasan"];
var userInput= prompt("Hi, PCB announced the Pakistan squad against New Zealand series \nNow your check the player name \n Enter the name of player");
var flag=false;
for ( i=0; i<player.length; i++){
if (player[i]=== userInput){
    flag=true
    alert("Selected");
}
}
if(!flag){
     alert("Not Selected");
}

var minNum= [5,8,9,63,21,47,85,2,6,9,4,10,25,8,4];
var min = num [0] ;
for (i=0; i<num.length ; i++){
if(num[i] <min){
min= num[i]
}
}
console.log(min)

var maxNum=[8,56,9,24,1,,6,1,7,5,6,9,8,52,2,5,2,4,1,4,7,8,69,3,5,8,7,87,98,25];
var max=maxNum[0];
for(i=0; i<maxNum.length; i++){
    if(maxNum[i] > max){
max= maxNum[i]
    }
}
console.log(max);