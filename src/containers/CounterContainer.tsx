// import * as React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { StoreState } from '@/store/modules';

// import CounterState, { actionCreators as counterActions } from '@/store/modules/counter';

// import Counter from '@components/Counter';

// console.log(CounterState);

// interface Props {
//   value: number;
//   CounterActions: typeof counterActions;
// }

// class CounterContainer extends React.Component<Props> {
//   onIncrement = () => {
//     const { CounterActions } = this.props;
//     CounterActions.increment();
//   };

//   onDecrement = () => {
//     const { CounterActions } = this.props;
//     CounterActions.decrement();
//   };

//   render() {
//     const { onIncrement, onDecrement } = this;
//     const { counter } = this.props;
//     const { value } = counter;
//     return <Counter onIncrement={onIncrement} onDecrement={onDecrement} value={value} />;
//   }
// }

// const mapStoreToProps = (store: StoreState) => ({
//   counter: store.counter,
// });

// // export default connect(
// //   ({ counter }: StoreState) => ({
// //     value: counter.value,
// //   }),
// //   dispatch => ({
// //     CounterActions: bindActionCreators(counterActions, dispatch),
// //   }),
// // )(CounterContainer);

// export default connect(
//   mapStoreToProps,
//   dispatch => ({
//     CounterActions: bindActionCreators(counterActions, dispatch),
//   }),
// )(CounterContainer);

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState } from '@/store/modules';

import { CounterState, actionCreators as counterActions } from '@/store/modules/counter';

import Counter from '@components/Counter';

interface Props {
  counter: CounterState;
  CounterActions: typeof counterActions;
}

class CounterContainer extends React.Component<Props> {
  onIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment();
  };

  onDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  };

  render() {
    const { onIncrement, onDecrement } = this;
    const { counter } = this.props;
    const { value } = counter;
    return <Counter onIncrement={onIncrement} onDecrement={onDecrement} value={value} />;
  }
}

const mapStateToProps = (store: StoreState) => ({
  counter: store.counter,
});

const mapDispatchToProps = dispatch => ({
  CounterActions: bindActionCreators(counterActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
