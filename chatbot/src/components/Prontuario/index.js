import React, { useState } from 'react';
import './prontuario.css';
import Slider from '@material-ui/core/Slider';


const marks = [
  {
    value: 0,
    label: '2012',
  },
  {
    value: 10,
    label: '2011',
  },
  {
    value: 20,
    label: '2010',
  },
  {
    value: 30,
    label: '2000s',
  },
  {
    value: 40,
    label: '1990s',
  },
  {
    value: 50,
    label: '1980s',
  },
  {
    value: 60,
    label: '1970s',
  },
  {
    value: 70,
    label: '1960s',
  },
  {
    value: 80,
    label: '1950s',
  },
  {
    value: 90,
    label: '1940s',
  },
  {
    value: 100,
    label: '1930s',
  },
];

const Prontuario = () => {
  const [headerButton, setHeaderButton] = useState('1');
  const [value, setValue] = useState([0, 30]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mainWrapper">
      <div className="headerPart">
        <div>
          <h2 style={{ color: '#666', fontSize: '1.5rem' }}>
              ELLEN'S MEDICAL JOURNAL
          </h2>
        </div>
        <div>
          <button
            type="button"
            className={headerButton === '1' ? 'headerButton activeHeaderButton' : 'headerButton'}
            onClick={() => setHeaderButton('1')}
          >
            BY DATE
          </button>
          <button
            type="button"
            className={headerButton === '2' ? 'headerButton activeHeaderButton' : 'headerButton'}
            onClick={() => setHeaderButton('2')}
          >
            BY CONDITION
          </button>
          <button
            type="button"
            className={headerButton === '3' ? 'headerButton activeHeaderButton' : 'headerButton'}
            onClick={() => setHeaderButton('3')}
          >
            BY TYPE
          </button>
        </div>
      </div>
      <div className="middlePart">
        <div className="plusButton">
          <button type="button" onClick={() => alert('oi')}>+</button>
        </div>
        <div style={{ padding: 15, width: '80%', marginTop: 20 }}>
          <Slider
            defaultValue={20}
            step={null}
            marks={marks}
            valueLabelDisplay="off"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10,
      }}
      />
    </div>
  );
};

export default Prontuario;
