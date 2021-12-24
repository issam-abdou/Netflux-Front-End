import React ,{useState} from 'react';
import Logo from './Logo';
import MenuBar from "./MenuBar"

/*
class Shape extends React.Component{
    state={
        shape : ""
    }

    // componentWillMount(){
    //     console.log(" ======= >mzl");
    // }
    // componentDidMount(){
    //     setTimeout(() => {
    //         console.log("__________ OK ___________");
    //     }, 3000);
    // }

    componentWillMount(){
        this.setState({
            shape:"circle"
        }
        )
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                shape:"square"
            })
        }, 3000);
    }
    componentDidUnmout

    render(){
        return(
            <div className={this.state.shape}>
                <button>state Test</button>
            </div>
        )
    }
}

*/

/*class Buttons extends React.Component {
    state={
        text1:0,
        text2 :0
    }
    updateButton1=()=>{
        console.log("cliiiiiiiiiicked");
        this.state.text1.setState(255)
    }
    updateButton2() {
        console.log("clicked 222");
    }
    render() {
      return (
        <div>
          <button onClick={this.updateButton1}>{this.state.text1}</button>
          <br />
          <button onClick={this.updateButton2}> {this.state.text2} </button>
        </div>
    );
    }
  
  }*/
//   Learn Event Hendeling
function Btn (){
    const [count, setCount] = useState(0)
    function handlClick() {
        setCount((count)=>count+1)
    }
    return(
    <button onClick={handlClick}>you clicked me {count} times</button>)
}
// ======= handle Event with Class component =======
/*class Buttons extends React.Component{
    state={
        click1 : 0,
        click2 : 10
    }
    
        handleClick01 = ()=>{
            this.setState((prevState)=>
                prevState.click1 +=1
            )
        }
        handleClick02(){
            this.setState((prevState)=>{
                return prevState.click2--
            })
        }
        render(){
            return(
            <div>
                <p>Go up : {this.state.click1}</p>
                <p>Go down : {this.state.click2}</p>

                <button onClick={this.handleClick01}>Add one</button>
                <button onClick = {this.handleClick02.bind(this)}>Remove one</button>

            </div>
        )
    }
}*/
// ======= handle Event with Functional Component component =======
const Buttons = ()=>{
    let [click1, setClick1] = useState(0)
    let [click2, setClick2] = useState(10)
    // handleClick 01 Function
    function handleClick01 (){
        setClick1(click1=click1+1)
    }
    // handleClick 02 Function
    function handleClick02 (){
        setClick2(click2-=1)
    }
    return(
        <div>
                <p>Go up : {click1} </p>
                <p>Go down :{click2} </p>

                <button onClick={handleClick01}>Add one</button>
                <button onClick ={handleClick02}>Remove one</button>
 
            </div>
    )
}

const Footer =()=>{
    return (
      <footer className="section">
        <div className="container">
            <section className="footer-nav" role="navigation">
                <Logo classes='grayscale'/>

                {/* <a className="navbar-item grayscale" href="#/"><img src={logo} width="80" alt=""/></a> */}
                <div className="navbar-menu">
                    <MenuBar/>
                </div>
            </section>
		</div>
        {/* <Btn/> */}
        <Buttons/>
	</footer>
    );
}

export default Footer;