// TODO
// var App = () => (
//   <div>
//     <h1>Grocery List</h1>
//     <GroceryList todos={['Almonds', 'Yogurt', 'Lemons']} />
//   </div>
// );

// var GroceryList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

var GroceryListItem = (props) => (
  <div>{props}</div>;
  );

var groceryItems = ['Almonds', 'Yogurt', 'Lemons'];

var groceryList = [];
var GroceryList = (array) => (
  array.forEach((item) => {
    groceryList.push(
      <div>
        GroceryListItem(item)
      </div>
    )
  })
)

var App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList />
  </div>
)

// <div id='grocery'>
// <h1>Grocery List</h1>
// <Almonds />
// <Yogurt />
// </div>

// var Almonds = () => (
//   <div id='almonds'>
//     <p>almonds</p>
//   </div>
// )

// var Yogurt = () => (
//   <div id='yogurt'>
//     <p>yogurt</p>
//   </div>
// )

ReactDOM.render(<App />, document.getElementById("app"));
