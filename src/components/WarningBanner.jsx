import React, {Component} from 'react';

class WarningBanner extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate() {
        // console.log('componentWillUpdate', this.props);
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate', this.props);
    }

    render() {
        if(!this.props.warn) {
            return null;
        }
        return(
            <h2 className="warning">Warning!</h2>
        );
    }

}

export default WarningBanner;