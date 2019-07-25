import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    //Ref para leer valores de los campos

    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef(); 


    //handleCotizador funcion utilizada para manejar el formulario de el cotizador
    handleCotizador = (e) => {
        e.preventDefault();

        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo'
        
        const infoAuto = {
            marca : this.marcaRef.current.value,
            year : this.yearRef.current.value,
            plan : plan
        }

        this.props.cotizarSeguro(infoAuto)

        // e.currentTarget.reset(); 

    }
    render() { 
        return ( 
            <>
                <div className="row justify-content-md-center">
                    <div className="col-md-12">
                        <div className="card border-light mb-3">
                            <div className="card-header">Cotizador de Seguros de Autos</div>
                            <div className="card-body">
                                {/* <h4 className="card-title">Light card title</h4> */}
                                <form onSubmit={this.handleCotizador}>
                                    <div className="form-group">
                                        <label for="marca">Marca</label>
                                        <select ref={this.marcaRef} className="form-control" id="marca" name="marca">
                                            <option value="americano">Americano</option>
                                            <option value="europeo">Europeo</option>
                                            <option value="asiatico">Asiatico</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                    <label for="year">Year</label>
                                    <select ref={this.yearRef} name="year" className="form-control" id="year">
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                    </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Plan:</label>
                                        <div className="custom-control custom-radio">
                                            <input ref={this.planBasicoRef} type="radio" value="basico" id="customRadio1" name="plan" className="custom-control-input" checked/>
                                            <label className="custom-control-label" for="customRadio1">Básico</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input ref={this.planCompletoRef} type="radio" value="completo" id="customRadio2" name="plan" className="custom-control-input"/>
                                            <label className="custom-control-label" for="customRadio2">Completo</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary">Cotizar</button>

                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </>
         );
    }
}
 
export default Form;