import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    let {product} = this.props;
    console.log(product);
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
        <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
        <a data-product={1} href="http://localhost:3000" className="price"> {product.price} USD </a>
      </p>
    } else {
      xhtml= <span className="price"> {product.price} USD</span>;
    }
    return xhtml;
  }
}

export default ProductItem;