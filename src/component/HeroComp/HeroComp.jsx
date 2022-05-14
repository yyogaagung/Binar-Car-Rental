import { Fragment } from 'react';
import FooterComp from '../Footer/FooterComp';
import './HeroComp.css';
import heroImg from './mobilhero.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCars } from '../../actions';


function HeroComp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Fragment>
        
      <article id="hero" className="hero container-fluid">
      <div className='main-wrap'>
        <section id="wrap-title-hero">
              <h1 className="title-hero">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="subtitle-hero">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          </section>
          <div className='wrap-img'>
              <div className='img-in-hero'>
                <img src={heroImg} alt='gambar mobil'></img>
              </div>
          </div>
      </div>

      <div className='wrap-bg-img'>
        <div className='bg-img'></div>
      </div>

      <div className='wrap-col-search'>
        <div className='col-search'>
          <form id="form-search">
              <div className='driver'>
                  <p>Tipe Driver</p>
                  <select name="Sopir" id="list-drivers" className='input-text'>
                    <option value='dengan-sopir'>Dengan Sopir</option>
                    <option value='tanpa-sopir' selected>Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </div>

              <div className='date'>
                  <p>Tanggal</p>
                  <input type="date" className='input-text'></input>
              </div>

              <div className='ambil'>
                  <p>Waktu Ambil/Jemput</p>
                  <select name="Ambil" id="waktu-ambil" className='input-text'>
                    <option value='08.00 WIB' selected>08.00 WIB</option>
                    <option value='09.00 WIB'>09.00 WIB</option>
                    <option value='10.00 WIB'>10.00 WIB</option>
                    <option value='11.00 WIB'>11.00 WIB</option>
                    <option value='12.00 WIB'>12.00 WIB</option>
                </select>
              </div>

              <div className='jumlah'>
                  <p>Jumlah Penumpang (optional)</p>
                  <input placeholder='Jumlah penumpang' className='input-text'></input>
              </div>

              <div className='btn-search'>
                  <Link className='btn' to='/cars' onClick={()=> 
                  dispatch(addCars())}>Cari Mobil</Link>
              </div>
          </form>
        </div>
      </div>
        
    </article>
    </Fragment>
  );
}

export default HeroComp;
