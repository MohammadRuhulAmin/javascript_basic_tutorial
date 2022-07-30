
/**
 * 
 * in javascrpit all functions are actually method 
 * 
 * If a function is not assigned inside an object , it is actually assigned inside window object 
 * that is why all functions are method  
 */


var Window = {

    x: function(){
        console.log("this is wondow object");
    }


}

Window.x();