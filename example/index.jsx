const React = require('react');
const ReactDOM = require('react-dom');
const AtomicWrapper = require('../AtomicWrapper');

const Dropdown = React.createClass({
    getColor: function(type){
        switch(type){
            case "primary":
                return 'blue';
                break;
            case "secondary":
                return 'red';
                break;
            case "default":
                return 'cyan';
                break;
        }
    },
    render: function() {
        const {defaultValue, options, type} = this.props;
        const style = {
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: this.getColor(type)
        }
        return (
            <select style={style}>
                <option value="0">{defaultValue}</option>
                {options.map((item,index) => <option key={index}>{item}</option>)}
            </select>
        )
    }
});

const Button = React.createClass({
    render: function() {
        const {value} = this.props;
        return (
            <button>{value}</button>
        )
    }
});

ReactDOM.render(
    <div>
        <h1>UI elements</h1>
        <AtomicWrapper wrapperTitle="Dropdowns">
            <Dropdown
                options={['Option1','Option2','Option3']}
                defaultValue="Choose option"
                onFocus={() => {}}
                onChange={() => {}}
                type="primary"
            />
            <Dropdown
                options={['Option1','Option2','Option3']}
                defaultValue="Choose option"
                onFocus={() => {}}
                onChange={() => {}}
                type="secondary"
            />
            <Dropdown
                options={['Option1','Option2','Option3']}
                defaultValue="Choose option"
                onFocus={() => {}}
                onChange={() => {}}
                type="default"
            />
        </AtomicWrapper>
        <AtomicWrapper wrapperTitle="Buttons">
            <Button
                value="Click me"
                onClick={() => {}}
                type="warning"
            />
        </AtomicWrapper>
    </div>,
    document.getElementById('root')
);
