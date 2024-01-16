import { useState } from 'react'
import { IconArrowLeft,IconCards,IconArrowNarrowRight,IconHelpCircleFilled,IconX } from '@tabler/icons-react';
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import BISINDO_LETTER from "../component/BISINDO.jsx"
import SIBI_LETTER from "../component/SIBI.jsx"

export default function(){
	let [bahasa, setBahasa] = useState('BISINDO')
	let [abjadTarget, setAbjadTarget] = useState("")
	let [modal, setModal] = useState(false)
	let [mirror, setMirror] = useState(false)
	const handleBahasaChange = (event) => {
    setBahasa(event.target.value);
  };

	let abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
	return (
	<>
    <Navbar title="Mengenal Alfabet"/>

		<div className={`z-10 bg-white fixed w-full h-screen p-5 ${modal?"top-0":"top-[100%]"} border-t transition-all ease-linear delay-200 overflow-x-scroll`}>
			<div className="flex flex-col items-center gap-3">
  	  	<select className="bg-orange-200 p-3 rounded-full border-2 border-orange-300" onChange={handleBahasaChange}>
  	  		<option value="BISINDO">BISINDO</option>
  	  		<option value="SIBI">SIBI</option>
	  	  </select>
			<h1 className="text-2xl font-medium">Huruf {abjadTarget}</h1>
      { bahasa == "BISINDO"? 
	      <img src={BISINDO_LETTER[abjadTarget]} className={`w-[40em] lg:w-[30%] bg-orange-300 rounded-t-full ${mirror?"mirror":"unmirror"}`}/> :
	      <img src={SIBI_LETTER[abjadTarget]} className={`w-[40em] lg:w-[30%] bg-orange-300 rounded-t-full ${mirror?"mirror":"unmirror"}`}/>
	    }
			<button onClick={()=>setMirror(!mirror)} className="border-2 border-blue-500 font-medium text-blue-500 w-[100%] lg:w-[30%] rounded-full p-3 active:bg-blue-200">Balik Gambar</button>
			<button onClick={()=>{setModal(false);setMirror(false)}} className="bg-blue-500 font-medium text-white w-[100%] lg:w-[30%] rounded-full p-3">Lihat Huruf Lain</button>
			<br/>
	    </div>
		</div>

    <div className="bg-blue-500 flex flex-col items-center justify-center pt-10 pb-20">
  	  <div className="flex flex-col justify-center gap-3 mb-3">
  	  	<select className="bg-orange-200 p-3 rounded-full border-2 border-orange-300" onChange={handleBahasaChange}>
  	  		<option value="BISINDO">BISINDO</option>
  	  		<option value="SIBI">SIBI</option>
	  	  </select>
	  	  <a className="flex gap-2 justify-center align-middle items-center text-sm text-white" href="#">
	  	  	<a href={`/belajar/${bahasa.toLowerCase()}`}>Apa itu {bahasa}?</a>
	  	  	<IconHelpCircleFilled size={18}/>
	  	  </a>
	    </div>
    	<div className="flex flex-wrap gap-3 justify-center md:w-7/12">
        {abjad.map(abjad=>(
          <div onClick={()=>{setAbjadTarget(abjad);setModal(true)}} className="flex flex-col items-center justify-center h-[13em] border-2 border-black bg-white rounded-lg active:bg-orange-100" key={abjad}>
	          <p className="mt-6 text-xl">{abjad}</p>
	          { bahasa == "BISINDO"? 
	          	<img src={BISINDO_LETTER[abjad]} className="w-[12em] -translate-y-5"/> :
	          	<img src={SIBI_LETTER[abjad]} className="w-[12em] -translate-y-5"/>
	          }
          </div>
        ))}
			</div>
		<Footer/>
		</div>
	</>
	)
}