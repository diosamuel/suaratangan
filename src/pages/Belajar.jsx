import { useState } from 'react'
import { IconHome,IconAbc,IconNotebook,IconLanguage,IconUserCircle,IconBrandYoutubeFilled,IconDeviceGamepad2,IconCardsFilled } from '@tabler/icons-react';
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import video from "../assets/video.json"
import kontenJSON from "../assets/konten.json"
import handsWithSign from "../assets/hands-with-sign-language-freepik.jpg"

export default function(){

	function MarkupFrame(url) {
	    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	    const match = url.match(regExp);
	    let videoId =  (match && match[2].length === 11) ? match[2] : null;
	
	    return <iframe src={"https://www.youtube.com/embed/"+videoId} frameBorder="0" className="w-[100%]"></iframe>;
	}

return (
	<>
		<Navbar title="Belajar"/>
    	<div className="flex flex-col items-center justify-center">
      		<div className="bg-blue-500 w-full lg:w-4/12 shadow-md">
        		<div className="p-6 text-white">
        		  <h1 className="text-2xl font-black">Bahasa Isyarat</h1>
        		  <p className="text-xl">Belajar bahasa isyarat dengan asyik!</p>
        		</div>
        		<div className="bg-white p-5 flex flex-col gap-5 rounded-t-2xl">
        			<div className="flex flex-col gap-3">
        				<h1>Kenali Perbedaanya</h1>
        				<div className="flex flex-row gap-3 w-[100%] justify-center h-32">
        					<a href="/belajar/sibi" className="w-full bg-orange-200 text-center rounded flex flex-col justify-center items-center border-2 border-orange-300 hover:shadow-md">
        						<p className="font-bold">SIBI</p>
        						<p>Sistem Isyarat Bahasa Indonesia</p>
        					</a>
        					<a href="/belajar/bisindo" className="w-full bg-orange-200 text-center rounded flex flex-col justify-center items-center border-2 border-orange-300 hover:shadow-md">
        						<p className="font-bold">BISINDO</p>
	        					<p>Bahasa Isyarat Indonesia</p>
        					</a>
        				</div>
        			</div>
          			<div className="flex flex-col gap-3">
          			  <div className="flex flex-row justify-between items-center">
          			    <h1 className="text-lg font-medium">Artikel</h1>
          			    <a className="bg-orange-300 pr-3 pl-3 p-2 rounded-full text-xs font-medium active:bg-orange-400" href="/belajar">Semua</a>
          			  </div>
          			  <div className="w-full overflow-auto">
          			  <div className="flex flex-row w-[70em] gap-3">
          			    {kontenJSON.map(article=>(
          			      <div className="w-[100%] h-full rounded-lg border hover:shadow-lg mt-3">
          			      <a href={`/artikel/${article.id}`}>
          			      <img src={handsWithSign} className="w-full h-[9em] object-cover object-top rounded-lg"/>
          			      <div className="flex flex-col justify-between align-middle p-3">
          			        <h3 className="text-lg font-medium">{article.title}</h3>
          			        
          			        <div className="flex gap-3">
          			          <span className="text-gray-600 text-sm">{article.author}</span>
          			          <span className="text-gray-400 text-sm">{article.date}</span>
          			        </div>
          			      </div>
          			      </a>
          			      </div>
          			    ))}
          			    </div>
          			  </div>
          			</div>
          			<div className="flex flex-col gap-3">
          			  <div className="flex flex-row justify-between items-center">
          			    <h1 className="text-lg font-medium">Belajar Lewat Video</h1>
          			  </div>
          			  <div className="flex flex-col gap-2 w-full overflow-auto">
          			    {video.map(vid=>(
          			      <div className="w-full rounded-lg">
          			      {MarkupFrame(vid.link)}
          			      <div className="mt-3 flex flex-col justify-between align-middle">
          			        <a href={vid.link} className="font-medium">{vid.title}</a>
          			        <div className="text-xs mt-2 flex items-center gap-2">
          			          <IconBrandYoutubeFilled className="w-4 text-red-500"/>
          			          <a href={vid.link} className="hover:text-red-500">{vid.author}</a>
          			        </div>
          			      </div>
          			      </div>
          			    ))}
          			  </div>
          			</div>
        		</div>
    		</div>
    	<Footer/>
    	</div>
	</>

	)
}