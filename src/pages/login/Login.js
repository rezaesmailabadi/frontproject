import React from 'react'

export default function Login() {
    return (
        <section id="main" class="clearfix user-page">
            <div class="container">
                <div class="row text-center">

                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div class="user-account">
                            <h2>فرم ورود</h2>

                            <form action="#">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="نام کاربری" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="رمزعبور" />
                                </div>
                                <button type="submit" class="btn">ورود</button>
                            </form>


                            <div class="user-option">
                                <div class="checkbox pull-left">
                                    <label for="logged"><input type="checkbox" name="logged" id="logged"/>مرا نگه دار </label>
                                </div>
                                <div class="pull-right forgot-password">
                                    <a href="#">فراموشی رمزعبور</a>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn-primary">ساخت اکانت جدید</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
