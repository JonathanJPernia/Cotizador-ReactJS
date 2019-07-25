import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';

class App extends Component {
  state = { 
    resultado:'',
    data:[]
   }

  cotizarSeguro = (data) => {
    const {marca, plan, year} = data;

    //Base de seguro = 2000

    let resultado = 2000;

    //obtener la diferencia de anhos
    const diferencia = obtenerDiferenciaAnio(year)

    //por cada anho restar el 3% del valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    
    //Americano 15% asiatico 5% Europeo 30% de aumento al valor actual
    resultado = calcularMarca(marca) * resultado;

    //plan basico +20% completo +50%

    let incrementoPlan = obtenerPlan(plan);

    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    const datosAutos = {
      marca,
      plan,
      year
    }

    this.setState({
      resultado:resultado,
      data:datosAutos,
    })

  }
  render() { 
    return ( 
      <div className="App">
        <Header/>
        <br/>
        <div className="row justify-content-md-center">
          <div className="col col-md-10">
            <div className="row">
              <div className="col col-md-6">
              <Form 
                cotizarSeguro={this.cotizarSeguro}
              />
              </div>
              <div className="col col-md-6">
              <Resumen
              data={this.state.data}
              resultado={this.state.resultado}
              />
              </div>
            </div>
          </div>
         </div>
        
        
      </div>
     );
  }
}

export default App;
