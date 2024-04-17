import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Board = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        console.log(response);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3001/posts/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layer>
      {post.map((posting) => (
        <Post key={posting.id}>
          <PostItem>
            <Name>{posting.name}</Name>
            <Title>{posting.title}</Title>
            <Posting>{posting.posting}</Posting>
            <Image src={posting.image} alt="img" />
            <div>
              <button className="update">
                <Link to={`/update/${posting.id}`}>update</Link>
              </button>
              <button
                className="delete"
                onClick={() => handleDelete(posting.id)}
              >
                delete
              </button>
            </div>
          </PostItem>
        </Post>
      ))}
    </Layer>
  );
};

export default Board;

const Layer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background-color: #f1e5d4;
  padding: 20px;
`;

const Post = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
`;

const PostItem = styled.div`
  padding: 20px;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Title = styled.div`
  margin-top: 10px;
`;

const Posting = styled.div`
  margin-top: 10px;
`;

const Image = styled.img`
  width: 100%;
  margin-top: 20px;
`;
