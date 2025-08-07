import Header from "./components/Header"
import Content from "./components/Content";
import Footer from "./components/Footer";
import quran from '../node_modules/quran-json/dist/quran_en.json';
import { useState, useEffect, useRef } from "react";

function App() {
  const [instruction, setInstruction]=useState("Click Anywhere or Press Space to find a random Ayah.");
  const [ayah, setAyah]=useState("Those to whom We have given the Book recite it with its true recital. They [are the ones who] believe in it. And whoever disbelieves in it - it is they who are the losers.");
  const [ayahDescription, setAyahDescription]=useState("--Surah Al-Baqarah - 121");

  const intervalRef = useRef(null);

     useEffect(() => {
    function handleClick() {
      handleEvent();
    }

    function handleKeyDown(e) {
      if (e.code === "Space") {
        e.preventDefault();
        handleEvent();
      }
    }

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalRef.current);
    };
  }, []);

  function handleEvent() {
      if (!intervalRef.current) {
      setInstruction("Click or Press Space Again to Stop.");
      intervalRef.current = setInterval(() => {
        const randomSurah = quran[Math.floor(quran.length * Math.random())];
        const randomAyah = randomSurah.verses[Math.floor(randomSurah.verses.length * Math.random())];
        setAyah(randomAyah.translation + ".");
        setAyahDescription("--Surah " + randomSurah.transliteration + " - " + randomAyah.id);
      }, 100);
    } else {
      setInstruction("Click Anywhere or Press Space to find a random Ayah.");
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }


  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
    <Header />
    <Content ayah={ayah} ayahDescription={ayahDescription} instruction={instruction}/>
    </main>
    <Footer />
    </div>
  );
}

export default App;


// const quran = require('./node_modules/quran-json/dist/quran_en.json');

// console.log(quran[113]);