async function delay(time)
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve()
        },time)
    })
   
}
async function placeorder()
{
    await delay(2000)
    console.log("order is taken")
}
async function startproduction()
{
    await delay(2000)
    console.log("product is taken")
}
async function Printid()
{
    await delay(2000)
    console.log("id is taken")
}
async function productname()
{
    await delay(2000)
    console.log("product name is taken")
}
async function productdesc()
{
    await delay(2000)
    console.log("product description is taken")
}


async function main()
{
    console.log("order is now going to be taken...")
    
    await placeorder()
    console.log("product is in production...")

    await startproduction()
    console.log("id is printing...")

    await Printid()
    console.log("product name is printing...")

    await productname()
    console.log("product description is printing...")

    await productdesc()
}
main()