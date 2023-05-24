import React, { useRef } from 'react'

const Ex06 = () => {

    let pdfStyle = {
        width : '100%',
        height : '90%'
    }

    const iframeRef = useRef()
    

    const chPdf = () =>{
        if(iframeRef.current.src == 'http://localhost:3000/pdf/pdf1.pdf'){
            iframeRef.current.src = '/pdf/pdf2.pdf'
        }else{
            iframeRef.current.src = '/pdf/pdf1.pdf'
        }
    
    }

  return (
    <div style ={{height : "100vh"}}>
        <h3>오늘의 학습자료 
            <button onClick={chPdf}>변경</button>
        </h3>
        <iframe ref={iframeRef} style ={pdfStyle} src ='/pdf/pdf1.pdf'>
            
        </iframe>
    </div>
  )
}

export default Ex06