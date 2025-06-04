import React, { Component } from 'react';
import ProductContext from './context/products';
import Navbar from './components/Navbar';
import Products from './components/Products';

class App extends Component {
  constructor(props){
    super(props);
    console.log('App-constructor');
  }
  componentDidMount(){
    console.log('App-componentdidmount');
  }
  state = {
    products: [
      { id: 1, count: 3, productName: 'laptop' },
      { id: 2, count: 4, productName: 'phone' },
      { id: 3, count: 6, productName: 'Airpods' },
    ]
  };

  handleDelete = (id) => {
    this.setState({
      products: this.state.products.filter(p => p.id !== id)
    });
  };

  handleReset = () => {
    const products = this.state.products.map(p => ({ ...p, count: 0 }));
    this.setState({ products });
  };

  handleIncrement = (id) => {
    const products = this.state.products.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    );
    this.setState({ products });
  };

  handleDecrement = (id) => {
    const products = this.state.products.map(p =>
      p.id === id ? { ...p, count: p.count - 1 } : p
    );
    this.setState({ products });
  };

  render() {
    console.log('App-render');
    const contextValue = {
      products: this.state.products,
      onDelete: this.handleDelete,
      onReset: this.handleReset,
      onIncriment: this.handleIncrement,
      onDecriment: this.handleDecrement
    };

    return (
      <ProductContext.Provider value={contextValue}>
        <Navbar />
        <Products />
      </ProductContext.Provider>
    );
  }
}

export default App;
