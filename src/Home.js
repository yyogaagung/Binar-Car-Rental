import { Fragment } from 'react';
import NavbarComp from './component/NavbarComp/NavbarComp';
import HeroComp from './component/HeroComp/HeroComp';
import { Outlet } from 'react-router';
import FooterComp1 from './component/Footer/FooterComp1';
import {useSelector} from 'react-redux';

function Home() {
    const isHaveCars = useSelector(state => state.cars);
    console.log(isHaveCars)
    return (
        <div>
            <NavbarComp />
            <HeroComp/>
            <Outlet></Outlet>
            {/* {!isHaveCars ? '' : <FooterComp1/>}         */}
        </div>
    );
}

export default Home;