import React, {Component} from 'react';
import {Layout} from 'antd';
import HeaderLayout from '../HeaderLayout';
import FooterLayout from '../FooterLayout';

import './style.css';

const {Header, Footer, Content} = Layout;

class MainLayout extends Component {
    render() {
        return (
            <div className="container">
                <Layout>
                    <Header><HeaderLayout/></Header>
                    <Content>{this.props.children}</Content>
                    <Footer><FooterLayout/></Footer>
                </Layout>
            </div>
        );
    }
}


export default MainLayout;