import './App.css';
// import HomeCard from './HomeCard';
// import HomeCarousel from './HomeCarousel';
// import './NavBar';
// import Parent from './Parent';
// import NavBar from './NavBar';
// import ImageData from './Imagedata';
// import CardData from './CardData';
// import CardImage from './CardImage';
// import React, {useEffect,useState} from 'react';
import A from './A';

// const ncard = (val) => {
//   return (
//   <HomeCard 
//   key={val.id}
//   title={val.title} 
//   imgsrc={val.imgsrc} 
//   desc={val.desc}
//   />
//   )
// }
// const ncards = (val2)=>{
//   return(
//     <CardImage
//     key={val2.id}
//     title={val2.title}
//     desc={val2.price}
//     imgurl={val2.image}
//     />
//   )
// }
//  function App() {
  
//   const [Data, setData]=useState([]);
//   useEffect(() => {
//      const fetchData = async ()=>{
//       try{
//        const response=await fetch("https://fakestoreapi.com/products")
//        const Data=await response.json()
//        setData(Data)
//       }
//       catch(error){
//         console.log('Error Occured',error)
//       }
//      }
//      fetchData()
//   },[])

  // return (
  //   <>
  //   // <NavBar/>
  //   // <HomeCarousel/>
    
  //   // <div className='row'>
  //   //   {ImageData.map((val, index) => (
  //   //     <div key={val.id} className="col-md-4">
  //   //       {ncard(val)}
  //   //     </div>
  //   //   ))}  
  //   // </div>

  //   // <div className='row'>
  //   //   {Data.map((val2, index) => (
  //   //     <div key={val2.id} className="col-md-4">
  //   //       {ncards(val2)}
  //   //     </div>
  //   //   ))}  
  //   // </div>

  //   <parent/>
  //   </>
   
  // );
// }

// function App() 
// {
//   return(
//     <>
//     <Parent/>
//     </>
    
//   )
// }

function App(){
  return(
    <>
    <A/>
    </>
  )
}

export default App;
