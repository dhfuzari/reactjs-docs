import React, { Component } from 'react';

class Mailbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return(
            <div>
                { 
                    this.props.unreadMessages.length > 0 &&
                    <h4>You have {this.props.unreadMessages.length} unread messages</h4>
                }
            </div>
        );
    }
}

export default Mailbox;