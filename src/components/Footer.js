import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return(
        <div className="footer d-flex wrapper">
            <div className="d-flex flex-column flex-grow-1 mx-3 py-5 sosmed">
                <p className="titles">FOLLOW US ON SOCIAL MEDIA</p>
                <div className="d-flex">
                    <i className="fab fa-instagram fa-2x mx-3"></i>
                    <i className="fab fa-youtube fa-2x mx-3"></i>
                </div>
            </div>

            <div className="d-flex flex-column flex-grow-1 ms-5 py-5">
                <div className="d-flex">
                    <i className="far fa-envelope fa-2x mx-3"></i>
                    <p className="titles d-flex align-items-center mb-0">EMAIL US AT</p>
                </div>
                <p className="descs mt-3">betisfasilkom@gmail.com</p>
            </div>

            <div className="d-flex flex-column flex-grow-1 py-5 w-50" id="lastDiv">
                <div className="d-flex">
                    <i class="fas fa-map-marker-alt fa-2x mx-3"></i>
                    <p className="titles d-flex align-items-center mb-0">OUR LOCATION</p>
                </div>
                <p className="descs mt-3" id="botDes">Fakultas Ilmu Komputer Universitas Indonesia
                Kampus UI Depok, Pondok Cina, Kec. Beji, Kota Depok, Jawa Barat
                16424</p>
            </div>

        </div>
    )
}

export default Footer;