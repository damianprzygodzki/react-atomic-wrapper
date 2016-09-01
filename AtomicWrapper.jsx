'use strict';

const React = require('react');
const reactElementToJSXString = require('react-element-to-jsx-string').default;

const AtomicWrapper = React.createClass({
    parseComponents: function(components) {
        if(components.constructor !== Array){
            return [components];
        }else{
            return components;
        }
    },
    render: function() {
        const {
            children,
            wrapperTitle
        } = this.props;

        const awContainerStyle = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
        }

        const awChildrenStyle = {
            flex: "1 50%"
        }

        if(!children){
            return false;
        }

        return (
            <div>
                <div>
                    <h2>{wrapperTitle}</h2>
                </div>
                {this.parseComponents(children).map((item, index) => {
                    return (
                        <div className="aw-container" key={index} style={awContainerStyle}>
                            <div className="aw-results" style={awChildrenStyle}>{item}</div>
                            <div className="aw-code" style={awChildrenStyle}>
                                <pre>
                                    {reactElementToJSXString(item)}
                                </pre>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
});

module.exports = AtomicWrapper;
