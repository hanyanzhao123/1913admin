import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Card,message} from 'antd';
class Login extends React.Component {
    submit=()=>{
        // let result = this.props.form.getFieldsValue()
        // console.log(result)
        this.props.form.validateFields((err,data)=>{
            console.log(err,data)
            if(err){
                message.error('输入信息有误请重新登陆')
            }else{
                message.success('登陆成功',1,()=>{
                    this.props.history.push("/admin")
                })
            }
        })
    } 
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Card style={{width:"400px",position:"fixed",top:"30vh",right:"50px"}}>
                <div className="login-form">
                    <Form.Item>
                        {getFieldDecorator('us',{
                            rules: [{ required: true, message: 'Please input your Password!' },
                                    {min:6,message:'用户名6-9位'},
                                    {max:9,message:'用户名6-9位'}
                        ]
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                           />
                        )} 
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('ps',{
                         rules: [{ required: true, message: 'Please input your Password!' },
                         {min:6,message:'密码6-12位'},
                         {max:12,message:'密码6-12位'}
             ]
             
                    })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    )}   
                    </Form.Item>
                    <Form.Item>     
                        <Button type="primary" htmlType="submit" onClick={this.submit} className="login-form-button">
                            登陆
                        </Button>   
                    </Form.Item>
                </div>
            </Card>
        )
    }
}
export default Form.create()(Login)  