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
        function NumberList(props) {
            const numbers = props.numbers;
            const listItems = numbers.map((number) =>
                <li>{number}</li>
            );
            return (
                <ul>{listItems}</ul>
            );
        }
        const numbers = [1, 2, 3, 4, 5];
        const inputValue = 23;

        function inputTest(props){
            return (
                <input  value={props.value}/>
            )
        }

        return (
            <div>
                <input defaultValue="23" ref="inputValue" onClick={this.handleClick.bind(this)} onBlur={this.handleChange}/>
                <NumberList numbers={numbers}/>
                <inputTest value={inputValue}/>
            </div>
        )
    }
}