import React, {ChangeEvent, useEffect, useState} from 'react';

type CounterType = {
    count?: number
}

export const Counter: React.FC<CounterType> = ({count}) => {
    const [startValue, setStartValue] = useState<number>(count || 0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [value, setValue] = useState<number>(startValue)

    const inc = () => {
        setValue(value + 1)
    }
    const dec = () => {
        setValue(value - 1)
    }
    const res = () => {
        setValue(startValue)
    }

    const onNewStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = e.currentTarget.valueAsNumber
        setStartValue(newStartValue)
    }
    const onNewMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = e.currentTarget.valueAsNumber
        setMinValue(newMinValue)
    }
    const onNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.currentTarget.valueAsNumber
        setMaxValue(newMaxValue)
    }
    useEffect(() => {
        setValue(startValue)
    }, [startValue])

    if (minValue > startValue) {
        setMinValue(startValue)
    }

    if (maxValue < startValue) {
        setMaxValue(startValue)
    }

    return (
        <div style={{display: 'inline-block'}}>
            start
            <input type="number" onChange={onNewStartValue} value={startValue}
                   style={{width: '40px'}}/>
            min
            <input type="number" onChange={onNewMinValue} value={minValue}
                   max={startValue} style={{width: '40px'}}/>
            max
            <input type="number" onChange={onNewMaxValue} value={maxValue}
                   min={startValue} style={{width: '40px'}}/>
            <button onClick={dec} disabled={value <= minValue}>-</button>
            <button onClick={inc} disabled={value >= maxValue}>+</button>
            <button onClick={res}>res</button>
            counter: {value}
        </div>
    );
}
