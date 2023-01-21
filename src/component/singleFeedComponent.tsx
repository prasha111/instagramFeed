import { useState } from "react";
import CommentSection from "../component/CommentSection";

function SingleFeedComponent(props) {
  const [stateComment, setStateComment] = useState(false);
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "8px",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "10px"
            }}
          >
            <img
              alt="Dua Lipa"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "solid 1px "
              }}
              src={props.dataList.profile}
            />
            <div>
              <p
                style={{
                  padding: "0px",
                  margin: "0px",
                  fontSize: "15px",
                  fontWeight: "600"
                }}
              >
                {props.dataList.user}
              </p>
              <p style={{ padding: "0px", margin: "0px", fontSize: "12px" }}>
                post name
              </p>
            </div>
          </div>
          <div>...</div>
        </div>
        <div style={{ width: "100%", height: "35rem" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={props.dataList.image}
            alt="Taylor Swift"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "10px"
            }}
          >
            <svg
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <svg
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
            <svg
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
          <div>
            <svg
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            float: "left"
          }}
        >
          {
            <span style={{ verticalAlign: "center" }}>
              <a style={{ fontWeight: "600" }}>{props.dataList.user}</a>{" "}
              {props.dataList.description}
            </span>
          }
          <div>
            {" "}
            {props.dataList.comments.length > 1 && !stateComment && (
              <div
                style={{ opacity: "0.6", float: "left" }}
                onClick={() => {
                  setStateComment(!stateComment);
                }}
              >
                View all {props.dataList.comments.length} Comments
              </div>
            )}
          </div>
          {stateComment && <CommentSection data={props.dataList.comments} />}
        </div>
      </div>
    </>
  );
}
export default SingleFeedComponent;
