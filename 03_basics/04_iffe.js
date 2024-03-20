// immediatly Invoked Function Expression (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECT`);
}) ();


//simple IIFE
((name) => {
    console.log(`Db Connected Two ${name}`);
}

) (`somesh`)




