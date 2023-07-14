import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function VerifyCode() {

    const [value, setValue] = useState("");
    const [invalidValue, setInvalidValue] = useState(false);

    const { state: { code, email } } = useLocation();
    const navigate = useNavigate();

    const clickHandler = () => {
        if (code === +value) {
            navigate("/");
            setInvalidValue(false);
        } else {
            setInvalidValue(true);
        }
    }

    return (
        <section id="main" class="clearfix user-page">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div class="user-account">
                            <h2>اعتبار سنجی</h2>
                            <h4 className="text-sm">کد برای {email} ارسال شد</h4>
                            <div class="form-group">
                                <input
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    type="text"
                                    class="form-control"
                                    placeholder="لطفا کد ارسال شده را وارد نمایید"
                                />
                                {invalidValue && <span className="text-error">لطفا به درستی وارد کنید</span>}
                            </div>
                            <p className="flex-center">
                                <NavLink to="/login" className="text-gray ml-3" state={email}>اصلاح ایمیل</NavLink>
                                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            </p>
                            <button class="btn" onClick={clickHandler}>ورود</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
