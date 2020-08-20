const add = (a,b) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(a+b);
            // reject('error');
        },2000)
    })
}

add(1,2)
.then((result) => {
    console.log(result)
    return add(result, 3)
}).then((result2)=>{
    console.log(result2)
}).catch((err) => {
    console.log(err);
});