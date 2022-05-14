import { Routes, Route} from "react-router-dom";
import CarDetail from "./component/cardetail/CarDetail";
import CarList from "./component/carlist/Carlist";
import FooterComp1 from "./component/Footer/FooterComp1";
import HeroComp from "./component/HeroComp/HeroComp";
import Home from "./Home";
// import './App.css';
// import CarDetail from "./Component/CarDetail/CarDetail";
// import CarList from "./Component/CarList/CarList";
// import Home from "./Component/HomePage/Home";


function App(props) {
    return (
        <div >
        <Routes>
            <Route path='/' element={<Home/>}>
            <Route index element={<FooterComp1/>}/>
            <Route path='/cars'  element={<CarList/>}/>
            <Route path='/detail/:id'  element={<CarDetail/>}/>
            {/* <Route path="/detail/:Carid" element={<CarDetail/>}/>          
            <Route path="*" element={<div>404 :page not found</div>}/>           */}
            </Route>
        </Routes>
        </div>
    );
    }

export default App;