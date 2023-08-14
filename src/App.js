import React from 'react';
import './App.css';


function App() {

  return (
    <div>
      <h1>Club DB</h1>
      <p>カレッジのデータベースの授業で作成したPHPページをReact Appで作り替えました。一部機能ですが、INSERTとSELECTができるページを作りましたので、ぜひお試しください！</p>
      <h3>EERモデル</h3>
      <img src={require('./eer_model_2221.png')} alt='eer model image'></img>
    </div>
  );
}

export default App;

