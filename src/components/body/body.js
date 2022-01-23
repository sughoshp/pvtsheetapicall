import { useGoogleLogin } from 'react-google-login';
import { useSelector, useDispatch } from "react-redux";
import Sheet from "./shitdta"
import { loginAction } from "../../actions";
import "./body.css";

var tokenId = ""

function Login() {
    const scope = "https://www.googleapis.com/auth/spreadsheets"
    const clientId = "727068675759-fin854kuiorufv2qkci40fh78632vbue.apps.googleusercontent.com"
    // const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const onSuccess = (response) => {
        console.log(response)
        console.log(response.accessToken);
        tokenId = response.accessToken
        dispatch(loginAction())
    };

    const onFailure = (response) => {
        console.log("loginError", response)
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        scope,
    })

    return (<div className='login_button'>
        <button onClick={signIn} className="button">
            <span className="buttonText">SignIn with Google</span>
        </button>
    </div>
    );
}

function Body() {
    const isLogged = useSelector(state => state.isLogged)

    return (
        <div>
            {
                isLogged ? /* showsheet */ <Sheet token={tokenId} /> : /* showlogin */ <Login />
            }</div>
    );
}

export default Body;
