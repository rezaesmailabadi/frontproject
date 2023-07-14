import React from 'react'
import AboutUsCarouselItem from '../../components/AboutUsCarouselItem'
import TeamMember from '../../components/TeamMember'

export default function AboutUs() {
    return (
        <section id="main" class="clearfix about-us page">
            <div class="container">

                <div class="breadcrumb-section">
                    <ol class="breadcrumb">
                        <li><a href="index.html">خانه</a></li>
                        <li>درباره ما</li>
                    </ol>
                    <h2 class="title">درباره ما</h2>
                </div>

                <div class="section about">
                    <div class="about-info">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="about-us-images">
                                    <img src="images/about-us/1.jpg" alt="About us Image" class="img-fluid"/>
                                </div>
                            </div>


                            <div class="col-lg-6">
                                <div class="about-text">
                                    <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>

                                    <div class="description-paragraph">
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                    </div>


                                    <div class="description-paragraph"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="approach">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="our-approach">
                                    <h3>سابقه</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                            </div>


                            <div class="col-md-4 text-center">
                                <div class="our-approach">
                                    <h3>هدف</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                            </div>


                            <div class="col-md-4 text-center">
                                <div class="our-approach">
                                    <h3>روش کار</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="team-section">
                        <h3>اعضای تیم</h3>
                        <div class="team-members">
                            <TeamMember />
                            <TeamMember />
                            <TeamMember />
                            <TeamMember />
                            <TeamMember />
                        </div>
                    </div>
                </div>

                <div class="section testimonials text-center">
                    <div class="testimonial-carousel">
                        <AboutUsCarouselItem />
                    </div>
                </div>

            </div>
        </section>
    )
}
