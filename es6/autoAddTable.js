/**
 * Created by lqg on 2016-11-2.
 */
import React from 'react'
import _ from 'underscore'
import $ from 'jquery'

class Td extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(this.refs.inputValue.value, this.props.order)
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
                var inputOrder = [propsItem.line, 1];
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
        // 处理不是数字的情况
        if(!$.isNumeric(targetValue)){
            targetValue = 0;
        }
        this.orderDeal(targetValue, order)
    }
    // 根据input行次进行处理
    orderDeal(targetValue,order){
        var row = order[0];
        // 处理行间变化
        this.dealRowChange(row, targetValue);

        switch (row){
            case 1:
                this.dealOneOrTwoChange(targetValue, 1);
                break;
            case 2:
                this.dealOneOrTwoChange(targetValue, 2);
                break;
            default:
                this.dealCountCal();
                this.changeState();
                break;
        }
    }
    dealRowChange(row, targetValue){
        // 设置累计值
        var items = this.props.items,
            rowOrder = row-1;

        items[rowOrder].count = parseFloat(targetValue) + items[0].baseValue;
        items[rowOrder].now = parseFloat(targetValue);
    }
    // 并自动计算合计值
    dealCountCal(){
        var items = this.props.items,
            lastItem = _.last(items);
        // 并自动计算合计值
        var sum = _.reduce(_.pluck(_.initial(items), "now"), function (memo,num) {
            return memo+num;
        }, 0);

        lastItem.now = sum;
        lastItem.count = sum + lastItem.baseValue;
    }

    // 第一行改变或第二行改变
    dealOneOrTwoChange(targetValue, row){
        let items = this.props.items;
        // 自动计算 4 = 1+2
        if(row === 1){
            items[3].now = items[1].now + parseFloat(targetValue);
            items[3].count = items[3].now + items[3].baseValue;
        }else{
            items[3].now = items[0].now + parseFloat(targetValue);
            items[3].count = items[3].now + items[3].baseValue;
        }
        this.dealCountCal();
        this.changeState();
    }

    changeState(){
        this.setState({
            items: this.props.items
        });
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