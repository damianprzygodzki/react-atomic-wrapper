'use strict';

const React = require('react');

const resultStyle = {
    width: '50%',
    display: 'inline-block',
}

const AtomicWrapper = React.createClass({
    componentToString: function(component) {
        console.log(component)
        const source =
            "<" + component.type + ">" +
            component.props.children +
            "</" + component.type + ">";
        return source;
    },
    render: function() {
        return (
            <div>
                <h2>{this.props.wrapperTitle}</h2>
                <div style={resultStyle}>{this.props.children}</div>
                <div style={resultStyle}>
                    {this.componentToString(this.props.children)}
                </div>
            </div>
        )
    }
});

module.exports = AtomicWrapper;
