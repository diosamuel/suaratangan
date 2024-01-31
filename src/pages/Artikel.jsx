import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked';
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import kontenJSON from "../assets/konten.json"
import '../artikel.css'
export default function(props){
	let { id } = useParams()
	let filteredKonten = kontenJSON.filter(post=>id==post.id)[0]
	const render = marked.parse(filteredKonten.content);
	return (
		<>
		<div className="flex flex-col items-center justify-center">
			<div dangerouslySetInnerHTML={{ __html: render }}></div>
		</div>
		</>
	)
}