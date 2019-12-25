import React from 'react';
import ReactDOM from 'react-dom';

function connect(mapStateToProps, mapDispatchToProps) {
    return function (Target) {
        return class extends React.Component {
            render() {
                console.log('WrappedTarget render');
                return <Target />
            }
        }
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({})
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    render() {
        return <div>App</div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'));