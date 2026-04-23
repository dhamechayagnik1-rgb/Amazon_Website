//ScoreCard 

let score = 0;
let wicket = 0;
let ballwise = [];
let hit = 0;
let input = React.createRef();
/*
function clickone(){
    score += 1;
    rootElement.render(<><App /></>);
}*/

function click(num) {
    /* if (wicket < 10) {
         ballwise.push(num)
         score += num
         
         //console.log(ballwise);
 
     }*/
    hit = num;
    rootElement.render(<><App /></>);
}
function wickets() {
    /*if (wicket < 10) {
        ballwise.push("w")
        wicket += 1
        
    }*/
    hit = "w";

    rootElement.render(<><App /></>);

}

const Result = () => (
    <div>
        {ballwise.map((ball, index) => (
            <>
                {index % 6 === 0 ? <br /> : null}
                <span key={index}>{ball === 0 ? <strong>.</strong> : ball}</span> &nbsp;&nbsp;
            </>))}
    </div>

)

function handleSubmit(event) {
    event.preventDefault();
    if (wicket < 10) {
        if (hit == "w") {
            wicket += 1;
        } else {
            score += hit;
        }
        ballwise.unshift(
        //<span>{hit}{','}{input.current.value}</span>
          <span>{`${hit},${input.current.value}`}</span>
        );
        hit = 0;
        input.current.value ='';
    }

    rootElement.render(<><App /></>);
}

const Form = () => (
    <form onSubmit={handleSubmit} >
        <input value={hit} />
        <input ref={input} />
        <button>submit</button>
    </form>
)

const Scorebuttons = () => (<div>
    <button onClick={() => click(0)}>0</button>
    <button onClick={() => click(1)}>1</button>
    <button onClick={() => click(2)}>2</button>
    <button onClick={() => click(3)}>3</button>
    <button onClick={() => click(4)}>4</button>
    <button onClick={() => click(5)}>5</button>
    <button onClick={() => click(6)}>6</button>
    <button onClick={wickets}>wicket</button>
</div>)

function App() {
    return (
        <>
            <h1>Score Keeper</h1>
            <h2>Score:{score}/{wicket}</h2>
            <Scorebuttons />
            <br />
            <Form />
            <hr />
            <div>
                {ballwise.map((res) => <p>{res}</p>)}
            </div>
        </>

    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<><App /></>);