import { useDispatch, useSelector } from "react-redux";
import { setEmail, setName, setSurname } from "../slices/userSlice";
import { useEffect, useState } from "react";
import { Form, useNavigate } from 'react-router-dom';




function SigninPage() {
  const user = useSelector(state => state.user);
  const name = user.name;
  const surname = user.surname;
  const email = user.email;

  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  //const [Error, setError] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // Reset the values when the component mounts
    dispatch(setName(""));
    dispatch(setSurname(""));
    dispatch(setEmail(""));
  }, [dispatch]);

  const validateInputs = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (surname.trim() === "") {
      setSurnameError("Surname is required");
      isValid = false;
    } else {
      setSurnameError("");
    }

    // You can add more complex email validation if needed
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    // Perform validation before allowing login
    if (validateInputs()) {

      // Continue with login logic
      // For example, navigate to the home page 

      navigate('/home');
    }
  };

/*enter tusu ıle gırıs yapma*/ 
  const enterClick = event => {
    event.preventDefault();

    console.log('form submitted ✅');
  };

  return (
  
    <Form onSubmit={enterClick}>
      <div class="loginPage-Area" >
            <div class="pageMainTitle">
            <h3>Sign In Page</h3>
            </div>
            <div className="inputArea">
                    <div>
                    <p className="text">Name:</p>
                    </div>
                    <div class="validationControl" >
                    <input className="input" value={name} onChange={(e) => {dispatch(setName(e.target.value));setNameError(""); }}/>
                    <div class="validationError">
                        {nameError && <p className="error">{nameError}</p>}
                    </div>
                    </div>
                </div>

                <div className="inputArea">
                    <div>
                    <p className="text">Surname:</p>
                    </div>
                    <div class="validationControl">
                        <input className="input" value={surname} onChange={(e) => {dispatch(setSurname(e.target.value));setSurnameError(""); }}/>
                        <div class="validationError">
                        {surnameError && <p className="error">{surnameError}</p>}
                        </div>
                    </div>
                </div>

                <div className="inputArea">
                    <div>
                    <p className="text">E-Mail:</p>
                    </div>
                    <div class="validationControl">
                        <input className="input" value={email} onChange={(e) => {dispatch(setEmail(e.target.value)); setEmailError(""); }}/>
                        <div class="validationError">
                        {emailError && <p className="error">{emailError}</p>}
                        </div>
                    </div>
                </div>

                <div className="buttonAreaLogin">
                  <button className="loginButton" onClick={handleLogin}
                  
                  
                  
                  
                  > Login</button>
                </div>
      </div>

      
 

   </Form>
  );
}

export default SigninPage;
