import React from 'react';
class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[30,11,23],
            obj:{name:'curry',age:31}
        };
    }
    componentWillMount() {
        // alert(1);
    }
    componentDidMount() {
        // alert(2);
        this.setState({
            a:1,arr:this.state.arr.concat(35),obj:Object.assign({},this.state.obj,{name:'tom',age:28})
        });
    }
    shouldComponentUpdate() {
        // alert(3);
        return true;
    }
    componentWillUpdate(){
        // alert(4);
    }
    componentDidUpdate() {
        //  alert(5);
    }
    componentWillUnmount() {
        
    }
    handle = () => {
        this.setState({
            a:100
        });
    }
    handle1(m,n,e){
        this.setState({
            a:1000
        });
        console.log(m, n, e);
    }
    handle2(m, n, e) {
        this.setState({
            a: 10000
        });
        console.log(m, n, e);
    }
    handle3 = (m, n, e) => {
       console.log(m, n, e);
    }
    render(){
        let b = 2;
        return (
            <div>
                <h1>{this.state.arr.toString()}--{JSON.stringify(this.state.obj)}</h1>
                <h1>{b}</h1>
                <h1>{this.props.c}</h1>
                <button onClick={this.handle}>点击{this.state.a}</button>
                <button onClick={this.handle1.bind(this,88,99)}>点击{this.state.a}</button>
                <button onClick={(e)=>{this.handle2(88,99,e)}}>点击{this.state.a}</button>
                <button onClick={(e)=>{this.handle3(88,99,e)}}>点击{this.state.a}</button>
            </div>
        );
    }
}
export default Test;