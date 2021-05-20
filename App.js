import React, { useState } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";

function App() {
    const [result, setResult] = useState("");
    

    const onClick = button => {

        if(button === "="){
            calculate()
        }

        else if(button === "C"){
            resetCalc()
        }
        else if(button === "CE"){
            backspace()
        }

        else {
            setResult(
               result + button
            )
        }
    };


    const calculate = () => {
        var finalResult = ''
        
        finalResult = result
        

        try {
            setResult(
                (eval(finalResult)) 
            )
        } catch (e) {
            setResult(
                "error"
            )

        }
		
    };

    const resetCalc = () => {
        setResult(
            ""
        )
    };

    const backspace = () => {
        setResult(
            result.slice(0, -1)
        )
    };

    return (
        <div>
            <div className="calculator-body">
                <h1>D's Calc!</h1>
                <ResultComponent result={result}/>
                <KeyPadComponent onClick={onClick}/>
            </div>
        </div>
    );
}

export default App;
