/**
 * Created by LiuQiang on 2016/11/6.
 */
import React from 'react'

export default class BlurTest extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        console.log(this.refs.inputValue.value);
    }

    render(){
        return (
            <div>
                <input value={this.props.value} ref="inputValue" onBlur={this.handleChange}/>
            </div>
        )
    }
}