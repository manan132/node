import './App.css';
import HomeCard from './HomeCard';
import HomeCarousel from './HomeCarousel';
import './NavBar';
import NavBar from './NavBar';
import ImageData from './Imagedata';

const ncard = (val) => {
  return (
  <HomeCard 
  key={val.id}
  title={val.title} 
  imgsrc={val.imgsrc} 
  desc={val.desc}
  />
  )
}

function App() {
  return (
    
    <>
    <NavBar/>
    <HomeCarousel/>
    <div className='row'>
      
        {ImageData.map((val, index) => (
          <div key={val.id} className="col-md-4">
            {ncard(val)}
          </div>
        ))}  
    
    </div>
    
    </>
   
  );
}

export default App;
