//表单的双向数据绑定
import React,{Component} from 'react';
class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue:'inputValue'};
    }
    changeHandle = (e)=>{
        this.setState({
            inputValue:e.target.value
        });
    }
    render(){
        return (
            <div>
                <form>
                    用户名:
                    <input value={this.state.inputValue} type="text" onChange={this.changeHandle}/> 
                </form>
            </div>
        );
    }
}
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
export default MyForm;