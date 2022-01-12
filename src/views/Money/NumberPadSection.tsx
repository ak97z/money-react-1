import React, {useState} from 'react';
import {Wrapper} from './NumberPad/Wrapper';
import {generateOutput} from './NumberPad/generateoutput';


const NumberPadSection: React.FC = () => {
    const [output, _setOutput] = useState('0');
    const setOutput = (output: string) => {
        if (output.length >= 16) {
            output = output.slice(0, 16);
        } else if (output.length === 0) {
            output = '0';
        }
        _setOutput(output);
    };
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return;
        }
        if (text === 'ok') {
            //todo
            return;
        }
        if ('1234567890.'.split('').concat(['del', 'clear']).indexOf(text) >= 0) {
            setOutput(generateOutput(text, output));
        }
    };
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>

            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>del</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>clear</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">ok</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>

        </Wrapper>
    );
};

export {NumberPadSection};