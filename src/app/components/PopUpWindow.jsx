'use client';
import React, {useState, useEffect, useRef} from "react";
import styles from "../../app/main.css";
import randomCommentGenerator from "@/functions/passiveAggresiveComments";

function PopUpWindow({ popUpOption, setShowPopUp, showPopUp }) { 
    const [randomComment, setRandomComment] = useState(null)
    const timeLeftDivRef = useRef(null);

    useEffect(()=>{
        const generatedComment = randomCommentGenerator(popUpOption);
        setRandomComment(generatedComment.randomComment);
    },[showPopUp])
    useEffect(() => {
        if (timeLeftDivRef.current) {
            timeLeftCounter();
        }
    }, [timeLeftDivRef]); // Run when the ref is attached

    function hidePopUp(){
        setShowPopUp(false);
    }

    let widhtLeft = 100;
    function timeLeftCounter() {
        const widthChunk = 4;
        delay();
        const intervalId = setInterval(() => {
            if (timeLeftDivRef.current) {
                widhtLeft = widhtLeft - widthChunk;
                timeLeftDivRef.current.style.width = `${Math.max(0, widhtLeft)}%`;
            }

            if (widhtLeft <= 0) {
                clearInterval(intervalId);
            }
        }, 225);
    }

    function delay(){
        setTimeout(()=>{
            hidePopUp();
        }, 3500);
    }



return (
    <section className="popUpWindow" style={styles.page}>
        <h4>{randomComment}</h4>
        <div className="timeLeft" ref={timeLeftDivRef}></div>
    </section>
  );
}

export default PopUpWindow;