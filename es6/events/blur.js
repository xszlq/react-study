/**
 * Created by LiuQiang on 2016/11/6.
 */
import React from 'react'

export default class BlurTest extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.refs.inputValue.focus();
    }

    handleClick(){
        console.log("click");
    }

    render(){
        return (
            <div>
                <input defaultValue="23" ref="inputValue" onClick={this.handleClick.bind(this)} onBlur={this.handleChange}/>
            </div>
        )
    }
}