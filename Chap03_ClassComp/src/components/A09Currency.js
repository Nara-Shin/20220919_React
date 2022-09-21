import React, { Component, createRef } from "react";

class A09Currency extends Component {
  constructor() {
    super();
    this.state = {
      qty: 3,
      cost: 5,
      inCurr: 'USD',
    }
    this.currencies = ['USD', 'EUR', 'KRW'];
    this.rate = { 'USD': 1, 'EUR': 1.15, 'KRW': 0.0006 };

    // DOM을 직접 참조하기 위한 참조변수
    this.qtyRef = createRef()
  }

  // USD: 15   EUR: 16.25    KRW: 18000
  total = () => {
    const span = this.currencies.map(item => {
      let value = this.state.qty * this.state.cost * this.rate[this.state.inCurr] / this.rate[item];
      return <span>{item}: {value.toFixed(2)} &nbsp; {' '}</span>
    });
    return span;
  }

  changeNumber = evt => this.setState({ [evt.target.name]: Number(evt.target.value) });
  changeString = evt => this.setState({ [evt.target.name]: evt.target.value });

  componentDidMount() {
    // const qtyRef = document.querySelector('input[name="qty"]');
    // qtyRef.style.background = 'orange';
    this.qtyRef.current.style.background = 'lightgray';
  }

  render() {
    return (
      <div>
        <h3>A09 Currency</h3>
        Qty: <input type="text" name="qty" className="form-control" ref={this.qtyRef}
          value={this.state.qty} onChange={this.changeNumber} />
        Cost: <input type="text" name="cost" className="form-control"
          value={this.state.cost} onChange={this.changeNumber} />
        Country:
        <select className="form-control" name="inCurr"
          value={this.state.inCurr} onChange={this.changeString}>
          {this.currencies.map(item => <option key={item}>{item}</option>)}
        </select>
        <br />
        <div>Total: {this.state.qty * this.state.cost}</div>
        <div>
          Total: {this.total()}
        </div>
      </div>
    );
  }
}
export default A09Currency;
