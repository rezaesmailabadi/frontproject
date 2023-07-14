import { useState } from 'react'

export default function Login() {

    const [value, setValue] = useState("");

    const signInHandler = () => {
        if (value.match(/^(\\+98|0)?9\\d{9}$/)) {
            
        }
        if (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

        }
    }

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
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    type="text"
                                    class="form-control"
                                    placeholder="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
                                />
                            </div>
                            <button class="btn" onClick={signInHandler}>ورود</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
