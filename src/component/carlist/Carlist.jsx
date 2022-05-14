import React, { Fragment, useEffect, useState } from "react";
import './Carlist.css'
import  { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchPostAsync } from "../../actions";
import FooterComp from "../Footer/FooterComp";
import FooterComp1 from "../Footer/FooterComp1";
import FooterFake from "../footerfake/FooterFake";



const CarList = ()=>{
    const {list, loading, error} = useSelector(state => state.getCars);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
    dispatch(fetchPostAsync());
    // console.log(list)
    // console.log(loading)
},[dispatch])


    return(
        <div className="wrap-cars-list">
        {loading && <h6 className="loading">MOHON TUNGGU SEBENTAR...</h6>}
            <div className="wrap-product">
                        <ol>                            
                            {(!loading && !error) && list.map((el, id)=>(
                            <li key={el.id}>
                                <div className=" main-wrap-konten ">
                                    <section className="card-konten">
                                            <div className="wrap-img">
                                                <img src={el.image} alt=""/>                        
                                            </div>
                                            <div className="middle">
                                                <h6 className="judul-artikel">{el.name}</h6>
                                                <h6 className="price-car">Rp{el.price}/hari</h6>
                                            </div>
                                            <div className="wrap-desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>                   
                                            <div className="wrap-desc-simple">
                                                <p className="desc">Kategori: {el.category}</p>
                                                <p className="desc">Transisi: manual </p>
                                                <p className="desc">Tahun: 2020 </p>
                                                
                                            </div>    
                                            <button className="btn-detail" onClick= {()=>
                                                    {
                                                        navigate(`/detail/${el.id}`);                                            
                                                    }
                                                }>Lihat Detail</button>               
                                        
                                    </section>
                            </div>
                            </li>
                            ))}
                            {(!loading && error) && <div className="notif-err">TERJADI KESALAHAN</div>}
                        </ol>
                    </div>
                    <FooterFake/> 
                    </div>
    )
}

export default CarList;