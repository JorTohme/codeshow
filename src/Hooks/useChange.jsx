function useChange (setHtml, setCss, setJS) {
  const handleHTML = (e) => {
    setHtml(e.target.value)
  }
  const handleCSS = (e) => {
    setCss(e.target.value)
  }
  const handleJS = (e) => {
    setJS(e.target.value)
  }

  return { handleHTML, handleCSS, handleJS }
}

export default useChange
