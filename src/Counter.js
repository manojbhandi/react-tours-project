import { Component } from "react"

export default class Counter extends Component{
    constructor(props){
        console.log('constructor')
        super(props);

        this.state = {
            counter : 0,
        }
        this.increament = () =>{this.setState({counter : this.state.counter+1 })};
        this.decreament = () =>{this.setState({counter: this.state.counter-1})};
    }
    componentDidMount(){
        console.log('Did mount');
        console.log('---------');
    }
    render(){
        console.log('render')
        return  <>
            <div className="container">
                
                Counter : {this.state.counter}
                <button onClick={this.increament}>Increase</button>
                <button onClick={this.decreament}>Decrease</button>
            </div>
        </>
    }
    componentDidUpdate(){
        console.log('Did Update');
        console.log('---------');
    }
    componentWillUnmount(){
        console.log('Will Unmount');
        console.log('---------');
    }
    
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.ignoreProp && 
            this.props.ignoreProp != nextProps.ignoreProp){
            return false;
        }
        return true;
    }
}