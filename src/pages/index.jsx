import { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/fetchSlice";
import { Link } from "react-router-dom";

function MainPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.fetchData);
  const [store, setStore] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    const temp = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
      };
    });
    setStore(temp);
  }, [data]);

  const handleSearch = (param) => {
    const temp = data.filter((item) => {
      return item.title.includes(param);
    });
    setStore(temp);
  };

  return (
    <div>
      <div>
        <input onChange={(param) => handleSearch(param.target.value)} />
      </div>
      {store.map((item, index) => (
        <Link
          to={`/detail/${item.id}`}
          key={index}
          style={{
            border: 1,
            cursor: "pointer",
            padding: "10px",
            width: "100%",
          }}
        >
          {item.id} - {item.title}
        </Link>
      ))}
    </div>
  );
}

export default MainPage;
