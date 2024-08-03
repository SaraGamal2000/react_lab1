import React from 'react';
import './about.css';
function About(){
    const onButtonClick = () => {
        const pdfUrl = "cv.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "cv.pdf"; 
        document.body.appendChild(link);
        link.click();
       
    };
return(
< >
    <div className="first-div">
        <div className='title'>
              <h2>About me</h2>
        </div>
        <div className='text'>
            <div>
                <p>
                A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called 
                the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis
                statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of
                the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences
                in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic
                sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence
                before the topic sentence—for example, a sentence linking the current paragraph to the previous one, or one providing
                background information.
            
                </p>
            </div>
            <button onClick={onButtonClick} className='cv'>Download 
            
            </button>
        </div>
    </div>
</>
);}
export default About;

{/* <a href='./cv.pdf' download="CV.pdf">
CV File
</a> */}