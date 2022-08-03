
const hasMeeting = true;
const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name :'Technical Meeting',
            location :'Google meet',
            time :'10:00 PM'
        };
        resolve(meetingDetails);
    }else{
        reject(new Error('Meeting Already Scheduled!'));
    }
});


meeting
    .then((resolve)=>{
        // resolved data
        console.log(JSON.stringify(resolve)) 
    })
    .catch((reject)=>{
        //  rejected data 
        console.log(reject.message)
    })

