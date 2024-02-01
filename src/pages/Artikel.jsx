import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked';
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import kontenJSON from "../assets/konten.json"
import '../artikel.css'
import signLanguangeGroup from "../assets/hands-with-sign-language-freepik.jpg"
export default function(props){
	let { id } = useParams()
	let filteredKonten = kontenJSON.filter(post=>id==post.id)[0]
	const render = marked.parse(filteredKonten.content);
	return (
		<>
		<div className="flex flex-col items-center justify-center bg-gray-100">
			<img src={signLanguangeGroup} className="lg:rounded-lg lg:w-4/12 mt-3 mb-3 brightness-50"/>
			<div className=" absolute lg:top-16 top-12 text-white text-center">
				<header className="lg:text-2xl text-xl font-bold">{filteredKonten.title}</header>
				<p className="text-sm mt-2">{filteredKonten.author}</p>
				<p className="text-sm">{filteredKonten.date}</p>
			</div>
			<div className="w-full lg:w-4/12 shadow-lg p-5 bg-white mb-[5em]">
				<div dangerouslySetInnerHTML={{ __html: render }}></div>
			</div>
			<Footer activePath="belajar"/>
		</div>
		</>
	)
}