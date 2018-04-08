import React from 'react';
import './Controle.component.css'

export default class ControleContainer extends React.Component {
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
                        <h3>Financeiro</h3>
                        <button className="button" type="submit">Verificar Saldo</button>
                        <div>
                            <div className="button-saldo">
                                <h3>Qual é meu saldo no banco Santander? R$ 3.000,00</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 