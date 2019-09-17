import React from 'react';

const ProgressBar = ({percentage}) => {

    const progressBar = () => {
        if(percentage <= 35) return 'low';
        if(percentage > 35 && percentage <= 65) return 'medium';
        if(percentage > 65 && percentage <= 85) return 'mediumTwo';
        else return 'high';
    }

    return(
        <h4>{percentage > 100 && percentage !== Infinity
                ? (
                    <div>
                        <span className="exp">Your outgoings are {percentage - 100}% higher than income</span>
                        <div className="progressBar">
                            <div className="high" style={{"width" : "100%"}}></div>
                        </div>
                    </div>
                )  
                : percentage > 0 && percentage !== Infinity
                ? (
                    <div>
                        <span>Total spent: {percentage}%</span>
                            <div className="progressBar">
                                <div className={progressBar()} style={{"width" : `${percentage}%`}}></div>
                            </div>
                    </div>
                )  
                : ""
            }
        </h4>
    )
}


export default ProgressBar;