const placeorder=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("order is placed")
            resolve()
        },2000)
    })
}

const startproduction=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("production started")
            resolve()
        },2000)
    })
}

const idprint=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("id printed")
            resolve()
        },2000)
    })
}

const productname=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("product name started")
            resolve()
        },2000)
    })
}

const productdescription=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("product description started")
            resolve()
        },2000)
    })
}

console.log("order is going to be taken...");
placeorder()
.then(()=>{
    console.log("product is in production....")
    return startproduction();
})
.then(()=>{
    console.log("Id is in printing....")
    return idprint();
})
.then(()=>{
    console.log("Product name start printing....")
    return productname();
})
.then(()=>{
    console.log("Product description started....")
    return productdescription();
})






