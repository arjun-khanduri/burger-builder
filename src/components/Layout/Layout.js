import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

export default Layout;