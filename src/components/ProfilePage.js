import { useDispatch, useSelector } from "react-redux";
import { setName, setSurname } from "../slices/userSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/BÇ.png";


function ProfilePage (){

    const user= useSelector (state => state.user);
    const name = user.name;
    const surname =user.surname;


    const[tempName, setTempName] = useState(name);
    const[tempSurname, setTempSurname] = useState(surname);
    
    const dispatch =useDispatch();

    function handleClick (){
        dispatch(setName(tempName));
        dispatch(setSurname(tempSurname));
    }

    return(
    <div class="profilePageMain">
         <div class="headerUser">
            <a href="#default" class="logo"><img class="logoImg" src={logo} alt="logo"/></a>
            <div class="header-right">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/"><button>Log Out</button></Link>
            </div>
        </div>

        <div class="pageMainTitle"><h3>Profile Page</h3></div>
        <div>
            <div class="inputArea">
            <div>
                <p class="text">Name:</p>
            </div>
            <div>
                <input class="input" value={tempName} onChange={ e=> setTempName(e.target.value)}/>
            </div>
        </div>

        <div class="inputArea">
            <div>
                <p class="text">Surname:</p>
            </div>
            <div>
                <input class="input" value={tempSurname} onChange={e=> setTempSurname(e.target.value)}/>
            </div>
        
        </div>

        <div class="buttonTopArea">
            <div class="buttonArea">
               <Link to="/home"><button  class="loginButton" onClick={handleClick}>Change</button></Link> 
               <Link to="/home"> <button class="loginButton">Not Change</button></Link>
             </div>
        </div>

        
        </div>
         
    </div>
);
}

export default ProfilePage;