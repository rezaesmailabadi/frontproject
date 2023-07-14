import axios from 'axios';
import React, { useState } from 'react'

export default function Signup() {

	const [id, setEmail] = useState("");

	const clickHandler = () => {
		axios.post("http://127.0.0.1:8000/login-register", id)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	return (
		<section id="main" class="clearfix user-page">
			<div class="container">
				<div class="row text-center">

					<div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
						<div class="user-account">
							<h2>ساخت اکانت</h2>
							{/* <form> */}
								{/* <div class="form-group">
								<input type="text" class="form-control" placeholder="نام" />
							</div> */}
								<div class="form-group">
									<input
										value={id}
										onChange={e => setEmail(e.target.value)}
										type="email"
										class="form-control"
										placeholder="ایمیل" />
								</div>
								{/* <div class="form-group">
								<input type="password" class="form-control" placeholder="رمزعبور"/>
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="تایید رمزعبور "/>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="شماره موبایل"/>
							</div> */}

								<select class="form-control">
									<option value="#">انتخاب شهر</option>
									<option value="#">تهران</option>
									<option value="#">مشهد</option>
									<option value="#">شیراز</option>
									<option value="#">اصفهان</option>
								</select>

								<div class="checkbox">
									<label class="pull-left checked" for="signing"><input type="checkbox" name="signing" id="signing" /> با ثبت نام اقرار میکنم تمامی قوانین و مقررات سایت را قبول کرده‌ام </label>
								</div>
								<button onClick={clickHandler} class="btn">ثبت‌نام</button>
							{/* </form> */}


						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
