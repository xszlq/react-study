import React from 'react'
import  ReactDOM  from 'react-dom'
import Greeting from  './components/hello.js'
import FilterableProductTable from './components/table.js'
import ItemTable from './components/autoAddTable.js'
import BlurTest from './events/blur.js'

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var items = [
    {name: 1, now: 1, count: 5, edit: "0,1,1", baseValue:4,line:1},
    {name: 2, now: 2, count: 6, edit: "0,1,1", baseValue:4,line:2},
    {name: 3, now: 3, count: 7, edit: "0,1,1", baseValue:4,line:3},
    {name: 4, now: 3, count: 11, edit: "0,1,1", baseValue:8,line:4},
    {name: "合计", now: 9, count: 29, edit: "0,1,1", baseValue:20,line:5},
];

/*ReactDOM.render(
    <ItemTable items={items} />,
    document.getElementById('content')
);*/
/*
// 自动计算demo
ReactDOM.render(
    <ItemTable items={items} />,
    document.getElementById('content')
);*/

// react事件学习
ReactDOM.render(
    <BlurTest />,
    document.getElementById('content')
);


/*
ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('content')
);*/

/*
ReactDOM.render(
    <Greeting name="lq"/>,
    document.getElementById('content')
)*/

