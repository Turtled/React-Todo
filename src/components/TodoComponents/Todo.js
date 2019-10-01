import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
  }

  completedStyle(){//returns appropriate style depending on if completed or not. TODO: Figure out how to use ternary or whatever it's called for this instead
    if(this.props.task.completed){
        return "text-decoration: line-through";
    }

    return "text-decoration: none";
  }

  render() {

    let taskName = this.props.task.task + " - " + this.completedStyle()//hey, if it won't let me set sytle dynamically I'll just add it as a string lol
    return (
      <div onDoubleClick={() => {console.log("onDoubleClick working"); this.props.setCompleted(this.props.task)}} /*style={this.completedStyle()} <-- idk why this doesn't work. Error says: "The `style` prop expects a mapping from style properties to values, not a string. "*/ >
          {taskName}
      </div>
    );
  }
}

export default App;
