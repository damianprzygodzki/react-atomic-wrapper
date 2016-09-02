const React = require('react');
const ReactDOM = require('react-dom');
const AtomicWrapper = require('../AtomicWrapper');

const Dropdown = React.createClass({
    getColor: function(type){
        switch(type){
            case "primary":
                return '#c36987';
                break;
            case "secondary":
                return '#69b6c3';
                break;
            case "default":
                return '#c39369';
                break;
        }
    },
    render: function() {
        const {defaultValue, options, type} = this.props;
        const style = {
            borderWidth: '5px',
            fontFamily: 'serif',
            color: '#fff',
            minWidth: '200px',
            fontSize: '16px',
            borderStyle: 'solid',
            borderColor: this.getColor(type),
            backgroundColor: this.getColor(type)
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
        const {value, type} = this.props;
        const style = {
            borderWidth: '5px',
            fontFamily: 'serif',
            color: '#fff',
            minWidth: '200px',
            fontSize: '16px',
            borderStyle: 'solid',
            borderColor: '#dc6a69',
            backgroundColor: '#dc6a69',
            borderRadius: '5px'
        }
        return (
            <button style={style}>{value}</button>
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
