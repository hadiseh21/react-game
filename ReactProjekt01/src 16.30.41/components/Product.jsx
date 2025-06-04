import React, { Component } from 'react';
import ProductContext from '../context/products';
class Product extends Component {
  static contextType = ProductContext;
  render() {
    const list = ["one", "two", "three"];
    const mappList = list.map((item, index) => <li key={index}>{item}</li>);

    return (
      <div>
        <span className='m-2 text-info'>{this.props.productName}</span>
        <span className='m-2 badge bg-primary'>{this.format()}</span>

        <button className='m-2 btn btn-sm btn-success' onClick={this.handleIncrement}>+</button>
        <button className='m-2 btn btn-sm btn-warning' onClick={this.handleDecrement}>-</button>
        <button className='m-2 btn btn-sm btn-danger' onClick={this.handleDelete}>Delete</button>

        <ul>{mappList}</ul>
        <p>{this.context.children}</p>
      </div>
    );
  }

  format() {
    if (this.context.count === 0) return 'zero';
    return this.context.count;
  }

  handleDelete = () => {
    this.context.onDelete(this.props.id);
  };

  handleIncrement = () => {
    this.context.onIncriment(this.props.id);
  };

  handleDecrement = () => {
    this.context.onDecriment(this.props.id);
  };
}

export default Product;
