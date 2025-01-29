import err from '../../assets/error.gif'
import "./404.scss";
import { useNavigate } from 'react-router-dom';

export function ErrorFunction () {
    const navigate = useNavigate()
    return (
        <div className="error">
            <div className="error_main">
                <div className="top">
                    <h1>404</h1>
                </div>
                <div className="img">
                        <img src={err} alt="error" />
                    </div>
                <div className="bottom">
                    <h2>Look like you're lost</h2>
                    <p>the page you are looking for not avaible!</p>
                     <button onClick={()=> navigate("/")}>go home</button>
                </div>
            </div>
        </div>
    )
}