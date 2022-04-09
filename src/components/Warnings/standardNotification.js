import React,{useEffect, useState, useRef} from 'react';
import { SvgSuccess,SvgBtnClose,SvgBtnCloseRed,SvgWarning } from "../../_helpers/IconesSvg";
import {
 // REJECTED_CANDIDATE,
  ERROR,
  NUMBER_CHARACTER ,
  SUCCESS
} from "../../_helpers/_constants";
import "../../assets/css/app/notification.css";

const NotificationIconesAndClassNames = {
  [ERROR]: {
    calloutClassName: "calloutMessage--error",
    contentClassName: "content-standard-notification-error",
    borderClassName: "border-right-error",
    infoIcone: SvgWarning(),
    cancelIcone: SvgBtnCloseRed(),
    progressBarClass: "progress-bar-error"
  },
  [SUCCESS]: {
    calloutClassName: "calloutMessage--success",
    contentClassName: "content-standard-notification-success",
    borderClassName: "border-right-success",
    infoIcone: SvgSuccess(),
    cancelIcone: SvgBtnClose(),
    progressBarClass: "progress-bar-success"
  },
};

export default function StandardNotification (props) {
   
    let { type, message, withBorder} = props;

    const { calloutClassName, contentClassName, borderClassName, infoIcone, cancelIcone,progressBarClass } = NotificationIconesAndClassNames[type] || {};
    const messageClassName = message?.length <= NUMBER_CHARACTER? "custom-message-normale": "custom-message-too-long";
    const [widthProgressBar,setWidthProgressBar] = useState(90)
    const widthProgressBarRef = useRef(widthProgressBar)
    const [isIn,setIsIn] = useState(false)
    const isInRef = useRef(isIn)
    useEffect(()=>{
      
      const actualWidth = setInterval(()=>{
        if(!isInRef.current){
          if(widthProgressBarRef.current >= 0){
            setWidthProgressBar(widthProgressBarRef.current - 0.45)
          }else{
            setWidthProgressBar(0)
             clearInterval(actualWidth)
          }
        }
      },50)
    },[])
   useEffect(()=>{
    widthProgressBarRef.current = widthProgressBar
   },[widthProgressBar])

   useEffect(()=>{
    isInRef.current = isIn
  },[isIn])

    
    return (
      <div className={calloutClassName} onMouseEnter={()=>setIsIn(true)} onMouseLeave={()=>setIsIn(false)}>
        <div className="notification_mobile">
          <div className={`${contentClassName} center_content`}>
            {withBorder ? <div className={borderClassName}></div> : ''}

            <div className="content-notification d-flex">
              <div>
                {type ? (
                  <div className="info-img">
                    {/* <img
                      src={infoIcone}
                      alt="icon-Info"
                    /> */}
                    {infoIcone}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="d-flex justify-content-end content-message">
                <div className="d-flex justify-content-between content-between">
                  <span className={`regular ${messageClassName}`}>{message}</span>
                  <div className="info-img">
                      {/* <img src={cancelIcone} alt="icon-Info" /> */}
                      {cancelIcone}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='progress-bar-success' style={{width:`${widthProgressBar}%`}}>
          </div>
        </div>
        <div className="notification_desktop">
          <div className={`${contentClassName} center_content`}>
            {withBorder ? <div className={borderClassName}></div> : ''}

            <div className="content-notification d-flex">
              <div>
                {type ? (
                  <div className="info-img">
                    {/* <img
                      src={infoIcone}
                      alt="icon-Info"
                    /> */}
                    {infoIcone}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="d-flex justify-content-end content-message">
                <div className="d-flex justify-content-between content-between">
                  <span className={`regular ${messageClassName}`}>{message}</span>
                  <div className="info-img">
                      {/* <img src={cancelIcone} alt="icon-Info" /> */}
                      {cancelIcone}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={progressBarClass} style={{width:`${widthProgressBar}%`}}>
          </div>
        </div>
      </div>
    );
  
}
