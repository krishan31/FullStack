import React from 'react';
import Cards from './components/Cards/Cards';
import sdata from './Data/SeriesData';
import Heading from './components/Heading/Heading';
import './App.css';
import HookCounter from './components/HookCounter';


// If - else codition
// const favseries = 'amazon';

// const FavS = () => {
//   if(favseries === 'amazon'){
//     return <Netflix />
//   }else{
//     return <Amazon />
//   }
    
// }


function ncard(value) {
  return (
    <Cards 
    key={ value.id }
    imgsrc={ value.imgsrc } 
    title={ value.title } 
    sname={ value.sname }
    link={ value.link }
    />
    
  );
}


function App() {
  return(
    <>
      <Heading heading_style={ true }/>
    
      
        {sdata.map(ncard)}
           {/* <Cards 
          imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
          title="A Netflix Original Film"
          sname="DARK"
          link="https://www.netflix.com/in/title/80990668?source=35"
        />
           <Cards 
          imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
          title="A Netflix Original Film"
          sname="DARK"
          link="https://www.netflix.com/in/title/80990668?source=35"
        /> */}

        <HookCounter />
        
    </>
  );
}

export default App;




