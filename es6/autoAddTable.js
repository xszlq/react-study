/**
 * Created by lqg on 2016-11-2.
 */
import React from 'react'

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {

    }

    render(){
        return (
            <input value={this.props.value} ref="inputValue" onChange={this.handleChange}/>
        )
    }
}

class Row extends React.Component {


    judgeInput(order){
        if(parseInt(this.props.item.edit.split(",")[order])){
            return true;
        }
    }

    render() {
        var
            order = 0;



        return (
            <tr>
                <td>{this.judgeInput(order++)? <Input value={this.props.item.name}/> : this.props.item.name}</td>
                <td>{this.judgeInput(order++)? <Input value={this.props.item.now}/> : this.props.item.now}</td>
                <td>{this.judgeInput(order++)? <Input value={this.props.item.count}/> : this.props.item.count}</td>
            </tr>
        )
    }
}

export default class CountTable extends React.Component{
    constructor(props){
        super(props);
        //this.state = this.props.items;
    }

    render(){
        var items = this.props.items,
            rows = [];

        items.forEach((item)=>{
            rows.push(<Row item={item}/>)
        });

        return (
            <div>
                <table className="table">
                    <thead>
                    <th>item</th>
                    <th>本期</th>
                    <th>累计</th>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}