import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Erro</h1>
                        <h1 className="display-3">404</h1>
                        <h2>Pagina não encontrada</h2>
                        <h3>O URL
                            <span className="text-danger">
                              {this.props.location.pathname}
                            </span>{""}
                            não existe</h3>
                    </div>
                </div>
            </div>
        )
    }
}
