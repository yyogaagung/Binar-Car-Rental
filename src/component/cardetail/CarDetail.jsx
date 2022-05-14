import React, { Fragment, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import './CarDetail.css'
import { fetchCarDetailAsync } from "../../actions";
import FooterComp1 from "../Footer/FooterComp1";

const CarDetail = ()=>{
    const params = useParams()
    const dispatch = useDispatch()
    const {list, loading, error} = useSelector(state => state.detailCars);
    console.log(list)
    

    useEffect(()=>{
        dispatch(fetchCarDetailAsync(params.id))
    },[params.id, dispatch])


    return(
        <section>
        <div className="comp-detail">
        <br/>
            <div className="wrapping-all-content">

            
            
                {loading && <h6 className="loading">MOHON TUNGGU SEBENTAR...</h6>}
                {(!loading && !error) && (
                    <Fragment>
                    <div className="about-paket">
                <div className="content-1">
                    <h6>Include</h6>
                    <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>
                </div>
                <div className="content-1">
                    <h6>Exclude</h6>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        
                    </ul>
                </div>
                <div className="content-1">
                    <h6>Refund, Reschedule, Overtime</h6>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    </ul>
                </div>
                <button className="btn-detail">Lanjutkan Pembayaran</button> 
            </div>
                    <div className="detail-wrap">
                        <div className="img-wrap">
                            <img src={list.image} alt="Car Here"/>                           
                        </div>
                        <div className="title-wrap">
                            <div className="wrap-title">
                                <p className="title">{list.name}</p>
                                <ul>
                                    <li>{list.category}</li>
                                    <li>manual</li>
                                    <li>2020</li>
                                </ul>
                            </div>
                            
                            <div className="wrap-price">
                            <p className="price">Total:</p>
                            <p className="price">Rp{list.price}</p>
                            </div>
                        </div>
                        <button className="btn-detail">Lanjutkan Pembayaran</button>               
                                        
                    </div>
                    </Fragment>
                )}
                {(!loading && error) && <div className="notif-err">TERJADI KESALAHAN</div>}
            </div> 
        </div>
        {!loading && <FooterComp1/>}
        </section>
    )

}

export default CarDetail;