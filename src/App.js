import React from 'react';
import { Preview } from "./components/Preview";
import { Preview2 } from "./components/Preview2";
import { providerImage } from "./previewImage";
import './App.css';

function App() {

  const previewImage = () => providerImage();
  
  return (
    <div className="App">
      <Preview imageprovider={previewImage} />
      <Preview2 />
    </div>
  );
}

export default App;
