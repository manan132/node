// const regex=(html)=>{
//     setTimeout(()=>{
//        console.log("Html begin");
//         html();
//     },2000)
// }
// const html=(css)=>{
//     setTimeout(()=>{
//        console.log("css begin");
//        css();
//     },5000)
// }
// const css=(js)=>{
//     setTimeout(()=>{
//        console.log("js begin");
//        js();
//     },5000)
// }
// const js=(js)=>{
//     setTimeout(()=>{
//       js();
//     },5000)
// }

// console.log("WELCOME TO REGEX");
// regex(()=>{
//     console.log("Pass to html ");
//     html(()=>{
//         console.log("pass to css");
//         css(()=>{
//             console.log("pass to js");  
//             js(()=>{
//                 console.log("course ended");
//             })
//         })
//     })
// })





function getburger(callback){
    setTimeout(()=>{
        const burger="🍞"
        console.log("bread is taken",burger);
        callback(burger);
    },1000)
}
function getsauce(burger,callback){
    setTimeout(()=>{
        const sauce="🍅"
        console.log("sauce is taken",sauce);
        callback(sauce);
    },1000)
}
function gettikki(burger,sauce,callback){
    setTimeout(()=>{
        const tikki="🧈"
        console.log("tikki is taken",tikki);
        callback(tikki);
    },1000)
}


getburger((burger)=>{
    getsauce(burger,(sauce)=>{
        gettikki(burger,sauce,(tikki)=>{
           
                console.log("Burger is ready","🍔");
            
        })
    })
})

