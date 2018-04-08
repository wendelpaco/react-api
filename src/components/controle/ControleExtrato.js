import React from 'react';
import './Controle.component.css'
import Table from './Table';

export default class ControleExtrato extends React.Component {
    constructor() {
        super()
        this.state = {

        };
    }
    render() {
        return (
            <div className="container-menu">
                <div className="menu">
                    <div className="conteudo">
                        <h3>Extrato</h3>
                        {/*<div className="button-saldo">
                            <button className="button" type="submit">Verificar</button>
                        </div>*/}
                        <div className="table-simple">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 