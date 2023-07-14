export default function MyProfile() {
    return (
        <div class="col-md-8">
            <div class="user-pro-section">
                <div class="profile-details section">
                    <h2>جزییات پروفایل</h2>

                    <div class="form-group">
                        <label>نام کاربری</label>
                        <input type="text" class="form-control" placeholder="ایمان عزیز" />
                    </div>

                    <div class="form-group">
                        <label>ایمیل</label>
                        <input type="email" class="form-control" placeholder="jyuwe@mail.com" />
                    </div>

                    <div class="form-group">
                        <label for="name-three">موبایل</label>
                        <input type="text" class="form-control" placeholder="+213 1234 56789" />
                    </div>

                    <div class="form-group">
                        <label>شهر</label>
                        <select class="form-control">
                            <option value="#">ایران- تهران</option>
                            <option value="#">ایران- اراک</option>
                            <option value="#">ایران- قم</option>
                            <option value="#">ایران- مشهد</option>
                            <option value="#">ایران- تبریز</option>
                            <option value="#">ایران- شیراز</option>
                            <option value="#">ایران- کرمان</option>

                        </select>
                    </div>

                    <div class="form-group">
                        <label>شما به عنوان زیر فعالیت میکنید</label>
                        <select class="form-control">
                            <option value="#">فروشنده</option>
                            <option value="#">شخص</option>
                        </select>
                    </div>
                </div>


                <div class="change-password section">
                    <h2>تغییر رمزعبور</h2>

                    <div class="form-group">
                        <label>رمزعبور قبلی</label>
                        <input type="password" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>رمزعبور جدید</label>
                        <input type="password" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>تکرار رمزعبور</label>
                        <input type="password" class="form-control" />
                    </div>
                </div>


                <div class="preferences-settings section">
                    <h2>تنظیمات پیشرفته</h2>

                    <div class="checkbox">
                        <label><input type="checkbox" name="logged" /> غیرفعال کردن نظرات آگهی </label>
                        <label><input type="checkbox" name="receive" />اشتراک در خبرنامه</label>
                        <label><input type="checkbox" name="want" />دریافت مشاوره برای خرید و فروش</label>
                    </div>
                </div>

                <a href="#" class="btn">به روز رسانی پروفایل</a>
                <a href="#" class="btn cancle">انصراف</a>
            </div>
        </div>
    )
}
