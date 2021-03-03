import React from 'react';
import Data from './Data';

const Datalist = ({ datos }) => {
  return (
    <div className='card mt-2 py-5'>
      <div className='card-body'>
        <h1 className='text-center'>Listado de datos</h1>
        <table className='table table-responsive-lg table-hover'>
          <thead>
            <tr>
              <th>consecutivo</th>
              <th>Valor</th>
              <th>Descripcion del campo seleccionado</th>
              <th>TRM</th>
            </tr>
          </thead>
          <tbody key={datos.id}>
            {datos.map((datos, index) => (
              <Data key={datos.id} datos={datos} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Datalist;