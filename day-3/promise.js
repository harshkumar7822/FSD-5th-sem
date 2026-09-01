const myPromise = new Promise((resolve, reject) => {
    let age = 17;
    if(age >= 18){
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }   
})

myPromise 
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
});

const checkEligibility = () => async () => {
    try {
        const message = await myPromise;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}   
checkEligibility();

myPromise
.then((message) => {
    console.log(message);})
    .catch((error) => {
        console.log(error);
    });