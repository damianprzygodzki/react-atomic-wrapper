'use strict';

const React = require('react');
const reactElementToJSXString = require('react-element-to-jsx-string').default;

const AtomicWrapper = React.createClass({
    render: function() {
        return (
            <div className="aw-container">
                <div><h2>{this.props.wrapperTitle}</h2></div>
                <div className="aw-results">{this.props.children}</div>
                <div className="aw-code">
                    <pre>
                    {reactElementToJSXString(this.props.children)}
                    </pre>
                </div>
            </div>
        )
    }
});

module.exports = AtomicWrapper;
