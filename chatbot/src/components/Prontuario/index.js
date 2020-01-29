/* eslint-disable no-alert */
import React, { useState } from 'react';
import './prontuario.css';
import Slider from '@material-ui/core/Slider';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useAlert } from 'react-alert';
import Registro from '../Registro';

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
  const [bodyButton, setBodyButton] = useState('1');
  const alert = useAlert();
  const [value, setValue] = useState([0, 30]);
  const mockArr = ['registro', 'registro', 'registro', 'registro', 'registro', 'registro', 'registro', 'registro', 'registro', 'registro'];
  const [showItem, setShowItem] = useState(2);
  const [endMock, setEndMock] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loadMoreContent = () => {
    if (showItem >= mockArr.length) {
      setEndMock(true);
      alert.show('Fim dos registros');
    }
    const newShowItem = showItem >= mockArr.length ? showItem : showItem + 1;
    setShowItem(newShowItem);
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
          <button type="button" onClick={() => alert.show('Hello')}>+</button>
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
      <div className="bottomPart">
        <div className="bottomPart_left">
          <button
            className={bodyButton === '2' ? 'bodyButton bodyButtonActive' : 'bodyButton'}
            style={{ position: 'relative', bottom: 0, left: 160 }}
            type="button"
            onClick={() => setBodyButton('2')}
          />
          <button
            className={bodyButton === '1' ? 'bodyButton bodyButtonActive' : 'bodyButton'}
            style={{ position: 'relative', bottom: 200, left: 0 }}
            type="button"
            onClick={() => setBodyButton('1')}
          />
          <button
            className={bodyButton === '3' ? 'bodyButton bodyButtonActive' : 'bodyButton'}
            style={{ position: 'relative', bottom: -160, left: -70 }}
            type="button"
            onClick={() => setBodyButton('3')}
          />
        </div>
        <div className="bottomPart_right">
          <div className="info_box">
            <div className="info_box_header">
              <h2>Asthma</h2>
              <div style={{ marginTop: '-20px' }}>
                <p style={{ textAlign: 'right' }}>ACTIVE</p>
                <p style={{ fontStyle: 'italic' }}>1947-present</p>
              </div>
            </div>
            <div className="info_box_header_description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ducimus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum dolorum saepe eligendi natus voluptate corporis molestias facere pariatur minima.
              </p>
            </div>
            <div className="info_box_middle">
              <div className="info_box_middle_info_up">
                <div className="info_box_middle_medications">
                  <h2>YOUR MEDICATIONS</h2>
                  <div className="info_box_middle_medications_wrap">
                    <div className="current">
                      <p>CURRENT:</p>
                    </div>
                    <div className="symbicort">
                      <h3>Symbicort</h3>
                      <div style={{ margin: 12 }}>
                        <p>One spray in each.</p>
                        <p>Nostril as needed.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info_box_middle_medications" style={{ padding: 25, borderRight: 0 }}>
                  <h2>YOUR SYMPTOMS</h2>
                  <ul>
                    <li>Weezing</li>
                    <li>Shortness of breath</li>
                  </ul>
                </div>
              </div>
              <div className="info_box_middle_see_past">
                <div className="info_box_middle_see_past_button">
                  <p>SEE PAST MEDICATIONS</p>
                  <div role="button" onClick={() => alert.show('world')} style={{ cursor: 'pointer' }}>
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </div>
            </div>
            <div className="your_history">
              <h2>YOUR HISTORY</h2>
              <div />
            </div>
            <div style={{ marginTop: 10 }}>
              {
                mockArr.slice(0, showItem).map(() => <Registro />)
              }
            </div>
            {
              (!endMock) && (
              <div role="button" onClick={loadMoreContent} className="finalButton">
                <IoMdArrowDropdown />
              </div>
              )
}
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Prontuario;
