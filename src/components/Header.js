import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Header() {
    return (
        <header id="header" className="clearfix">
            <nav className="navbar navbar-default navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tr-mainmenu" aria-controls="tr-mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
                    </button>
                    <NavLink
                        to="/"
                        className="navbar-brand"
                    >
                        <img className="img-fluid" src={logo} alt="Logo" />
                    </NavLink>

                    <div className="collapse navbar-collapse" id="tr-mainmenu">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink
                                    end
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    خانه
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/categories"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    دسته‌بندی
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                    to="/advertisements"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    آگهی ها
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/support"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    پشتیبانی
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    درباره ما
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    ارتباط با ما
                                </NavLink>
                            </li>
                            {/* <li className="dropdown">
                                <a href='' className="dropdown-toggle" data-toggle="dropdown">
                                    سایر<span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            to="/support"
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                        >
                                            پشتیبانی
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about-us"
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                        >
                                            درباره ما
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact-us"
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                        >
                                            ارتباط با ما
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>

                    <div className="nav-right">
                        <ul className="sign-in">
                            <li><i className="fa fa-user"></i></li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    ورود
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/signup"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    ثبت‌نام
                                </NavLink>
                            </li> */}
                        </ul>

                        <NavLink
                            to="/add-advertising"
                            className="btn"
                        >
                            افزودن آگهی شما
                        </NavLink>
                    </div>

                </div>
            </nav>
        </header>
    )
}
