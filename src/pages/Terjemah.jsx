import { useState,useRef,useEffect } from 'react'
import Footer from "../component/Footer.jsx"
import Navbar from "../component/Navbar.jsx"
import BISINDO_LETTER from "../component/BISINDO.jsx";
import SIBI_LETTER from "../component/SIBI.jsx";

export default function(){
  const canvasRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [huruf, setHuruf] = useState([])
  const [kalimat, setKalimat] = useState([])
  const [time, setTime] = useState(500)
  const [bahasa, setBahasa] = useState('BISINDO')
  const [isPlaying, setIsPlaying] = useState(false);
  const selectInput = useRef(null)

  const userInput = (ev) => {
    setCurrentIndex(0)
    setIsPlaying(false)
    let value = ev.target.value
    let val = value.replace(/[^a-zA-Z]/g, '').split("")
    if(bahasa == "BISINDO"){
    	setKalimat(val.map(x=>BISINDO_LETTER[x.toUpperCase()]))
    }else{
    	setKalimat(val.map(x=>SIBI_LETTER[x.toUpperCase()]))
    }
    setHuruf(val.map(x=>x.toUpperCase()))
  }

  const playCanvas = () => {
    if(isPlaying){
      setIsPlaying(false)
    }else{
      setIsPlaying(!isPlaying);
      if(kalimat.length == currentIndex+1){
        //restart
        setCurrentIndex(0);
      }else{
        //dari posisi berhenti
        setCurrentIndex(currentIndex);
      }
      setBahasa(selectInput.current.value)
      if(bahasa == "BISINDO"){
      	setKalimat(huruf.map(x=>BISINDO_LETTER[x.toUpperCase()]))
      }else{
      	setKalimat(huruf.map(x=>SIBI_LETTER[x.toUpperCase()]))
      }
    }
  };

  const playAlphabet = (abjad) =>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  	const img = new Image();
    if(bahasa == "BISINDO"){
    	img.src = BISINDO_LETTER[abjad];
    }else{
    	img.src = SIBI_LETTER[abjad];
    }
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }

  const adjustTime = (ev) =>{
  	let ms = ev.target.value
  	setTime(Number(ms))
  }

  const handleBahasaChange = (event) => {
    setBahasa(event.target.value);
  };

  useEffect(() => {
    if (isPlaying) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let intervalId;

      const drawImage = () => {
        const img = new Image();
        img.src = kalimat[currentIndex];

        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          // ctx.font = '25px Arial';
          // ctx.fillStyle = 'black';
          // ctx.fillText(huruf[currentIndex], 30, 30);
          document.querySelector(`#huruf${currentIndex}`).classList.add("bg-orange-300")
          const nextIndex = currentIndex + 1;
          if (nextIndex < kalimat.length) {
            setCurrentIndex(nextIndex);
          } else {
            setIsPlaying(false);
            clearInterval(intervalId);
          }
        };
      };

      intervalId = setInterval(drawImage, time);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, isPlaying, kalimat]);

return (
	<>
		<Navbar title="Kalimat ke Bahasa Isyarat"/>
    	<div className="flex flex-col items-center justify-center">
    		<div className="flex flex-col gap-3 bg-white p-5 shadow-xl">
    		<h1 className="font-bold text-xl">Kalimat ke Bahasa Isyarat</h1>
				<div className="w-80 bg-blue-200 rounded p-3">
    				<p>Saat ini hanya bisa menerjemahkan huruf atau abjad</p>
    			</div>
    			<canvas className="border-2 border-gray-300 rounded-lg mirror" height={200} width={200} ref={canvasRef}></canvas>
      			<div className="flex flex-wrap w-80 h-32 overflow-y-scroll border">
      			  {huruf.map((letter,pos)=>
      			    <button className="w-10 h-10 p-1 text-center active:bg-orange-600" id={`huruf${pos}`} onClick={()=>playAlphabet(letter)}>{letter}</button>
      			    )}
      			</div>
  	  			<select className="bg-orange-200 p-2 rounded-full border-2 border-orange-300" onChange={handleBahasaChange} ref={selectInput}>
  	  				<option value="BISINDO">BISINDO</option>
  	  				<option value="SIBI">SIBI</option>
	  	  		</select>
    			<div className="flex gap-3">
    				<input type="range" className="w-[70%]" step={500} min={500} max={3000} onChange={adjustTime}/>
    				<p>{time/1000} detik</p>
    			</div>
    			<input type="text" className="p-3 border-2 border-gray-300 w-80 rounded-lg" placeholder="Masukkan kalimat disini" onInput={userInput} autoFocus/>
    			<button className={`${!isPlaying?"bg-blue-500 text-white ":"bg-white text-blue-500 border border-blue-500"} p-3 w-80 rounded-lg mb-16`} onClick={playCanvas}>{!isPlaying?"Terjemahkan":"Berhenti"}</button>
    		</div>
			<Footer/>
		</div>
	</>

	)
}