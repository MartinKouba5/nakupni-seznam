import React, { useState } from 'react';
import Navbar from './navbar';
import Seznam from './seznam';
import SeznamDetail from './SeznamDetail';
import seznamyData from './seznamy';

const App = () => {
  const [seznamy, setSeznamy] = useState(seznamyData);
  const [activeSeznam, setActiveSeznam] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleSeznamClick = (seznam) => {
    setActiveSeznam(seznam);
    setShowDetail(true);
  };

  const handleBackClick = () => {
    setShowDetail(false);
  };

  return (
    <div className="container">
      <Navbar />
      {showDetail ? (
        <SeznamDetail seznam={activeSeznam} onBackClick={handleBackClick} seznamy={seznamy} setSeznamy={setSeznamy} />
      ) : (
        <div className="mt-5">
          <h1>Nákupní seznam</h1>
          <div className="d-flex justify-content-center mb-3">
            <button type="button" className="btn btn-primary mr-2">Zobrazit všechny</button>
            <button type="button" className="btn btn-success">Vytvořit nový seznam</button>
          </div>
          <div className="row justify-content-center">
            {seznamy.map((seznam) => (
              <Seznam key={seznam.id} mytitle={seznam.title} onSeznamClick={() => handleSeznamClick(seznam)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
