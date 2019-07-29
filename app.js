// TODO

var groceryItems = ['yogurt', 'cereal', 'almonds'];


//       // using functional stateless components
// var GroceryListItem = (props) => (//App
//   <li>
//     {props.item}
//   </li>

// );

// var GroceryList = (props) => ( //TodoList
//     // <ul>
//     //   <li>{props.list[0]}</li>
//     //   <li>{props.list[1]}</li>
//     //   <li>{props.list[2]}</li>
//     // </ul>

//     // we want to iterate over props and put it in list format
//     <ul>
//       {props.list.map(item =>
//     <GroceryListItem item={item}/>
//       )}

//     </ul>
// );

// ReactDOM.render(<GroceryList list={groceryItems}/>, document.getElementById("app"));


      // using class based components

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
        <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.todo}</li>

    )
  }
}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
    <TodoListItem todo={todo}/>
    )}
  </ul>
);



ReactDOM.render(<TodoList todos={groceryItems}/>, document.getElementById("app"));




// // var Cucumbers = () => (
// //   <li>cucumbers</li>
// // );

// // var Kale = () => (
// //   <li>kale</li>
// // );


