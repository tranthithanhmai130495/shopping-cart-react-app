import React, { Component } from 'react';
import {connect} from 'react-redux';

import Validate from './../libs/Validate';
import { actChangeNotify, actBuyProduct } from './../actions/index';
import * as configs from './../constants/Config';
import Helpers from './../libs/Helpers';

class ProductItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClick = (product) => {
    let quantity = +this.state.value;
    if(Validate.checkQuantity(quantity) === false) {
      this.props.changeNotify(configs.NOTI_GREATER_THAN_ONE);
    } else {
      this.props.buyProduct(product, quantity);
      this.props.changeNotify(configs.NOTI_ACT_ADD);
    }
  }

  render() {
    let {product} = this.props;
    //console.log(product);
    return (
      <div className="media product">
        <div className="media-left">
          <a href="http://localhost:3000">
          <img className="media-object" src={`images/${product.image}`} alt="{product.name}" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{ product.name }</h4>
          <p>{ product.sumamry}</p>
          {this.showAreaBuy(product)}
        </div>
    </div>
    );
  }

  showAreaBuy(product) {
    let xhtml = null;
    if(product.canBuy===true) {
      xhtml = <p>
        <input name="value" type="number" value= {this.state.value} onChange= {this.handleChange}  min={1} />
        <a onClick={()=>this.handleClick(product)}  className="price"> {product.price} USD </a>
      </p>
    } else {
      xhtml= <span className="price"> 
      { Helpers.toCurrency(product.price, "USD", "right") }
      </span>;
    }
    return xhtml;
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyProduct:(product,quantity) => {
      dispatch(actBuyProduct(product,quantity))
    },
    
    changeNotify: (value) => {
      dispatch(actChangeNotify(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductItem);