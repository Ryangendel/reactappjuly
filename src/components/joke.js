function Joke(props) {
  return (
    <div className="joke">
     <h1>
         {props.joke}
     </h1>
    </div>
  );
}

export default Joke;