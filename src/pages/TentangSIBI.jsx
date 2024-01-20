import { useState } from 'react'
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import posterSibi from "../assets/poster-sibi.jpg"
export default function(){
	return (
		<>
		<Navbar title="SIBI"/>
		<div className="flex flex-col items-center justify-center">
			<div className="w-full lg:w-4/12 bg-blue-500 shadow-lg">
				<h1 className="text-xl text-center pb-3 mt-5 mb-3 font-bold text-white">Mengenal SIBI</h1>
				<div className="bg-white p-5 rounded-xl">
					<p className="text-justify">Sistem Isyarat Bahasa Indonesia (SIBI) yang dibakukan itu merupakan salah satu media yang membantu komunikasi sesame kaum tunarungu di dalam masyarakat yang lebih luas. Wujudnya adalah tataanyang sistematis tentang seperangkat isyarat jari, tangan, dan berbagai gerak yang melambangkan kosa kata bahasa Indonesia</p>
					<div className="p-6 flex flex-col justify-center items-center gap-3 text-center">
						<img src={posterSibi} className="border-2 rounded"/>
						<p>Contoh SIBI</p>
						<span className="text-sm">Sumber: <a href="https://www.ypedulikasihabk.org/2018/11/09/mengenal-bahasa-isyarat/">www.ypedulikasihabk.org</a></span>
					</div>
					<a href="/belajar/huruf" className="block text-center p-3 w-full bg-blue-500 mb-[5em] rounded text-white font-semibold">Belajar SIBI</a>
				</div>
			</div>
			<Footer activePath="belajar"/>
		</div>
		</>
	)
}