//多种表单控件的双向数据绑定
import React,{Component} from 'react';
class MyTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            genders:[{name:'男',value:'man'},{name:'女',value:'woman'}],
            addresses:[{name:'上海',value:'Shanghai'},{name:'北京',value:'Beijin'}],
            form:{username:'',password:'',age:'',gender:'',address:'',eva:''},
            msg:'个人简历'
        };
    }
    //事件处理程序
    inputChange = (attr,e)=>{
        this.setState({
            form:{...this.state.form,[attr]:e.target.value}
        });
    }
    btnSubmit = ()=>{
        let obj = {...this.state.form};
        console.log(obj);
    }
    render(){
        const {form} = this.state;
        return (
            <div style={{padding:20}}>
                <h1>{this.state.msg}</h1>
                <form>
                    用户名:
                    <input value={form.username} type='text' onChange={this.inputChange.bind(this,'username')}/>
                    <br />
                    密码:
                    <input value={form.password} type='password' onChange={this.inputChange.bind(this,'password')}/>
                    <br />
                    年龄:
                    <input value={form.age} type='text' onChange={this.inputChange.bind(this,'age')}/>
                    <br />
                    性别:
                    {
                        this.state.genders.map((item,index)=>{
                            return (
                                <label key={index}>
                                    <input type='radio' value={item.value} checked={form.gender===item.value?true:false} onChange={this.inputChange.bind(this,'gender')}/>{item.name}
                                </label>
                            );
                        })
                    }
                    <br />
                    地址:
                    <select value={form.address} onChange={this.inputChange.bind(this,'address')}>
                        <option value=''>请选择</option>
                        {
                            this.state.addresses.map((item,index)=>{
                                return <option key={index} value={item.valeu}>{item.name}</option>
                            })
                        }
                    </select>
                    <br />
                    自我评价:
                    <br />
                    <textarea value={form.eva} cols="30" rows="10" onChange={this.inputChange.bind(this,'eva')}></textarea>
                    <br />
                </form>
                <button onClick={this.btnSubmit} style={{width:100}}>提交</button>
            </div>
        );
    }
}
export default MyTest;