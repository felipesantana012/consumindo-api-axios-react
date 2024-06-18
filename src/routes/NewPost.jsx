import { useState } from "react";
import Btn from "../components/Btn/Btn";
import "./NewPost.css";
import blogFetch from "../axios/config";
import { useNavigate } from "react-router-dom";

const NewPost = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };
    await blogFetch.post("/posts", {
      body: post,
    });
    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post</h2>

      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo: </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o Titulo"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteudo: </label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteudo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" value="criar post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
