import React, { useState }from 'react'
import ReactQuill from 'react-quill';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';


const Write = () => {
  const { quill, quillRef } = useQuill();
  const [value,setValue]=useState();
  
  
  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML)
      });
    }
  }, [quill]);

  console.log(value,"this is quill editor")


  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
        <div style={{ width: 720, height: 300 }}>
                <div ref={quillRef} />
            </div>         
        </div>
      
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
          <b>Visibility</b>  Public
         </span>  
         <input style={{display:"none"}}type="file" id="file" name=""/>
         <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>save as a Draft</button>
            <button>Publish</button>
            
          </div>
        </div>
        <div className="item">
        <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="art"
              id="art"
              
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
    
              name="cat"
              value="science"
              id="science"
              
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
          
              name="cat"
              value="technology"
              id="technology"
              
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
              
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="design"
              id="design"
              
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="food"
              id="food"
              
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write