import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.fetchData);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const detail = data.filter((item) => {
      return item.id === Number(id);
    })?.[0];
    setDetail(detail);
  }, [data]);

  return (
    <div>
      {id} - {detail.title}
    </div>
  );
};

export default Detail;
