import React,{Component} from 'react';
class MyForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hobby:[{
                name:'游泳',
                value:'swimming'
            },{
                name:'跳舞',
                value:'dancing'
            },{
                name:'唱歌',
                value:'singing'
            }],
            form:{
            //用户选中复选框的数据
            hobbies:[]
            }
        }
    }
    checkboxChange = (e)=>{
        //如果数组中没有它的值就添加，如果有就删除
        let value = e.target.value;
        let hobbies = [...this.state.form.hobbies];
        if(hobbies.includes(value)){
            //移除 找到当前元素索引然后通过索引移除
            /* let index = hobbies.indexOf(value);
            hobbies.splice(index,1); */
            hobbies.filter((item)=>{
                return item !=  value;
            });
        }else{
            //添加
            hobbies = hobbies.concat(value);
        }
        this.setState({
            form:{...this.state.form,hobbies:hobbies}
        },()=>{
            console.log(this.state.form.hobbies);
        })
    }
    
    render(){
        const {form} = this.state;
        return (
            <div className='MyForm'>
                <form>
                    爱好:
                    {
                        this.state.hobby.map((item, index) =>{
                            return (
                                <label htmlFor={item.value} key={index}>
                                    <input id={item.value} type='checkbox' value={item.value} checked={form.hobbies.includes(item.value)} onChange={this.checkboxChange}/>{item.name}
                                </label>
                            );
                        })
                    }
                </form>
            </div>
        );
    }
}
export default MyForm;