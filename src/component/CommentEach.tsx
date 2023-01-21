import { useState } from "react";
const CommentEach = (props) => {
  const [stateReply, setStateReply] = useState(false);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", padding:'10px' }}>
        <div style={{ float: "left", textAlign: "left" }}>
          <span style={{ fontWeight: "600" }}>{props.data.user}</span>
          {props.data.comment}
        </div>
        <div>
          {" "}
          {props.data.reply.length > 0 && !stateReply && (
            <div
              onClick={() => {
                setStateReply(!stateReply);
              }}
              style={{ fontSize: "12px", opacity: "0.6", textAlign: "left" }}
            >
              {" "}
              see replies
            </div>
          )}
        </div>
      </div>

      {stateReply &&
        props.data.reply.map((component, index) => {
          return (
            <>
              {" "}
              <CommentEach data={component} />
            </>
          );
        })}
    </>
  );
};
export default CommentEach;
