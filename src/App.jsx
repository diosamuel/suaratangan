import { useState } from 'react'
import { IconHome,IconAbc,IconNotebook,IconLanguage,IconUserCircle,IconBrandYoutubeFilled,IconDeviceGamepad2,IconCardsFilled } from '@tabler/icons-react';
import Footer from "./component/Footer.jsx"
import signA from "./assets/sign-A.png"
import logo from "./assets/logo.png"
import video from "./assets/video.json"
import handsWithSign from "./assets/hands-with-sign-language-freepik.jpg"
import groupSign from "./assets/rear-view-man-with-raised-hand-group-therapy-freepik.jpg"
import aslSign from "./assets/asl-freepik.jpg"
import './main.css'

function MarkupFrame(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    let videoId =  (match && match[2].length === 11) ? match[2] : null;

    return <iframe src={"https://www.youtube.com/embed/"+videoId} frameBorder="0"></iframe>;
}
    
function App() {
  const [count, setCount] = useState(0)
  const [boarding,setBoarding] = useState(true)

  let circleMenu=[{
    title:"Kalimat ke Isyarat",
    icon:<IconLanguage/>,
    href:"/terjemah"
  },{
    title:"Kamus Isyarat",
    icon:<IconAbc/>,
    href:"/belajar/huruf"
  },{
    title:"Kuis Isyarat",
    icon:<IconDeviceGamepad2/>,
    href:"/kuis"
  },{
    title:"Edukasi",
    icon:<IconNotebook/>,
    href:"/belajar"
  }]

  let articles=[{
    title:"Bahasa Isyarat: Pintu Menuju Komunikasi Inklusif",
    img:handsWithSign,
    href:"/belajar/artikel/1"
  },{
    title:"Perkenalan Diri dalam Bahasa Isyarat",
    img:groupSign,
    href:"/belajar/artikel/2"
  },{
    title:"ASL, Mengenal Bahasa Isyarat Amerika",
    img:aslSign,
    href:"/belajar/artikel/3"
  }]

  setTimeout(()=>{
    setBoarding(false)
  },600)
  return (
    <>
    {boarding?(
    <div className="flex flex-col items-center justify-center">
      <div className="bg-blue-500 w-full lg:w-4/12 h-[100vh] flex flex-col items-center justify-center text-white">
        <img src={logo}/>
        <h1 className="text-2xl font-black">SuaraTangan</h1>
        <p>Bangun dunia tanpa batasan suara!</p>
      </div>
    </div>):
    (
      <div className="flex flex-col items-center justify-center">
      <div className="bg-blue-500 w-full lg:w-4/12 shadow-md">
        <div className="p-6 text-white">
          <h1 className="text-2xl font-black">Selamat datang! 👋</h1>
          <p className="text-xl">Bangun dunia tanpa batasan suara!</p>
          {/*<img src={talkingAmico} className="w-60 ml-auto"/>*/}
        </div>
        
        <div className="bg-white p-5 flex flex-col gap-5 rounded-t-2xl">

          <div className="flex justify-between gap-3 overflow-x-auto">
              {circleMenu.map(menu=>(
                <a className="text-center flex flex-col items-center gap-2" href={menu.href}>
                  <div className="w-[4em] h-[4em] p-2 rounded-full bg-blue-100 text-blue-500 hover:shadow-lg flex justify-center items-center">
                  {menu.icon}
                  </div>
                  <p className="text-xs">{menu.title}</p>
                </a>
              ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <div className="flex flex-row justify-between w-full rounded-lg bg-blue-200">
                  <div className="p-5">
                    <p>Kuis Isyarat</p>
                    <h1 className="text-xl font-semibold">Huruf apakah ini?</h1>
                    <br/>
                    <a className="bg-blue-600 p-2 pr-5 pl-5 rounded-full border-2 border-black font-medium text-sm text-white" href="/kuis">Jawab</a>
                  </div>
                  <div>
                    <img src={signA} className="w-[12em]"/>
                  </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-lg font-medium">Belajar Lewat Video</h1>
              <a className="bg-orange-300 pr-3 pl-3 p-2 rounded-full border-2 border-black text-xs font-medium active:bg-orange-400" href="/belajar">Semua</a>
            </div>
            <div className="flex gap-2 w-full overflow-auto">
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

          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <div className="flex flex-row justify-between w-full rounded-lg bg-orange-200">
                  <div className="p-5">
                    <p>Terjemahkan</p>
                    <h1 className="text-xl font-semibold">Terjemahkan kalimat ke bahasa isyarat</h1>
                    <br/>
                    <a className="bg-orange-600 p-2 pr-5 pl-5 rounded-full border-2 border-black font-medium text-sm text-white" href="/terjemah">Coba</a>
                  </div>
                  <div>
                    <img src={logo} className="w-[15em]"/>
                  </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-lg font-medium">Artikel</h1>
              <a className="bg-orange-300 pr-3 pl-3 p-2 rounded-full border-2 border-black text-xs font-medium active:bg-orange-400" href="/belajar">Semua</a>
            </div>
            <div className="w-full overflow-auto">
            <div className="flex flex-row w-[50em] gap-3">
              {articles.map(article=>(
                <div className="w-[14em] h-full rounded-2xl border hover:shadow-lg">
                <a href={article.href}>
                <img src={article.img} className="w-full h-[9em] object-cover rounded-lg"/>
                <div className="flex flex-col justify-between align-middle p-3">
                  <h3 className="text-lg font-medium">{article.title}</h3>
                </div>
                </a>
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-[5em]">
            <span>Copyright &copy;2024 SuaraTangan</span>
          </div>

        </div>
      </div>
      <Footer/>
      </div>
    )}
    </>
  )
}

export default App
