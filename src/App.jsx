import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  // 使用 axios 发送请求
  getStudentData = () => {
    axios
      .get('http://localhost:3000/api1/students')
      .then(res => {
        const { data } = res
        console.log(data)
      })
      .catch(e => {
        console.log(e)
      })
  }
  getCarData = () => {
    axios
      .get('http://localhost:3000/api2/cars')
      .then(res => {
        const { data } = res
        console.log(data)
      })
      .catch(e => {
        console.log(e)
      })
  }
  // 这么写跨域了 不同端口号
  // 发能发 但是数据回不来
  // 脚手架项目中一般都通过代理去解决
  // client   serve  回去的时候被浏览器拦截了
  // 如果有的话就不转发，如果

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }
}
