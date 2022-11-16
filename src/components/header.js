import { useState } from "react";

function Header() {
    const [name, setName] = useState("start")
    // const [userInput, setInput] = useState("")

    function handleClick() {
        // let newCount = count +1
        // setCount(newCount)
    }

    function handleChange(event) {
        console.log(event)
        // let newCount = count +1
        // setCount(newCount)
        setName(event.target.value)
    }

//props
//state
//useeffect

    return (
        <div className="header">
            <div>{name}</div>
            <h1>
                This is my great header
            </h1>
            <button onClick={handleClick}>click me</button>
            <form>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
}

export default Header;