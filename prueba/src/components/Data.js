import React from 'react';
import NumberFormat from 'react-number-format';

const Data = ({ datos, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td>
      <NumberFormat
        value={datos.valor}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </td>

    <td>{datos.opcion}</td>
    <td>
      <NumberFormat
        value={datos.trm}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </td>
  </tr>
);

export default Data;