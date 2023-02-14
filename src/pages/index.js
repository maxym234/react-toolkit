import { UserPage } from "../layouts/UserPage";
import { userList, fetchEndpoints } from "../slice/endpointSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
export const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector(userList);
  useEffect(() => {
    dispatch(fetchEndpoints('users'));
  }, [dispatch]);
  return (
    <UserPage data={data} />
  );
};
