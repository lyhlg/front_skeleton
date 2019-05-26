import * as React from 'react';
import TodoList from '@containers/TodoList';
import Header from '@containers/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
