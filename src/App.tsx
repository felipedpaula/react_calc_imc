import React, { useState } from 'react';
import './App.css';
import leftArrowImage from './assets/leftarrow.png';
import poweredImage from './assets/powered.png';

import { levels, calculateImc, Level } from './helpers/imc';

import {GridItem} from './components/GridItem/GridItem';

function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Preencha todos os campos!');
    }
  }

  const handleBackButton = () => {
      setToShow(null);
      setHeightField(0);
      setWeightField(0);
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
          {!toShow && 
            <div className='grid'>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}></GridItem>
              ))}
            </div>
          }
          {toShow && 
            <div className='rightBig'>
              <div className='back-arrow' onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
