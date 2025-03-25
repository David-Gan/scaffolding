'use client';

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.css';

interface LoginFormValues {
  username: string;
  password: string;
}

const backgrounds = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c', // 现代简约办公室
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2', // 高级商务会议室
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174', // 极简办公桌面
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', // 现代化办公大楼
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72'  // 商务办公环境
];

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const onFinish = async (values: LoginFormValues) => {
    try {
      // 这里添加实际的登录逻辑
      console.log('登录信息:', values);
      message.success('登录成功！');
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div 
          className={styles.backgroundImage} 
          style={{ 
            backgroundImage: `url(${backgrounds[currentBg]}?auto=format&fit=crop&w=1920&q=80)`
          }}
        />
        <div className={styles.brandContent}>
          <h1>欢迎回来</h1>
          <p>登录以继续您的旅程</p>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          <h2>登录</h2>
          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            size="large"
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名！' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="用户名"
                autoComplete="username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码！' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="密码"
                autoComplete="current-password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 