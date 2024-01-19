import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/BÇ.png";

function HomePage (){

    const user= useSelector (state => state.user);
    const name = user.name;
    const surname =user.surname;

    return (
    <div class="homePageMain">
        <div class="headerUser">
            <a href="#default" class="logo"><img class="logoImg" src={logo} alt="logo"/></a>
            <div class="header-right">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/"><button>Log Out</button></Link>
            </div>
        </div>

        <div class="pageMainTitle"><h3>Home Page</h3></div>
      <div class="homePageTitle"> 
        <div>
            <p class="homePageText1">Hello </p>
        </div> 
        <div>
            <p class="homePageText"> {"  "+ name +"   "+ surname}, </p>
        </div>
        <div>
            <p class="homePageText1">How are you today?</p>
        </div>
      </div>  
    </div>
);
}

export default HomePage;