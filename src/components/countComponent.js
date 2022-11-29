
function CountComponent(props) {
    console.log(props.dog?.age)
  return (
    <div className="count">
     <h1>
        {props.dog?.testing}
     </h1>
    </div>
  );
}

export default CountComponent;