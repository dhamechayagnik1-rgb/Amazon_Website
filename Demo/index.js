/*    js
 const heading = document.createElement("h2");
heading.textContent = "Hello Yagnik";
heading.className = "header";
document.getElementById("root").append(heading); */
/* ractjs */

//const reactHeading = React.createElement("h1", {className : "heading", id : "reacthead", children: "Hello yagnik"});


// rectjsx Demo

//const reactjsx = (<h1 className="head">Hello yagnik</h1>)

// react Fragment

/*const reactjsx = (
    /*<React.Fragment>
        <h1>Hello js</h1>
        <p>hello yagnik i am a react</p>
    </React.Fragment>*/
//or
/* <>
     <h1>Hello js</h1>
     <p>hello yagnik i am a react</p>
 </> */


/*  expression normal
const App=()=>  (<>
       <h1>Hello js</h1>
       <p>hello yagnik i am a react</p>
   </>)

//expression
function sum(){
   let a = 1+5;
   return a;
}

const header = <h1>new page load</h1>

function Name(){
   //expression
   var name  = "yagnik";
   let age = 10;
   let demo = null;
   let undef;
   const boolean = true;
   return(<>
   {header}<h1>Helloname{name}age{age}demo{demo}undef{undef}boolean{String(boolean)}</h1>
   <p>what is you jsx sum {sum()}</p></>)
}
function Bhav(){
   return(<><h1>Helloname</h1>
   <p>what is you jsx</p></>)
}

*/

function StudentsData() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let cars = ["bmw", "ferrari", "kartos", "porsche", "hyundai"];
    let obj = {
        name: "Alexa",
        age: 10,
        name: "kalu",
        age: 9,
        name: "yagnik",
        age: 23
    }

    let students = [{
        name: "yagnik",
        age: 23,
        class: 23
    },
    {
        name: "dax",
        age: 18,
        class: 12
    }



    ]
    return (
        <>
            <h1>Arrays</h1>
            {arr}
            {arr.map((num, index) => <h3 key={index}>{num}</h3>)}
            {obj.name}
            <ul>
                {cars.map((car, index) => <li key={index}>{car}</li>)}</ul>


            <h1>Students Data</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) =>
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.class}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}




function Carsdata() {
    let cars = [{
        name: "BMW",
        Price: 230000,
        class: "A"
    },
    {
        name: "Fortuner",
        Price: 120000,
        class: "D"
    }
    ]

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>price</th>
                    <th>class</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car,index) =>
                <tr key={index}>
                    <td>{car.name}</td>
                    <td>{car.Price}</td>
                    <td>{car.class}</td>
                </tr>
                )}
                
            </tbody>

        </table>
    )
}

 // conditions all of this if
/*function App(){
    let ishow = false;
    if(ishow){
       return <Carsdata/>
    }
    return(
        <>
    <StudentsData/><br></br>
    </>
    )
}*/


// Ternary Operator
/*conditional redering useing and operator*/
function App(){
    let isloged = true;
    let isshow = true;

    let surname = "dhamecha"
    let fathername = "kamleshbhai"
    return(
        <>
        <h1>Hello {isloged?"Allexa":"yagnik"}!</h1>
        <h1>Hello {isloged? surname || fathername:"yagnik"}!</h1>

        
        {isshow && <p>Wlcome To the Hotel</p>}
        </>
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<><App /></>);