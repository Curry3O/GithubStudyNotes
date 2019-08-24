import React,{Component} from 'react';
class MyTests extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ca:2,
        };
    }
    componentDidMount() {
        console.log(this.props.changeSelf);
    }
    render(){
        return (
            <div>
                <h3>{this.state.ca}</h3>
                <h1>{this.props.pa}</h1>
                <button onClick={this.props.changeSelf}>点击CP</button>
            </div>
        );
    }
}
export default MyTests;