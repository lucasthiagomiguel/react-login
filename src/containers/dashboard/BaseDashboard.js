import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {connect} from 'react-redux';
import * as actions from '../../store/actions';

import '../../styles/dashboard/index.css'

class BaseDashboard extends React.Component {
    render() {
        return (
            <>
                <Header handleLogout={this.props.handleLogout} dadosUsuario={this.props} />
                <div className="d-flex">
                    
                    <div className="content p-1">
                        <div className="list-group-item border-0">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }
}

export default connect(null, actions)(BaseDashboard);