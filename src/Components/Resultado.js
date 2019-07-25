import React, { Component } from 'react';

class Resultado extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="row justify-content-md-center">
                <div className="col col-md-12">
                    <div className="alert alert-dismissible alert-secondary text-center">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <h3><strong>$ {this.props.resultado} </strong></h3>
                    </div>
                </div>
            </div>            
            </>
         );
    }
}
 
export default Resultado;