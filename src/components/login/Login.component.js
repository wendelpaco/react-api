import React from 'react';
import image from '../../image/react-hexagon.png';
import './Login.component.css'
import RaisedButtonComponent from './Raised.Button';
import { getUser } from '../services/Service';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _email: '',
            _senha: '',
            messeger: ''
        }
    }
    handleSubmit = async (e) => {
        const { _email, _senha } = this.state
        e.preventDefault()
        const data = JSON.stringify({ 'email': this.state._email, 'password': this.state._senha })
        try {
            if (_email !== '' && _senha !== '') {
                getUser(data).then((res) => {
                    if (!res.error) {
                        localStorage.setItem("token", res.return.token);
                        localStorage.setItem("usuario", this.state._email);
                        if (localStorage.getItem("token")) {
                            this.props.history.push('/home')
                        } else {
                            this.props.history.push('/')
                        }
                    } else {
                        this.setState({
                            messeger: res.error.messeger
                        })
                    }
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { history } = this.props
        return (
            <div className="wrapper-login-v1">
                <div className="card-login">
                    <form className="form-login" onSubmit={(e) => this.handleSubmit(e)}>
                        <span className="avatar-login">
                            <img src={image} alt="avatar" />
                        </span>
                        <div className="input-text-login">
                            <input
                                type="email"
                                className="input-text"
                                placeholder="Digite seu usuário"
                                name="_email"
                                onChange={(e) => this.onChange(e)}
                                value={this.state._email}
                            />
                        </div>
                        <div className="input-password-login">
                            <input
                                type="password"
                                className="input-text"
                                placeholder="Digite sua senha"
                                name="_senha"
                                onChange={(e) => this.onChange(e)}
                                value={this.state._senha}
                            />
                        </div>
                        <div className="button-login">
                            <RaisedButtonComponent
                                history={history}
                                type="submit"
                            />
                        </div>
                        <div className="messege-error">
                            {
                                (this.state.messeger.length > 0) && <p>{this.state.messeger}</p>
                            }
                        </div>
                        <div className="google">
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}