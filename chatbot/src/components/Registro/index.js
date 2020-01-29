import React from 'react';
import { GiPill } from 'react-icons/gi';
import { FaUserNurse } from 'react-icons/fa';

import './registro.css';

const Registro = () => (
  <>
    <div className="info_box_footer">
      <div className="info_box_footer_wrap_1">
        <p className="date">
            August, 28 2012
        </p>
        <div>
          <p className="top_wrap_1">
                       Visit for Asthma Checkup
          </p>
          <p className="bottom_wrap_1">
                       Dr. Henry Seven, Community Hospital
          </p>
        </div>
      </div>
      <div className="info_box_footer_wrap_2">
        <p>
          <FaUserNurse />
        </p>
      </div>
    </div>
    <div className="info_box_footer" style={{ borderTop: 0 }}>
      <div className="info_box_footer_wrap_1">
        <p className="date">
         August, 28 2012
        </p>
        <div>
          <p className="top_wrap_1">
                       Began New Medication
          </p>
          <p className="bottom_wrap_1">
                       Symbiotic
          </p>
        </div>
      </div>
      <div className="info_box_footer_wrap_2">
        <p>
          <GiPill />
        </p>
      </div>
    </div>
  </>
);

export default Registro;
