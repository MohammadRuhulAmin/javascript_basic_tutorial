const paymentSuccess = true;
const marks = 70;

function enroll(callback){
    console.log("Payment process is in progress...!");
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }
        else{
            console.log("Payment is failed");
        }
    },2000)
}

function progress(callback){
    console.log("Course on Progress")
    setTimeout(function(){
        if(marks>=80){
            callback();
        }else{
            console.log("You coundnt get enough marks to get the certificate");
        }
    },3000)

}

function getCertificate(){
    console.log('Preparing your certificate!')
    setTimeout(function(){
        console.log("You got your certificate, weldone");
    },3000)
}


// enroll(progress);
// progress(getCertificate);
// getCertificate();

enroll(function(){
    progress(getCertificate);
})


