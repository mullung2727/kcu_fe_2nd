import debounce from "lodash.debounce";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function SearchBox() {
  const [text, setText] = useState("");
  // const debouncedSearch = useMemo(
  //   ()=> {
  //     return debounce((value)=> {
  //     console.log("API 요청: ", value)
  //   }, 500)
  //   }
  //   ,[]
  // )
  const debouncedSearch = debounce((value)=> {
      console.log("API 요청: ", value)
    }, 500)
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    debouncedSearch(value);
  }

  useEffect(()=>{
    return () => {
      debouncedSearch.cancel();
    }
  }, [debouncedSearch])
  return <input type="text" onChange={handleChange}/>
}