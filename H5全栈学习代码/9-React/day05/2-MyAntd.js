import React, { Component } from 'react';
import myAjax from '../myAjax.js';
import $ from 'jquery';
import {Button,Tree,Table,Tag} from 'antd'; 
const { TreeNode } = Tree;
class MyAntd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData:[]
        }
    }
    //Promise封装ajax
    componentDidMount(){
        const t = this;
        myAjax('/manager/category/findAllCategory','GET',null).then((res)=>{
            t.setState({
                tableData:res.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    }
    
    //jquery中的ajax
    /* componentDidMount() {
        const t = this;
        $.ajax({
            url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
            method:'GET',
            data:{},
            success(res){
                console.log(res);
                //设置state中的数据
                t.setState({
                    tableData:res.data
                });
            },
            error(error) {
                console.log(error);
            }
        });
    } */
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };
    render() {
        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
                render: text => <Tag color="volcano">{text}</Tag>
            },
            {
                title: '描述',
                dataIndex: 'comment',
            },
            {
                title: '父栏目',
                dataIndex: 'parent.name',
            },
            {
                title: '操作',
                dataIndex: '',
                render:()=>{
                    return (
                        <React.Fragment>
                            <Tag color="yellow">修改</Tag>
                            <Tag color="yellow">删除</Tag>
                        </React.Fragment>
                    );
                },
            }
        ];
            

            // rowSelection object indicates the need for row selection
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
                <Button type="primary">Primary</Button>
                <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0">
                        <TreeNode title="leaf" key="0-0-0-0" />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                    </TreeNode>
                </Tree>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tableData} />
            </div>
        );
    }
}

export default MyAntd;
