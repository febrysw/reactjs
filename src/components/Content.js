import React from 'react';

class Content extends React.Component {
    render(){
        return (
            <>
                Ini {this.props.text}
                <br/>
                <br/>
            </>
        );
    }
}

export default Content;