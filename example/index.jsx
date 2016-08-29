const React = require('react');
const ReactDOM = require('react-dom');
const AtomicWrapper = require('../AtomicWrapper');

ReactDOM.render(
    <AtomicWrapper wrapperTitle="Buttons">
        <div asd="asd" asd1={123}>
            <button >Test</button>
        </div>
    </AtomicWrapper>,
    document.getElementById('root')
);
