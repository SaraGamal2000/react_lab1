import React,{useState} from 'react';
import './skill.css';


function Skill (){
    const [pers,setpers]=useState(50);
    const [pers1,setpers1]=useState(70);
    const [pers2,setpers2]=useState(20);
    const [pers3,setpers3]=useState(45);
    const [pers4,setpers4]=useState(55);
    const [pers5,setpers5]=useState(80);
    const [pers6,setpers6]=useState(15);
    const [pers7,setpers7]=useState(77);
return(
< >
<div className="skill">
    
        <div className='title2'>
            <h1>Skills</h1>
        </div>
        <div>
                <p className="p">
                    A well-organized paragraph supports or develops 
                    a single controlling idea, which is expressed in 
                    a sentence called 
                    the topic sentence. A topic sentence has several
                    important functions: it substantiates or supports
                    an essay’s thesis
                    statement; 
                </p>   
        </div>
        <div className='skilldiv'>
                <div className='s1'>
                    <div className='ss1'>c++</div>
                    <div className='col1' style={{ width:`${pers}%`, backgroundColor:pers === 50 ? "orange" : "red"}}></div>
                </div>
                <div className='s1'>
                    <div className='ss1'>c#</div>
                    <div className='col2' style={{ width:`${pers1}%`, backgroundColor:pers1 > 50 ? "green" : "red"}}></div>
                </div>
                <div className='s1'>
                    <div className='ss1'>python</div>
                    <div className='col3' style={{ width:`${pers2}%`, backgroundColor:pers2 > 50 ? "green" : "red"}}></div>
                </div>
                <div className='s1'>
                    <div className='ss1'>java</div>
                    <div className='col4' style={{ width:`${pers3}%`, backgroundColor:pers3 > 50 ? "green" : "red"}}></div>
                </div>
                <div className='s1'>
                    <div className='ss1'>solidity</div>
                    <div className='col5' style={{ width:`${pers4}%`, backgroundColor:pers4 > 50 ? "green" : "red"}}></div>
                </div>
                <div className='s1'>
                    <div className='ss1'>html</div>
                    <div className='col6' style={{ width:`${pers5}%`, backgroundColor:pers5 > 50 ? "green" : "red"}}></div>
                </div>
                <div className='s1'>
                    <div className='ss1'>css</div>
                    <div className='col7' style={{ width:`${pers6}%`, backgroundColor:pers6 > 50 ? "green" : "red"}}></div>
                </div>
                <div className='s1'>
                    <div className='ss1'>js</div>
                    <div className='col8' style={{ width:`${pers7}%`, backgroundColor:pers7 > 50 ? "green" : "red"}}></div>
                </div>
        </div>
    </div>
</>
);
}
export default Skill;