import React, { Component } from 'react';
import ModelSelection from './ModelSelection';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ModelSelection />
                <Footer/>
            </div>
        )
    }
}

export default Layout
