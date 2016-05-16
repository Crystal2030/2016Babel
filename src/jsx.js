/**
 * Created by crystal on 5/11/16.
 */
import React, {Component} from 'react';

class DemoComponent extends Component {
    handleClick = () => {
        console.log('handleClick');
    }
    render(){
        return <h1 onClick={this.handleClick}>Hello World</h1>;
    }
}

/*
this.props = {a:1, b:2};

<Component {...this.props} />*/
