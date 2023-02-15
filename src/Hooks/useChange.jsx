function useChange (setHtml, setCss, setJS) {
  const handleHTML = (e) => {
    onkeyup = () => {
      setHtml(e)
    }
  }

  const handleCSS = (e) => {
    onkeyup = () => {
      setCss(e)
    }
  }

  const handleJS = (e) => {
    onkeyup = () => {
      setJS(e)
    }
  }

  return { handleHTML, handleCSS, handleJS }
}

export default useChange
