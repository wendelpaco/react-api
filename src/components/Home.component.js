import React from 'react';
import ControleContainer from './controle/Controle.component'
import ControleExtrato from './controle/ControleExtrato'



const HomeComponent = (props) => {


    return (
        <div className="container-home">
            <ControleContainer
            />
            <ControleExtrato
            />
        </div>
    )
}
export default HomeComponent