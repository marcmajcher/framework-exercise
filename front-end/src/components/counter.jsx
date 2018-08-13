//!This is used with keywords 'imrc'
import React, { Component } from 'react';

//!This can be whipped up using keywords 'cc'
class Counter extends Component {
  state = {
    count: 0
  };
  //! this is an object I created with css styles in camelCase. px's are automatically appended to the number
  //   styles = {
  //     fontSize: 10,
  //     fontWeignt: "bold"
  //   };

  render() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';

    return (
      <div>
        <span style={{ fontSize: 20 }} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary">Increment</button>
      </div>
    );
  }

  formatCount() {
    let { count } = this.state;

    if (count === 0) {
      return 'Zero';
    } else {
      return count;
    }
  }
}

console.log(
  'hello hoss!!!!!!!!!!!!, this is coming from the counter.jsx file.'
);

export default Counter;
