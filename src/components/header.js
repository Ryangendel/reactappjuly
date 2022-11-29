import { useState, useEffect } from "react";
import CountComponent from "./countComponent";
import Joke from "./joke"
import axios from "axios"

function Header() {
    const [name, setName] = useState("start")
    // const [userInput, setInput] = useState("")
    const [dog, setDog] = useState({name:"runa", age:4, breed:"pit"})
    const [joke, setJoke] = useState("")


    useEffect(()=>{
        // fetch("https://api.chucknorris.io/jokes/random")
        // .then(data => {
        //     console.log("-----------")
        //     console.log(data)
        //     console.log("-----------")
        //     return data.json()
        // })
        // .then(cleanedData => {
        //     console.log(cleanedData.value)
        // })

        axios.get("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            //console.log(response.data.value);
            setJoke(response.data.value)
        });
    },[])

    function handleClick() {
       // let num = count + 1
//        setCount(num)
    }

    function handleChange(event) {
        // console.log(event)
        // let newCount = count +1
        // setCount(newCount)
       setName(event.target.value)
    }

//props
//state
//useeffect
    return (
        <div className="header">
            <Joke joke={joke}/>
            <div>{name}</div>
            <h1>
                This is my great header
                <br/>
                {/* {name:"runa", age:4, breed:"pit"} */}
                <CountComponent dog={dog} />
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
            <div>{joke}</div>
        </div>
    );
}

//BAD CODE IS REPEATING YOURESELF

export default Header;
