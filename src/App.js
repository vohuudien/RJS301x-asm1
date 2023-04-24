import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

//-----Thêm thư viện icon vào toàn bộ dự án--------
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
//-----Thêm thư viện icon vào toàn bộ dự án--------
  library.add(fas)
//-------------------------------------------------
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
