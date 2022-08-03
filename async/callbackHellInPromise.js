const marks = 70;
const paymentSuccess = true;

function enroll(){
    console.log('Payment is on process...');    
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve(progress);
            }
            else{
                reject('Payment process is incomplete.....');
            }
        },2000)
    })
    return promise;
}

function process(){
    console.log('Process on Load...!');
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(marks>90){
                resolve(getCertificate)
            }
            else{
                reject('Certificate could not be published!')
            }
        },2000)
    })
    return promise;
}
function getCertificate(){
    console.log('Certificate on Process')
    setTimeout(function(){
        const promise = new Promise(function(resolve,reject){
            resolve('Certificate is printed!');
        });
            
    },3000)
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    });

