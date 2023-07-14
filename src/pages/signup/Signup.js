import axios from "axios";
import { useState } from "react";

export default function Signup() {
      
  const [email, setUserField] = useState({
    email: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...email,
      [e.target.name]: e.target.value,
    });
    //console.log(userField);
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/login-register",
        email
      );
      console.log(responce);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <section id="main" class="clearfix user-page">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div class="user-account">
              <h2>ساخت اکانت</h2>
              <form>
                <div class="form-group">
                  <input
                    id="email"
                    name="email"
                    onChange={(e) => changeUserFieldHandler(e)}
                    class="form-control"
                    placeholder="ایمیل"
                  />
                </div>

                <div class="checkbox">
                  <label class="pull-left checked" for="signing">
                    <input type="checkbox" name="signing" id="signing" /> با ثبت
                    نام اقرار میکنم تمامی قوانین و مقررات سایت را قبول کرده‌ام{" "}
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn"
                  onClick={(e) => onSubmitChange(e)}
                >
                  ثبت‌نام
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}