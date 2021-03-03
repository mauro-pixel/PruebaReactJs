import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import axios from 'axios';
import NewData from './components/NewInfo';
import DataLists from './components/Datalist';

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    const datosLocal = localStorage.getItem('data');
    console.log(datosLocal);
    if (datosLocal) {
      this.setState({
        data: JSON.parse(datosLocal),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state.data));
  }

  crearInfo = (datosForm) => {
    let data = [...this.state.data, datosForm];
    console.log(data);
    axios.post(`https://httpbin.org/post`, { data }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.setState({ data: data });
        setTimeout(() => {}, 3000);
      }
    });
  };

  render() {
    return (
      <div className='container'>
        <Header title='Prueba de TRM' />

        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NewData crearInfo={this.crearInfo} />
          </div>

          <div className='mt-5 col-md-10 mx-auto'>
            <DataLists datos={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
