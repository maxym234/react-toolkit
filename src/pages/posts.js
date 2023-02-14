import { fetchEndpoints, userList } from "../slice/endpointSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { PostsPage } from "../layouts/PostsPage";
export const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector(userList);
  useEffect(() => {
    dispatch(fetchEndpoints('posts'));
  }, [dispatch]);
  return (
    <div>
      <PostsPage data={data}/>
    </div>
  );
};
