import { List as ListModel } from "../../models/list.model";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Modal from "../../components/modal/Modal";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([] as ListModel[]);
  const [genre, setGenre] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState({});

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

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openModal]);

  const style = {
    overflow: openModal && "hidden",
  };

  return (
    <div className="home" style={style}>
      {lists && (
        <>
          {openModal && <Modal closeModal={setOpenModal} content={content} />}
          <Navbar />
          <Featured type={type} setGenre={setGenre} />
          <div className="movies">
            {lists.map((list) => (
              <List
                key={list._id}
                list={list}
                openModal={setOpenModal}
                setContent={setContent}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
