import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';

class App extends React.Component {
    render(){
        return (
            <div className="app">
                <header className="appHeader">
                    <h1>React-Parcel boilerplate</h1>
                </header>
                <div className="content">
                    <h3>Modify <code>src/index.js</code> and save</h3>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));