const React = require('react');
const ReactDOM = require('react-dom');
const AtomicWrapper = require('../AtomicWrapper');

ReactDOM.render(
    <AtomicWrapper wrapperTitle="Buttons">
        <button>Test</button>
    </AtomicWrapper>,
    document.getElementById('root')
);
