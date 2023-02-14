import { fetchData, userList } from "../slice/endpointSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { PostsPage } from "../layouts/PostsPage";
export const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector(userList);
  useEffect(() => {
    dispatch(fetchData(`posts${window.location.search}`));
  }, [dispatch]);
  console.log(window.location.search, 'window');
  return (
    <PostsPage data={data}/>
  );
};
