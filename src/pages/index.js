import { UserPage } from "../layouts/UserPage";
import { userList, fetchData } from "../slice/endpointSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
export const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector(userList);
  useEffect(() => {
    dispatch(fetchData('users'));
  }, [dispatch]);
  return (
    <UserPage data={data} />
  );
};
