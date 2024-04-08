import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Jurusan from './component/jurusan/Jurusan.jsx';
import Nav from "./navbar/Nav.jsx"
import Home from './component/Home.jsx';
import ContactUs from './component/ContactUs.jsx';
import Footer from './footer/Footer.jsx';
import Blog from './component/Blog.jsx';
import DaftarGuru from './component/profil/DaftarGuru.jsx';
import DaftarKaryawan from './component/profil/DaftarKaryawan.jsx';
import Sejarah from './component/profil/Sejarah.jsx';
import StrukturOrganisasi from './component/profil/StrukturOrganisasi.jsx';
import VisiMisi from './component/profil/VisiMisi.jsx';
import Fasilitas from './component/pembahasan/Fasilitas.jsx';
import KegiatanMahasiswa from './component/pembahasan/KegiatanMahasiswa.jsx';
import Kurikulum from './component/pembahasan/Kurikulum.jsx';
import PrestasiGuru from './component/prestasi/PrestasiGuru.jsx';
import PrestasiSekolah from './component/prestasi/PrestasiSekolah.jsx';
import PrestasiSiswa from './component/prestasi/PrestasiSiswa.jsx';
import { jurusanData } from './data/NavSubItem.jsx';


function App() {


  return (
    <div className='flex flex-col min-h-[100vh]'>
      <div className='sticky top-0'>
        <Nav />
      </div>
      <div className='flex-1 flex h-auto justify-center items-center ' >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/daftar-guru' element={<DaftarGuru/>} />
          <Route path='/daftar-karyawan' element={<DaftarKaryawan />} />
          <Route path='/sejarah' element={<Sejarah/>} />
          <Route path='/struktur-organisasi' element={<StrukturOrganisasi />} />
          <Route path='/visi-misi' element={<VisiMisi />} />
          <Route path='/fasilitas' element={<Fasilitas/>}/>
          <Route path='/kegiatan-mahasiswa' element={<KegiatanMahasiswa/>}/>
          <Route path='/kurikulum' element={<Kurikulum/>}/>
          <Route path='/prestasi-guru' element={<PrestasiGuru/>}/>
          <Route path='/prestasi-siswa' element={<PrestasiSiswa/>}/>
          <Route path='/prestasi-sekolah' element={<PrestasiSekolah/>}/>
          {jurusanData.map((jurusan) => (
            <Route
              key = {jurusan.title} 
              path={jurusan.endpoint} 
              element={<Jurusan title={jurusan.title} visi={jurusan.visi} misi={jurusan.misi}/>}
            />
          ))}
        </Routes>
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default App
