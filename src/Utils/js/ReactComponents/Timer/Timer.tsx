import { useEffect, useState } from "react";

export interface TimerParam {
    initialMilliSeconds: number;
    className?: string;
    callback?: () => void;
}

const Timer = ({className = "", callback, initialMilliSeconds}: TimerParam) => {
    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] =  useState(0);

    useEffect(() => {
        let _minutes = Math.floor((initialMilliSeconds / 1000) / 60);
        let _seconds = Math.floor((initialMilliSeconds / 1000) % 60);

        setMinutes(_minutes);
        setSeconds(_seconds);
    }, [initialMilliSeconds])

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds( prevState => prevState - 1 );
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (callback) {
                        callback();
                    }
                    clearInterval(myInterval)
                } else {
                    setMinutes( prevState => prevState - 1 );
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    }, [minutes, seconds, callback]);

    return (
        <>
        { minutes === 0 && seconds === 0
            ? null
            : <span className={className}>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</span> 
        }
        </>
    )
}

export {
    Timer
}