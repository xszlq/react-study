/**
 * Created by lqg on 2016-11-2.
 */
import React from 'react'
import _ from 'underscore'

class Td extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log(this.props.order);
        this.props.onUserInput(this.refs.inputValue, this.props.order)
    }

    render(){
        return (
            <td>
                <input value={this.props.value} ref="inputValue" onChange={this.handleChange}/>
            </td>
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
            propsItem = this.props.item,
            item = _.pick(propsItem, "name", "now", "count"),
            tds = [],
            editables = propsItem.edit.split(","),
            self = this,
            order = 0;

        _.each(item, function(value, key){
            if(parseInt(editables[order++])){
                var inputOrder = [propsItem.line, order];
                tds.push(<Td onUserInput={self.props.onUserInput} value={value} order={inputOrder}/>);
            }else{
                tds.push(<td>{value}</td>);
            }
        });

        return (
            <tr>
                {tds}
            </tr>
        )
    }
}

export default class CountTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
        this.items = this.props.items;
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(targetValue, order){
        console.log(targetValue, order);
    }

    render(){
        var items = this.items,
            rows = [];

        items.forEach((item)=>{
            rows.push(<Row item={item} onUserInput={this.handleUserInput}/>)
        });

        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>item</th>
                        <th>本期</th>
                        <th>累计</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
                <p>说明：4=1+2，累计值自动计算</p>
            </div>
        )
    }
}