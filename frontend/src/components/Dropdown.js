import React, { Component } from 'react'
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class DropDown extends Component {

    constructor(){
        super();
        this.state = {
            model : ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(event){
        await this.setState({ model : event.target.value });
        this.props.handleClick(this.state.model);
    }

    render() {

        const submenu = (
            <Menu>
                <Menu.Item>
                    <button value="linear-reg" onClick={this.handleClick}>
                        Linear Regression
                    </button>
                </Menu.Item>
                <Menu.Item>
                    <button value="poly-reg" onClick={this.handleClick}>
                         Polynomial Regression
                    </button>
                    
                </Menu.Item>
            </Menu>
        )
        const menu = (
            <Menu>
                <Menu.Item >
                    <Dropdown overlay={submenu} placement="bottomLeft">
                        <Button icon={<DownOutlined/>}>
                            Regression
                        </Button>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <button value="classification" onClick={this.handleClick}>
                        Classification
                    </button>
                </Menu.Item>
            </Menu>
        );

        // console.log(this.state.model);
        return (
            <div>
                <Dropdown overlay={menu} placement="bottomLeft" >
                    <Button icon={<DownOutlined/>}>
                            <strong>Select Model</strong>
                    </Button>
                </Dropdown>                
            </div>
        )
    }
}

export default DropDown;
