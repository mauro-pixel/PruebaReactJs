import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NumberFormat from 'react-number-format';

const stateInicial = {
  datos: { valorCampo: '', opcionCampo: '', trm: '' },
  error: false,
};

class NewInfo extends Component {
  state = { ...stateInicial };

  handleChange = (e) => {
    this.setState({
      datos: { ...this.state.datos, [e.target.name]: e.target.value },
    });
  };

  //aqui  envio al formulario a traves de un evento
  handleSubmit = (e) => {
    e.preventDefault();
    const { valorCampo, opcionCampo, trm } = this.state.datos;
    if (valorCampo === '' || opcionCampo === '' || trm === '') {
      this.setState({
        error: true,
      });
      return;
    }
    const nuevoDatos = { ...this.state.datos };
    nuevoDatos.id = uuidv4();
    this.props.crearInfo(nuevoDatos);
    this.setState({
      datos: { valorCampo: '', opcionCampo: '', trm: '' },
    });
    e.target.reset();
  };

  //realizo una funcion para limpiar los input en momento que requiere limpiar los inputs
  limpiarCampos = () => {
    this.setState({
      datos: { valorCampo: '', opcionCampo: '', trm: '' },
    });
  };
  render() {
    const { error } = this.state;
    return (
      <div className='card mt-5 py-5'>
        <div className='card-body'>
          <h2 className='card-title text-center mb-5'>Llena el formulario</h2>

          {error ? (
            <div className='alert alert-danger mt-2 mb-5 text-center'>
              Todos los campos son obligatiorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'>Valor</label>
              <div className='col-sm-8 col-lg-10'>
                <NumberFormat
                  className='form-control'
                  placeholder='Ingrese el valor'
                  value={this.state.datos.valorCampo}
                  thousandSeparator={true}
                  prefix={'$'}
                  onValueChange={(values) => {
                    const { formattedValue } = values;
                    this.setState({
                      ...this.state.datos,
                      datos: { valor: formattedValue },
                    });
                  }}
                />
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                lista de seleccion
              </label>
              <div className='col-sm-8 col-lg-10'>
                <select
                  className='form-control'
                  onChange={this.handleChange}
                  value={this.state.value}
                  name='opcion'
                >
                  <option defaultValue>seleccione</option>
                  <option value='prueba 1'>prueba 1</option>
                  <option value='prueba 2'>prueba 2</option>
                  <option value='prueba 3'>prueba 3</option>
                </select>
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'>TRM</label>
              <div className='col-sm-8 col-lg-10'>
                <NumberFormat
                  className='form-control'
                  placeholder='Ingrese la TRM'
                  value={this.state.datos.trm}
                  thousandSeparator={true}
                  prefix={'$'}
                  onValueChange={(values) => {
                    const { formattedValue } = values;
                    this.setState({
                      datos: { ...this.state.datos, trm: formattedValue },
                    });
                  }}
                />
              </div>
            </div>
            <div className='row'>
              <input
                type='submit'
                className='py-3 mt-2 btn btn-info col-md-6 '
                value='Agregar Nuevo datos'
              />
              <input
                type='button'
                onClick={this.limpiarCampos}
                className='py-3 mt-2 btn btn-warning col-md-6'
                value='Limpiar campos'
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewInfo;
