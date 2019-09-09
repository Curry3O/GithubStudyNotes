import React, { Component } from 'react';
import {connect} from 'dva';
import { Table, Button } from 'antd';
export class Article extends Component {
    componentDidMount() {
        //发送异步获取数据
        // console.log(this.props.dispatch);
        this.props.dispatch({
            type:'article/getArticleData',
            payload:{page:0,pageSize:10}
        })
    }

    //删除
    deleteById = (id) =>{
        this.props.dispatch({
            type:'article/deleteById',
            payload:{id}
        });
    }

    render() {
        const {articleData} = this.props.article;
        const columns = [
            {
                title: '标题',
                dataIndex: 'title',
            },
            {
                title: '展示方法',
                dataIndex: 'liststyle',
            },
            {
                title: '操作',
                dataIndex: '',
                render:(text,record)=>{
                    return (
                        <div>
                            <Button type="danger" onClick={this.deleteById.bind(this,record.id)}>删除</Button>
                        </div>
                    );
                }
            },
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={articleData} />
            </div>
        );
    }
}

export default connect(state=>state)(Article);
