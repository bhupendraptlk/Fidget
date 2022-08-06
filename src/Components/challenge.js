import React, {useState} from 'react';


const Challenge = ()=>{
  const [time,setTime]=useState(10);
  const [sec,setSec]=useState(0);
  const [value,setValue]=useState(0);
  const [notAllowed,setNotAllowed]=useState(true);
  const [flag,setFlag]=useState(false);
  const [highest,setHighest]=useState(value);

  if(sec===time && highest<value){
    setHighest(value);
  }

  // useEffect(() => {
  //     setTimeout(() => {
  //       sec < 10 ? setSec(sec + 1) : ( setSec(sec) )
  //     }, 1000);
  // },[notAllowed]);

  const challengeAccepted = ()=>{
    setTimeout(() => {
      setNotAllowed(false);
      setFlag(false);
    }, 2000);
  } 

  const restartChallenge = () =>{
    setValue(0);
    setSec(0);
  }
  if(notAllowed===false){
    if(sec===time){
      setNotAllowed(true);
    }
    setTimeout(() => {
      sec < time ? setSec(sec + 1) : ( setSec(sec))
    }, 1000);
  }
  
  const showToolTip = () =>{
    (!flag && notAllowed)  ? setFlag(true) : setFlag((flag)=>flag);
  }

  const removeToolTip = () =>{
    (flag && notAllowed) ? setFlag(false) : setFlag((flag)=>flag);
  }
//To do: continue to change color from green to red when the timer starts
  return(
      <>
        <div className="container">
            <div className="challengeOuter">
              <div className="challengeText">Let's see how many times you can click the button in {time} seconds</div>
                <div className='challengeInner'>
                  <div className="setTimer">
                    <button type="button" className={ notAllowed ? 'setTimerActive' : 'setTimerInactive' } onClick={()=>{ time>1 ? setTime(time-1) : setTime(time)}} disabled={!notAllowed}>-</button>
                    <h4>{time} seconds</h4>
                    <button type="button" className={ notAllowed ? 'setTimerActive' : 'setTimerInactive' } onClick={()=>{setTime(time+1)}} disabled={!notAllowed}>+</button>
                  </div>
                  <div className='challengeSection'>
                    <button type="button" className= {notAllowed? 'readyBtnActive' : "readyBtnInactive"} onClick={challengeAccepted} onMouseOver={showToolTip} onMouseOut={removeToolTip} name="Ready" disabled={!notAllowed}>I am ready</button>
                    <span className={flag ? "readyToolTipAct" : "readyToolTip"}>Timer will start 2 second after clicking this button</span>
                    <button type="button" className={ notAllowed ? 'clickBtnInactive' : 'clickBtnActive' } onClick={()=>setValue(value + 1)} disabled={notAllowed}>Click Me</button>
                    <div className="challengeTimeValue">
                      <div>{sec} seconds have passed..</div>
                      <div className='challengeValue'>Count : {value}</div>
                    </div>
                    <button type="button" className={ notAllowed ? 'challengeRestartActive' : 'challengeRestartInactive' } onClick={restartChallenge} disabled={!notAllowed}>Restart</button>
                  </div>
                  <h4 className='highestScore'>Highest score : {highest}</h4>
                </div>
            </div>
        </div>
      </>
  );
}
export default Challenge;