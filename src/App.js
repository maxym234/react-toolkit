// import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { API } from './constans';
import { Main } from './pages';
import { Posts } from './pages/posts';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectPath } from './slice/endpointSlice';
function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //     getData();
  // }, []);
  // const getData = async()=>{
  //     try {
  //         const response = await fetch(`${API}users`);
  //         const resultResponse = await response.json();
  //         setData(resultResponse);
  //         return     resultResponse;
  //       } catch (e) {
  //         throw new Error('Cannot connect to server');
  //       }
  //  }
  //  console.log(useSelector(selectPath), 'selectPath');
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Main />}/>
          <Route path={'/posts'} element={<Posts />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
