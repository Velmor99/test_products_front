import React, { Component } from "react";
import { connect } from "react-redux";
import productOperation from "../../redux/productOperation";
import Item from "./Item";
import styles from "./listStyle.module.css";

class List extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <ul className={styles.list}>
        {this.props.productsArr ? (
          this.props.productsArr.map((item) => {
            return (
              <li className={styles.listItem} key={item.asin}>
                <Item
                  sourceImage={item.img}
                  cost={item.price}
                  itemName={item.name}
                  link={item.link}
                />
              </li>
            );
          })
        ) : (
          <p></p>
        )}
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(productOperation()),
});

const mapStateToProps = (state) => ({
  productsArr: state.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
