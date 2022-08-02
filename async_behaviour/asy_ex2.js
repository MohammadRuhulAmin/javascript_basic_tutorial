
const  takeOrder = (customer,callback)=>{
    console.log(`Take Order for ${customer}`);
    callback(customer);
}

const processOrder = (customer,callback)=>{
    console.log(`Process Order for ${customer}`);
    setTimeout(()=>{
        console.log('Cooking completed');
        console.log(`Order Processed For ${customer}`);
        callback(customer);
    },3000)
}

const completeOrder =(customer)=>{
    console.log(`Order is completed for ${customer}`);
}

takeOrder('Customer - 1',()=>{
    processOrder('Customer - 1',()=>{
        completeOrder('Customer - 1');   
    })
})