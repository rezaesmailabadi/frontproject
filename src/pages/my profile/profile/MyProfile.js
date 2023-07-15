export default function MyProfile() {
    return (
        <div className="col-md-8">
            <div className="user-pro-section">
                <div className="profile-details section">
                    <h2>جزییات پروفایل</h2>

                    <div className="form-group">
                        <label>نام کاربری</label>
                        <input type="text" className="form-control" placeholder="ایمان عزیز" />
                    </div>

                    <div className="form-group">
                        <label>ایمیل</label>
                        <input type="email" className="form-control" placeholder="jyuwe@mail.com" />
                    </div>

                    <div className="form-group">
                        <label for="name-three">موبایل</label>
                        <input type="text" className="form-control" placeholder="+213 1234 56789" />
                    </div>

                    <div className="form-group">
                        <label>شهر</label>
                        <select className="form-control">
                            <option value="#">ایران- تهران</option>
                            <option value="#">ایران- اراک</option>
                            <option value="#">ایران- قم</option>
                            <option value="#">ایران- مشهد</option>
                            <option value="#">ایران- تبریز</option>
                            <option value="#">ایران- شیراز</option>
                            <option value="#">ایران- کرمان</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label>شما به عنوان زیر فعالیت میکنید</label>
                        <select className="form-control">
                            <option value="#">فروشنده</option>
                            <option value="#">شخص</option>
                        </select>
                    </div>
                </div>


                <div className="change-password section">
                    <h2>تغییر رمزعبور</h2>

                    <div className="form-group">
                        <label>رمزعبور قبلی</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>رمزعبور جدید</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>تکرار رمزعبور</label>
                        <input type="password" className="form-control" />
                    </div>
                </div>


                <div className="preferences-settings section">
                    <h2>تنظیمات پیشرفته</h2>

                    <div className="checkbox">
                        <label><input type="checkbox" name="logged" /> غیرفعال کردن نظرات آگهی </label>
                        <label><input type="checkbox" name="receive" />اشتراک در خبرنامه</label>
                        <label><input type="checkbox" name="want" />دریافت مشاوره برای خرید و فروش</label>
                    </div>
                </div>

                <a href="#" className="btn">به روز رسانی پروفایل</a>
                <a href="#" className="btn cancle">انصراف</a>
            </div>
        </div>
    )
}
