import CommentEach from "../component/CommentEach";
const FuncCalculate = (prop) => {
  console.log(prop * 10 + "px");
  return prop * 10 + "px";
};
const CommentSection = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", float: "left" }}>
      {props.data.map((component, index) => {
        {
          console.log(component.space, "console");
        }
        return (
          <div key={index} style={{}}>
            <CommentEach data={component} key={index} />
          </div>
        );
      })}
    </div>
  );
};
export default CommentSection;
