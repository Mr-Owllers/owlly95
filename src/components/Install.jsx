import { Appwiz1502 } from '@react95/icons'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export default function Install() {
    const [progress, setProgress] = useState(0);
    const [loading, isLoading] = useState(false);
    const [hidden, isHidden] = useState('none');
    const [pbcolour, setPbcolour] = useState("#000");

    function ProgressBar(){
        useEffect(() => {
            if (progress < 100 && loading) {
                if (progress < 75 && loading) {
                    setTimeout(() => {
                        setProgress(progress + 1)
                    }, Math.random() * 100)
                }
                if (progress === 50 && loading) {
                    setPbcolour("#fff")
                }
                if (progress >= 75 && loading) {
                    setTimeout(() => {
                        setProgress(progress + 1)
                    }, Math.random() * 500)
                }
            }
        }, [progress, loading]);

        if (progress === 100) {
            if (select.value === '0') {
                window.location.href = '/en';
            }
            if (select.value === '1') {
                window.location.href = '/es';
            }
        }

        return (
            <div className="progress-bar" style={{ display: `${hidden}` }}>
                <div className="progress" style={{ width: `${progress}%` }}></div>
                <div className="text" style={{ color: `${pbcolour}` }}>{progress}%</div>
            </div>
        );
    }

    const options = [
        { value: '0', label: 'English' },
        { value: '1', label: 'Español' }
    ];

    const [select, setSelect] = useState(options[0]);
    function handleChange(option) {
        setSelect(option);
    }

    return (
        <div className='install_screen'>
            <div className="window" id="install">
                <div className="header">
                    <div className="title">Choose a Setup Language</div>
                </div>
                <div className="main">
                    <Appwiz1502 variant="32x32_4" />
                    <p>Select the language for this installation from the choices below.</p>
                </div>
                <div className="input">
                    <Select
                        options={options}
                        unstyled
                        className='select-box'
                        classNamePrefix='select'
                        isSearchable={false}
                        defaultValue={options[0]}
                        onChange={(option) => handleChange(option)}
                    />
                    <button className="btn" onClick={() => {
                        {
                            isLoading(true);
                            isHidden('block');
                        }
                    }}>Ok</button>
                </div>
            </div>
            <ProgressBar />
        </div>
    );
}