import React, { Component } from 'react';
import Resultado from './Resultado';

class Resumen extends Component {
    state = {  }

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.data;    

        if(!marca || !year || !plan) return null;

        return(
        <div className="row justify-content-md-center">
            <div className="col col-md-12">
                <div className="card border-light mb-3">
                    <div className="card-header">Resumen</div>
                    <div className="card-body">

                    <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Marca: {marca}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Plan: {plan}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Year: {year}
                    </li>
                    </ul>

                    </div>
                </div>
            </div>
        </div>
        )
    }

    render() { 
        return ( 
        <>
            {this.mostrarResumen()}
            {
                this.props.resultado &&

                <Resultado 
                resultado={this.props.resultado}
                />
            }
        </> 
        );
    }
}
 
export default Resumen;