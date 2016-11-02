import React from 'react'
import  ReactDOM  from 'react-dom'
import Greeting from  './hello.js'
import FilterableProductTable from './table.js'
import ItemTable from './autoAddTable.js'

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var items = [
    {name: 1, now: 12, count: 24, edit: "0,1,1"},
    {name: 2, now: 5, count: 25, edit: "0,1,1"},
    {name: 3, now: 6, count: 26, edit: "0,1,1"},
    {name: 4, now: 8, count: 28, edit: "0,1,1"},
];


ReactDOM.render(
    <ItemTable items={items} />,
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

