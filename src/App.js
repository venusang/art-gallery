import { useState, useEffect } from 'react';
import Gallery from './components/gallery';
import ButtonBar from './components/buttonBar';


function App() {

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId]);

  const handleIterate = (e) => {
    setArtId(artId = Number(e.target.value));
  };

  return (
    <div className="App">
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
