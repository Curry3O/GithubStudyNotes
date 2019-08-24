import React,{Component} from 'react';
import './TestSass.scss';
class TestSass extends Component{
    render(){
        return (
            <div className='TestSass'>
                <span>hello</span>
                <span className="two">world</span>
                <p className="one">hi</p>
            </div>
        );
    }
}
export default TestSass;