import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Page404 from "../pages/404/404";
import Page500 from "../pages/500/500";
import AboutUs from "../pages/about us/AboutUs";
import AddAdvertisingDetails from "../pages/add addvertising detail/AddAdvertisingDetails";
import AddAdvertising from "../pages/add advertising/AddAdvertising";
import Categories from "../pages/categories/Categories";
import ContactUs from "../pages/contact us/ContactUs";
import Details from "../pages/details/Details";

import MyProfile from "../pages/my profile/profile/MyProfile";
import ArchivedAds from "../pages/my profile/archived ads/ArchivedAds";
import DeleteAccount from "../pages/my profile/delete account/DeleteAccount";
import MyAds from "../pages/my profile/my ads/MyAds";
import MyFavoriteAds from "../pages/my profile/my favorite/MyFavoriteAds";
import PendingAds from "../pages/my profile/pendeing ads/PendingAds";

import PublishedAd from "../pages/published ad/PublishedAd";
import Support from "../pages/support/Support";
import Dashboard from "../pages/my profile/Dashboard";
import Advertisements from "../pages/advertisements/Advertisements";
import VerifyCode from "../pages/verify code/VerifyCode";

function Router() {
  return (
    <Routes>
      <Route path="/about-us" element={<AboutUs />} />
      <Route
        path="/add-advertising-details"
        element={<AddAdvertisingDetails />}
      />
      <Route path="/add-advertising" element={<AddAdvertising />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/details" element={<Details />} />
      <Route path="/advertisements" element={<Advertisements />} />

      {/* <Route exact path="/category/:id" element={<CategoryOrder />} /> */}

      <Route path="/dashboard/" element={<Dashboard />}>
        <Route index={true} element={<MyProfile />} />
        <Route path="archived-ads" element={<ArchivedAds />} />
        <Route path="delete-account" element={<DeleteAccount />} />
        <Route path="my-ads" element={<MyAds />} />
        <Route path="favorite-ads" element={<MyFavoriteAds />} />
        <Route path="pending-ads" element={<PendingAds />} />
      </Route>

      <Route path="/verification" element={<VerifyCode />} />
      <Route path="/published-ad" element={<PublishedAd />} />
      <Route path="/support" element={<Support />} />
      <Route path="/error-500" element={<Page500 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
