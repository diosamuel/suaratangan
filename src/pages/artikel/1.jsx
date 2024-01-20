import { useState } from 'react'
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import posterBisindo from "../assets/poster-bisindo.jpg"
export default function(){
	return (
		<>
		<Navbar title="BISINDO"/>
		<div className="flex flex-col items-center justify-center">
			<div className="w-full lg:w-4/12 bg-orange-300 shadow-lg">
				<h1 className="text-xl text-center pb-3 mt-5 mb-3 font-bold">Mengenal BISINDO</h1>
				<div className="bg-white p-5 rounded-xl">
					<p className="text-justify">Bahasa Isyarat Indonesia (BISINDO) adalah bahasa isyarat yang berlaku di Indonesia. Berbeda dari SIBI yang merupakan sistem buatan dan bukan merupakan bahasa, BISINDO merupakan bahasa ibu yang tumbuh secara alami pada kalangan komunitas Tuli di Indonesia.</p>
					<p className="text-justify mt-3">Perbedaan lainnya adalah SIBI menggunakan isyarat khusus untuk morfem imbuhan mengikuti bahasa Indonesia, sehingga kata-katanya jauh lebih panjang daripada kata-kata dalam bahasa isyarat alami seperti BISINDO. BISINDO kemudian diteliti dan dikembangkan oleh Pusat Bahasa Isyarat Indonesia (PUSBISINDO) serta Laboratorium Riset Bahasa Isyarat FIB UI.</p>
					<div className="p-6 flex flex-col justify-center items-center gap-3 text-center">
						<img src={posterBisindo} className="border-2 rounded"/>
						<p>Contoh SIBI</p>
						<span className="text-sm">Sumber: <a href="https://www.ypedulikasihabk.org/2018/11/09/mengenal-bahasa-isyarat/">www.ypedulikasihabk.org</a></span>
					</div>
					<a href="/belajar/huruf" className="block text-center p-3 w-full bg-orange-500 mb-[5em] rounded text-white font-semibold">Belajar BISINDO</a>
				</div>
			</div>
			<Footer activePath="belajar"/>
		</div>
		</>
	)
}