import { useState, useEffect } from 'react';
import { IconHome, IconAbc, IconNotebook, IconLanguage, IconUserCircle,IconDeviceGamepad2 } from '@tabler/icons-react';

export default function Footer({activePath}) {
  const [homeActive, setHomeActive] = useState(false);
  const [belajarActive, setBelajarActive] = useState(false);
  const [hurufActive, setHurufActive] = useState(false);
  const [terjemahActive, setTerjemahActive] = useState(false);
  const [profilActive, setProfilActive] = useState(false);
  const [kuisActive, setKuisActive] = useState(false);

  useEffect(() => {
    const currentPathname = window.location.pathname;

    if(activePath == "belajar"){
      setBelajarActive(true)
    }else{
      setHomeActive(currentPathname === '/');
      setBelajarActive(currentPathname === '/belajar');
      setHurufActive(currentPathname === '/belajar/huruf');
      setTerjemahActive(currentPathname === '/terjemah');
      setProfilActive(currentPathname === '/profil');
      setKuisActive(currentPathname === '/kuis');
    }
  }, []);

  return (
    <div className="flex justify-center items-center gap-5 p-2 mb-4 rounded-full bg-white ring-1 ring-[#fafafa] shadow-lg bottom-0 fixed">
      <a className={`p-2 rounded-full focus:bg-orange-300 ${homeActive && 'bg-orange-300'}`} href="/"><IconHome /></a>
      <a className={`p-2 rounded-full focus:bg-orange-300 ${hurufActive && 'bg-orange-300'}`} href="/belajar/huruf"><IconAbc /></a>
      <a className={`p-2 rounded-full focus:bg-orange-300 ${belajarActive && 'bg-orange-300'}`} href="/belajar"><IconNotebook /></a>
      <a className={`p-2 rounded-full focus:bg-orange-300 ${kuisActive && 'bg-orange-300'}`} href="/kuis"><IconDeviceGamepad2 /></a>
      <a className={`p-2 rounded-full focus:bg-orange-300 ${terjemahActive && 'bg-orange-300'}`} href="/terjemah"><IconLanguage /></a>
    </div>
  );
}
