import React from 'react';
class Mystates extends React.Component{
    constructor(props) {
        super(props);
        this.state = {arr:[1,2,3],obj:{name:'tom',age:28}};
    }
    componentWillMount() {
        //在原先的数组之上追加数据
        //arr:this.state.arr.concat(4) 数组中修改数据
        this.setState({arr:[...this.state.arr,4],obj:Object.assign({},this.state.obj,{name:'yoo',age:27,gender:'man'})});
    }
    render(){
        return (
            <div>
                <h3>{this.state.arr.toString()}---{JSON.stringify(this.state.obj)}</h3>
            </div>
        );
    }
}
export default Mystates;