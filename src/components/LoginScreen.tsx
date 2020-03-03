import React, { useState } from 'react'
import { Card, Input, Icon, Button } from 'antd'

const Login = (props: any) => {
  return (
    <div style={{ backgroundColor: 'white', marginLeft: '500px' }}>
      <div className="logo-login"></div>
      <div
        style={{
          padding: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
        <div>
          <Card
            bordered={false}
            style={{
              width: 300,
              backgroundColor: '#3d00bc',
              borderRadius: 20,
            }}>
            <div>
              <Input
                placeholder="input username"
                name={'username'}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />
            </div>
            <br />
            <br />
            <div>
              <Input.Password
                name={'password'}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="input password"
              />
            </div>

            <br />
            <div>
              <Button type="link" style={{ color: 'white' }}>
                Forgot your password?
              </Button>
            </div>

            <br />

            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              {/* <Button
                style={{ color: "white" }}
                endIcon={
                  <Icon
                    type="login"
                    style={{ color: "white", marginLeft: 10, fontSize: 20 }}
                  />
                }
              >
                Login
              </Button> */}

              <Button
                onClick={() =>
                  props.setState({ ...props.state, path: '/Dash' })
                }>
                Login
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
