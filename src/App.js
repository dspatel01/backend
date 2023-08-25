import './App.css';
// import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/admin/Login';
import AdminPanal from './component/admin/AdminPanal';
import Calender from "./component/pages/Calender";
import DailyThousands from "./component/pages/DailyThousands";
import UpcomingEvent from "./component/pages/UpcomingEvent";
import ImageGallery from "./component/pages/ImageGallery";
import VideoGallery from "./component/pages/VideoGallery";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/admin' element={<Login />} />
          <Route exact path='/adminPanal' element={<AdminPanal />} />
          <Route exact path='/adminPanal/calender' element={<Calender />} />
          <Route exact path='/adminPanal/dailyThousands' element={<DailyThousands />} />
          <Route exact path='/adminPanal/upcomingEvent' element={<UpcomingEvent />} />
          <Route exact path='/adminPanal/imageGallery' element={<ImageGallery />} />
          <Route exact path='/adminPanal/videoGallery' element={<VideoGallery />} />
          

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
