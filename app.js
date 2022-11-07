// TODO
const GroceryList = (props) => (
  <ul>Grocery List
    {props.groceries.map((grocery) => (
      <GroceryListItem grocery ={grocery} />
    ))}
  </ul>
);

const GroceryListItem = (props) => {
  const [hoveredOn, setHoveredOn ] = React.useState(false);
  const style = {
    fontWeight: hoveredOn ? 'bold' : 'normal'
  };
  return (
    <li style={style} onMouseEnter={() => setHoveredOn(true)} onMouseLeave={() => setHoveredOn(false)}>
      {props.grocery}
    </li>
  );
};

const App = () => (
  <GroceryList groceries={['Cucumber', 'Kale']} />
);

ReactDOM.render(<App />, document.getElementById("app"));