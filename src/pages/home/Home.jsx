import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      const res = await api.get(
        `lists/random${type ? "?type=" + type : ""}${
          genre ? "&genre=" + genre : ""
        }`,
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setLists(res.data);
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      <div className="movies">
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default Home;
