document.getElementById('log1').innerHTML = "First line code"

setTimeout(function(){
    document.getElementById('log2').innerHTML = "Second line code"
},4000)
document.getElementById('log3').innerHTML = "Third line code"


// setInterval(function(){
//     console.log("setInterval function is being called!")
// },2000)