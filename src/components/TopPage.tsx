import React, {useState} from 'react'
import { TextInput } from './TextInput'
import { RadioInput } from './RadioInput';
import { SubmitButton } from './SubmitButton';
import { ShowState } from './ShowState';

const TopPage = () => {
    const [inputValue, setInputValue] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const [clickCount, setClickCount] = useState(0)
    const handleInputValue = (value: string) => {
        setInputValue(value);
        console.log(value)
    }

    const handleSelectedValue = (value: string) => {
        setSelectedValue(value)
    }

    const submit = () => {
        setClickCount(clickCount + 1)
    }
    return (
        <>
          <TextInput title='input' inputValue={inputValue} onChangeValue={handleInputValue} />
          <br></br>
          <RadioInput title='radio' selectedValue={selectedValue} onChangeValue={handleSelectedValue} />
          <br></br>
          <SubmitButton title='Click' onClick={submit} />
          <br></br>
          <ShowState inputValue={inputValue} selectedValue={selectedValue} clickCount={clickCount} />
        </>
    )
}

export default TopPage
