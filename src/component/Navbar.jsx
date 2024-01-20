import { useState } from 'react'
import { IconArrowLeft } from '@tabler/icons-react';
import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

export default function({title}){
	const navigate = useNavigate();
  return (
  <>
  </>
  // <>
	// <a className="flex flex-row justify-start items-center w-full fixed top-0 z-10 bg-white shadow-lg p-1 cursor-pointer" onClick={()=>navigate(-1)}>
	// 	<span className="focus:rounded-full focus:bg-orange-300 p-2"><IconArrowLeft/></span>
	// 	<h1 className="text-sm font-medium">{title}</h1>
	// </a>
	// </>
    )
}    
