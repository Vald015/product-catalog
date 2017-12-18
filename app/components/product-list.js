import React from 'react';
import { getProducts, selectProduct } from '../actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from 'react-router';

const ProductListRow = (props) =>{
  return (
    <li className = "media" onClick = {()=>props.onProductSelected(props.product)} style = { { cursor:'pointer' } }>
      <div className="media-left">
        <a href = "#">
          <img className = "media-object" height="64" src={props.product.image}/>
        </a>
      </div>
      <div className="media-body">
        <h4 className = "media-heading"> {props.product.name}></h4>
        <span> {props.product.description}</span>
      </div>
    </li>
  );
}


class ProductList extends React.Component{
  constructor(){
    super();

    this.onProductSelected = this.onProductSelected.bind(this);
  }
  //Life cycle method
  componentDidMount(){
    this.props.getProducts();
  }

  onProductSelected(product){
    //console.log(product);
    this.props.selectProduct(product);
    this.context.router.push('/checkout');

  }

  render(){
    return (
      <ul className = "media-list">
        {this.props.products.map((p) => (<ProductListRow key = {p.id} product = {p} onProductSelected = {this.onProductSelected}/>))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.products);
  return { products: state.products };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getProducts, selectProduct },dispatch);
}

ProductList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
// wire up redux action creators
