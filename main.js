function getpara() {
    var inputs=[];
    for(var i=1;i<=6;i++) {
        var input=document.getElementById("Input_"+i).value;
        inputs.push(input); 
    }
    document.getElementById("showparagraph").innerHTML=inputs.join(".");
}