import './App.css';
import data from './data';
import imagecard from './imagecard';

function App() {
  return (
    <div className='container'>
      <h1>Cards</h1>
      <div className='row'>
        {
          data.map((card, index) => {
          <div key={index}>
            <imagecard
            title={card.title}
            desc={card.desc}
            imgurl={card.imgurl}
            />

</div>
          })
        }
      </div>

    </div>
   
  );
}

export default App;
