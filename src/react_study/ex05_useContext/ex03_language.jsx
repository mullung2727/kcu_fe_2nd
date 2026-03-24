import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext()

export default function LangComp() {
  // const val = useState('ko');
  // const lang = val[0];
  // const setLang = val[1]
  const [lang, setLang] = useState("ko"); 
  const value = {lang, setLang}
  // const value = {lang:lang, setLang:setLang}
  return (
    // TODO: Provider 내부에 <Header />, <Main />, <Button />를 렌더링하세요.
    // TODO: Provider로 lang, setLang을 공유하세요
    <LanguageContext.Provider value={value}>
      <Header />
      <Main />
      <Button />
    </LanguageContext.Provider>

  );
}

function Header() {
  const {lang} = useContext(LanguageContext)
  // const lang = value.lang
  return <h1>{lang === "ko" ? "내 웹사이트" : "My Website"}</h1>
}

function Main() {
  // TODO:  lang이 'ko'면 "안녕하세요", 아니면 "Hello"를 렌더링하세요.
  const {lang} = useContext(LanguageContext)
  return <p>{lang === "ko" ? "안녕하세요" : "Hello"}</p>

}

function Button() {
  const {lang, setLang} = useContext(LanguageContext)
  // const setLang = value.setLang
  // TODO: - lang이 'ko'면 버튼 라벨 "언어 변경", 아니면 "Change language"
  //       - toggleLanguage를 구현하세요. (힌트: setLang을 가져와서 쓰세요)
  const toggleLanguage = () => {
    setLang(prev=>{
      return prev === "ko" ? 'en' : 'ko';
    })
  }
  return (
    <button 
      onClick={toggleLanguage}
    >{lang==="ko" ? "언어 변경" : "Change language" }
    </button>
  )
}
