{
  /* <div id='parent'>
    <div id='child'>
<h1>I am H1 Tags</h1>
    </div>


</div> */
}
//createElement is an object
var parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1tag" }, "I am H1 tags"),
    React.createElement("h2", { id: "h2tag" }, "I am H2 tags"),
  ]), React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1tag" }, "I am H1 tags"),
    React.createElement("h2", { id: "h2tag" }, "I am H2 tags"),
  ])]
);

// var heading = React.createElement("h1", {id:'heading' ,xyz:'shivani'}, 'Hello World');

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
