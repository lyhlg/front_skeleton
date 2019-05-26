import * as React from 'react';
import TodoList from '@containers/TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
