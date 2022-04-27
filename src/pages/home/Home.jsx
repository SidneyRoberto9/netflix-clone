import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await api.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjg5MDhjNDM5OTk0NmYzYmNmMzQ0YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTAzMDY1NCwiZXhwIjoxNjUxNDYyNjU0fQ.4i2xHsfDZAWaACOJy3vjNOsOLLLZFWfc-_YPzOSL8KM",
            },
          }
        );

        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} key={list._id} />
      ))}
    </div>
  );
};

export default Home;
