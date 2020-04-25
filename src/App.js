import React from 'react';
import './App.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const coordinates = [
  [55.751371, 37.520301],
  [55.690709, 37.585563],
  [55.723414, 37.728884],
];
class App extends React.Component{
  constructor(props) {
    super(props);
    this.ymap = React.createRef();
  }
  handleMapLoad = ymaps => {
    console.log(ymaps);
    // console.log(this.ymap.current.geoObjects.getBounds());  this always null, problem could be in Placemarks or need load special module
    // this.ymap.current.setBounds(this.ymap.current.geoObjects.getBounds()); //this line should define correct map bounds depends of current marks

  }
  render() {
    return (
     <div className="App">
       <header className="App-header">
         <YMaps>
           <Map onLoad={(ymaps) => this.handleMapLoad(ymaps)} instanceRef={this.ymap} width="100vw" height="100vh" defaultState={{ center: [25.75, 37.57], zoom: 5 }} >
             {coordinates.map((coordinate,i) => <Placemark key={i} geometry={coordinate} />)}
           </Map>
         </YMaps>
       </header>
     </div>
    );
  }


}

export default App;
