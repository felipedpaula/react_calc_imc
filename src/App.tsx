import React, { useState } from 'react';
import './App.css';
import poweredImage from './assets/powered.png';

function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if(heightField && weightField) {

    } else {
      alert('Calcule todos os campos!');
    }
  }

  return (
    <div className="App">
      <header>
        <div className='header-container'>
          <img src={poweredImage} width={150} alt="Logo" />
        </div>
      </header>
      <div className='container'>
        <div className='left-side'>
          <h1>Calcule seu IMC</h1>
          <p className='left-description'>IMC é a sigla para o Índica de Massa Corpórea, parâmetro adotado pelas Organização Mundial da Saúde para calcular o peso ideal para cada pessoa.</p>
          <input type="number" value={heightField > 0 ? heightField : ''} placeholder="Digite a sua altura. Ex: 1.5 (em metros)" onChange={e => setHeightField(parseFloat(e.target.value))}  />
          <input type="number" value={weightField > 0 ? weightField : ''} placeholder="Digite o seu peso. Ex: 40.5 (em kilogramas)" onChange={e => setWeightField(parseFloat(e.target.value))}  />
        
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className='right-side'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
