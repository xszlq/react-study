/**
 * Created by lqg on 2016-11-1.
 */
import React from 'react'
export default class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}