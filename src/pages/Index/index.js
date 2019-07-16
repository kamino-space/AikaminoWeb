import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Carousel} from 'antd';
import './style.css';

class IndexPage extends Component {
    render() {
        return (
            <MainLayout>
                <Carousel>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </MainLayout>
        );
    }
}

export default IndexPage;