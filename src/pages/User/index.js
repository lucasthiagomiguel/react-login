import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/users';

class User extends Component {

    state = {
        pageAtual: 1,
        //limit: 40,
    }

    componentDidMount() {
        this.getUsuarios();
    }

    componentDidUpdate(nextProps) {
        if (!this.props.usuario && nextProps.usuario) this.getUsuarios();
    }

    getUsuarios() {
        const { pageAtual } = this.state;
        this.props.getUsers(pageAtual);
        const { usuarios } = this.props;
        if (usuarios === "undefined") return null;
    }

    changePageAtual = (pageAtual) => {
        this.setState({pageAtual}, () => {
            this.getUsuarios();
        })
    }

    render() {
        var usuarios = [];
        if (this.props.usuarios) usuarios = this.props.usuarios.message.results
        

        
        
        return (
            <>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h2 className="display-4 titulo">Listar Usuários</h2>
                    </div>
                </div><hr />
                <div className="row mb-3">
                    {usuarios.map(starWars => (
                    <div className="col-lg-3 col-sm-6 mb-3" key={starWars.height + 1}>
                        <div className="card bg-success text-white">
                            <div className="card-body">
                                <i className="fas fa-users fa-3x"></i>
                                <h6 className="card-title">{starWars.name}</h6>
                                <h2 className="lead">mass:{starWars.mass}</h2>
                                <h2 className="lead">gender:{starWars.gender}</h2>
                                <h2 className="lead">hair_color:{starWars.hair_color}</h2>
                                <h2 className="lead">height:{starWars.height}</h2>
                                <h2 className="lead">birth_year:{starWars.birth_year}</h2>
                                <h2 className="lead">skin_color:{starWars.skin_color}</h2>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <nav aria-label="paginacao">
                    <ul className="pagination pagination-sm justify-content-center">
                        
                        <li>
                            <span className="page-link" onClick={() => this.changePageAtual(1)}>1</span>
                        </li>

                        <li className="page-item"><span className="page-link" onClick={() => this.changePageAtual(2) }>2</span></li> 

                           <li className="page-item"><span className="page-link" onClick={() => this.changePageAtual(3)}>3</span></li> 

                        <li >
                            <span className="page-link" onClick={() => this.changePageAtual(4)}>4</span>
                        </li>
                        
                        <li >
                            <span className="page-link" onClick={() => this.changePageAtual(5)}>5</span>
                        </li>
                    </ul>
                </nav>

            </>
        )
    }
}

const mapStateToProps = state => ({
    usuarios: state.user.users,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(User);