import axios from 'axios';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { emailValidation, phoneValidation } from '../../helper/validation';

export default function Login() {

    const navigate = useNavigate();
    const { state } = useLocation();

    const [dataValue, setDataValue] = useState({
        email: state || "",
    });
    const [invalidValue, setInvalidValue] = useState(false);

    const changeUserFieldHandler = (e) => {

        let value = e.target.value

        setDataValue({
            ...dataValue,
            [e.target.name]: value,
        });

        if (value.match(emailValidation())) {
            setInvalidValue(false);
        } else {
            setInvalidValue(true);
        }
    };

    const signInHandler = (e) => {
        e.preventDefault();

        if (invalidValue || !dataValue.email.length) {
            setInvalidValue(true);
            return;
        }

        axios.post("http://127.0.0.1:8000/api/login-register", dataValue)
            .then(res => { console.log(res); navigate('/verification', { state: { code: 12, email: dataValue.email } }) })
            .catch(err => { console.log(err); navigate('/verification', { state: { code: 12, email: dataValue.email } }) })
    };

    return (
        <section id="main" class="clearfix user-page">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div class="user-account">
                            <h2>ورود | ثبت‌نام</h2>
                            <h4>سلام !</h4>
                            <div class="form-group">
                                <input
                                    value={dataValue.email}
                                    onChange={(e) => changeUserFieldHandler(e)}
                                    name="email"
                                    type="text"
                                    class="form-control"
                                    placeholder="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
                                />
                                {invalidValue && <span className="text-error">لطفا به درستی وارد کنید</span>}
                            </div>
                            <button class="btn" onClick={signInHandler}>ورود</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
