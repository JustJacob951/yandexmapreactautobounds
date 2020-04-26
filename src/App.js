import React from 'react';
import './App.css';
import { YMaps, Map } from 'react-yandex-maps';

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
    const collection = new ymaps.GeoObjectCollection();
    collection.add(new ymaps.Placemark(coordinates[0]));
    collection.add(new ymaps.Placemark(coordinates[1]));
    collection.add(new ymaps.Placemark(coordinates[2]));
    this.ymap.current.geoObjects.add(collection);
    this.ymap.current.setBounds(collection.getBounds());
  }

  render() {
    return (
     <div className="App">
       <header className="App-header">
         <YMaps>
           <Map
               onLoad={(ymaps) => this.handleMapLoad(ymaps)}
               instanceRef={this.ymap}
               width="100vw"
               height="100vh"
               defaultState={{ center: [25.75, 37.57], zoom: 5 }}
               modules={["GeoObjectCollection", "Placemark"]}
           >
           </Map>
         </YMaps>
       </header>
     </div>
    );
  }


}

export default App;
