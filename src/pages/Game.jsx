import { useState } from 'react'
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import BISINDO_LETTER from "../component/BISINDO.jsx"
import SIBI_LETTER from "../component/SIBI.jsx"

export default function(){
	let [started, setStart] = useState(false)
	let [currentQuestion,setCurrentQuestion] = useState(null)
	let [answer, setAnswer] = useState(false)
	let [bahasa, setBahasa] = useState('BISINDO')
	const handleBahasaChange = (event) => {
    	setBahasa(event.target.value);
  	};
	let allQuestion = []
	function generate(){
		let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		let random = Math.floor(Math.random()*huruf.length)
		let current = huruf[random]
		let isyarat = bahasa=="BISINDO"?BISINDO_LETTER[huruf[random]]:SIBI_LETTER[huruf[random]]
		allQuestion.push({
			id:random,
			isyarat,
			answer:huruf[random]
		})
	}
	function captureAnswer(answer){
		setAnswer(`${currentQuestion.answer}`==`${answer.toUpperCase()}`)
	}
	function startGame(ev){
		setStart(true)
		generate()
		setCurrentQuestion(allQuestion[0])
	}

	function nextQuestion(){
		if(answer){
			alert("Benar")
			setAnswer(false)
			startGame()
		}else{
			alert("Salah, coba lagi")
		}
	}
	return (
		<>
		{/*<Navbar title="Game"/>*/}
		<div className="flex flex-col items-center justify-center">
			<div className="w-full lg:w-4/12 shadow-lg">
				<div className={`bg-blue-500 h-screen ${started?"hidden":"flex flex-col"} justify-center items-center`}>
					<h1 className="text-xl font-bold text-white p-5 text-center">Latih Kemampuan Bahasa Isyaratmu disini!</h1>
					<select className="bg-orange-200 p-1 rounded-full border-2 border-orange-300" onChange={handleBahasaChange}>
  	  					<option value="BISINDO">BISINDO</option>
  	  					<option value="SIBI">SIBI</option>
	  	  			</select>
					<button className="bg-orange-300 p-2 pr-5 pl-5 rounded-2xl mt-3" onClick={startGame}>Mulai!</button>
				</div>
				{started?(
				<div className="h-screen bg-orange-300 flex flex-col items-center">
					<div className="bg-white shadow rounded-2xl mt-11">
						<img src={currentQuestion.isyarat} width={300} className="rounded-2xl mirror"/>
					</div>
					<div className="mt-5 flex flex-col items-center gap-3">
						<h1 className="text-xl font-medium">Huruf apakah ini?</h1>
						<input type="text" className="p-3 border-2 border-black w-80 rounded-lg text-black" placeholder="Masukkan jawaban disini" maxlength={1} onInput={(ev)=>captureAnswer(ev.target.value.toLowerCase())}/>
						<button className="p-3 bg-blue-500 rounded text-white" onClick={nextQuestion}>Jawab</button>
					</div>
				</div>
				):""}
			</div>
			<Footer/>
		</div>
		</>
	)
}