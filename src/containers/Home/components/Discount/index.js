/*
 * @Author: your name
 * @Date: 2021-04-22 10:37:45
 * @LastEditTime: 2021-12-08 14:46:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Drill\React\meituan-react\src\containers\Home\components\Discount\index.js
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Discount extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="discount">
        <a className="discount__header">
          <span className="discount__title">超值特惠</span>
          <span className="discount__more">更多优惠</span>
          <span className="discount__arrow" />
        </a>
        <div className="discount__content">
          {data.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                className="discount__item"
              >
                <img alt="" className="discount__itemPic" src={item.picture} />
                <div className="discount__itemTitle">{item.product}</div>
                  <div className="discount__itemPrice">
                    <div className="discount__itemCurrentPrice">{item.currentPrice}</div>
                    <div className="discount__itemOldPrice">{item.oldPrice}</div>
                  </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discount;
