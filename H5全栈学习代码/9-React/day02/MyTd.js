import React from 'react';
class MyTd extends React.Component{
    render(){
        const {stu} = this.props;
        return (
            <React.Fragment>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.gender}</td>
            </React.Fragment>
        );
    }
}
export default MyTd;