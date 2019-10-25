import React from 'react'
import './index.less'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
let navDate = [
    {name:"首页",path:'/home'},
    {name:"设置",path:'/setting'},
    {name:"用户管理",
    path:'/user',
    children:[
        {name:"用户列表",path:'user/list'},
        {name:"用户删除",path:'user/del'}
    ]}
]
class Admin extends React.Component{
   renderItem=(date)=>{
        return date.map((item,index)=>{
            if(item.children){
                return <SubMenu title={item.name}>
                    {this.renderItem(item.children)}
                </SubMenu>
            }else{
                return <Menu.Item>{item.name}</Menu.Item>
            }
        })
   }
    render(){
        return(
            <div className='admin'>
                <div className='admin-nav'>
                    <Menu style={{ width: 256 }} mode="vertical">
                        {this.renderItem(navDate)}
                    </Menu>
                </div>
                <div className='admin-right'>
                    <div>上</div>
                    <div>中</div>
                    <div>下</div>
                </div>
            </div>
        )
    }
}
export default Admin