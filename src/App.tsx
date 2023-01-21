import { useState } from "react";
import "./styles.css";
import SingleFeedComponent from "./component/singleFeedComponent";

export default function App() {
  const [stateDataList, setStateDateList] = useState([
    {
      id: "1",
      user: "Taylor Swift",
      space: "1",
      profile:
        "data:image/jpeg;base64,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",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/The_Peacock_Room.jpg",
      description: "seeing snow after long time and people can see it",
      comments: [
        {
          id: "4144",
          user: "Lady",
          space: "2",
          profile: "",
          image:
            "https://media.newyorker.com/photos/60747954c920e996bd1e486d/master/w_2560%2Cc_limit/Battan-FearlessTaylorsVersion.jpg",
          comment: "something sopmething",
          reply: [
            {
              id: "4145",
              user: "Manmohan",
              space: "3",
              comment: "something reply",
              reply: [
                {
                  id: "4145",
                  user: "TonyStark",
                  space: "4",
                  comment: "something reply nested",
                  reply: []
                }
              ]
            }
          ]
        },
        {
          id: "4144",
          user: "Lalu",
          space: "2",
          comment: "something 2 commemt",
          reply: []
        }
      ]
    },
    {
      id: "1",
      user: "Rohanan",
      profile:
        "https://yt3.ggpht.com/ytc/AMLnZu_rkOQP282cWp5MJLwUAHdVgJ9QqmO8Y4xmJk92vQ=s900-c-k-c0x00ffffff-no-rj",
      image:
        "https://img.freepik.com/free-photo/casual-girl-sitting-scooter-two-houses_613910-15368.jpg?w=2000",
      userName: "Mohan",
      description: "seeing snow after long time and people can see it",
      comments: [{ user: "4144", comment: "something SecondCommnent 2" }]
    }
  ]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20rem"
      }}
    >
      {stateDataList.map((component, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20rem"
            }}
          >
            <SingleFeedComponent dataList={component} />
          </div>
        );
      })}
    </div>
  );
}

//https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/11/add-music-to-Instagram.jpg?ssl=1
