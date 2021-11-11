import React from "react";
import '../styles/Home.css';

const Home = () => {

        return (
            <div className="mx-4 mt-5" id="pembungkus">
                <div className="first d-flex mb-5">
                    <img src={require("../images/Papan tulis.svg").default} class="img-fluid gambars mx-4" alt="Papan Tulis" />
                    <div className="d-flex flex-column mx-5 my-auto w-75">
                        <h2 className="text-center title">Bimbingan belajar<br />tanpa biaya.</h2>
                        <p className="text-center desc-1 px-5 mt-4">BETIS (Bimbingan Belajar Gratis) Fasilkom UI adalah program kerja
                            Departemen Pengabdian Masyarakat BEM Fasilkom UI yang bertujuan
                            untuk menyediakan bimbingan belajar tanpa biaya kepada siswa kelas
                            12 SMA atau alumni yang kurang mampu secara finansial untuk
                            persiapan menghadapi SBMPTN.
                        </p>
                    </div>
                </div>

                <div className="my-5">
                    <h3 className="text-center visi pt-5 pb-3">Visi dan Misi</h3>
                    <p className="text-center w-50 mx-auto desc-2 mb-4">Betis sebagai sarana pendidikan yang inovatif dan tangguh dalam
                        memberikan bimbingan persiapan masuk perguruan tinggi dengan
                        menciptakan lingkungan yang bersahabat.
                    </p>
                </div>

                <div>
                    <div className="d-flex justify-content-center">
                        <div className="mx-auto divDesc ps-4">
                            <img src={require("../images/Vector.svg").default} class="img-fluid my-5 px-4" alt="Kemudahan Akses" />
                            <h4 className="titleVisi">Kemudahan Akses</h4>
                            <p className="desc-3 my-3">Memberikan kemudahan akses belajar bagi masyarakat.</p>
                        </div>
                    
                        <div className="mx-auto divDesc">
                            <img src={require("../images/Vector2.svg").default} class="img-fluid my-5 px-4" alt="Sarana Pengmas" />
                            <h4 className="titleVisi">Sarana Pengabdian Masyarakat</h4>
                            <p className="desc-3 my-3">Menjadikan BETIS sebagai sarana pengabdian masyarakat
                                bagi mahasiswa UI dalam bidang pendidikan.
                            </p>
                        </div>
                    </div>
                    
                    <div className="d-flex">
                        <div className="mx-auto divDesc mb-5 ps-4">
                            <img src={require("../images/Vector1.svg").default} class="img-fluid my-5 px-4" alt="Optimaslkan Potensi" />
                            <h4 className="titleVisi">Optimalkan Potensi</h4>
                            <p className="desc-3 my-3">Mengoptimalkan potensi untuk mengadakan bimbingan belajar gratis.</p>
                        </div>

                        <div className="mx-auto divDesc mb-5">
                            <img src={require("../images/Vector3.svg").default} class="img-fluid my-5 px-4" alt="Suasana Bersahabat" />
                            <h4 className="titleVisi">Suasana Bersahabat</h4>
                            <p className="desc-3 my-3">Menciptakan suasana yang bersahabat selama berjalannya BETIS 2021.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Home;
