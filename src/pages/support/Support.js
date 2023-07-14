import React from 'react'
import Accordion from '../../components/Accordion'

export default function Support() {
    return (
        <section id="main" class="clearfix page m0">
            <div class="container">
                <div class="faq-page">
                    <div class="breadcrumb-section">

                        <ol class="breadcrumb">
                            <li><a href="index.html">خانه</a></li>
                            <li>پرسش و پاسخ</li>
                        </ol>
                        <h2 class="title">سوالات متدوال</h2>
                    </div>

                    <div class="tr-accordion" id="accordion">
                        <Accordion id={1} />
                        <Accordion id={2} />
                        <Accordion id={3} />
                        <Accordion id={4} />
                        <Accordion id={5} />
                    </div>
                </div>
            </div>
            <section id="something-sell" class="clearfix parallax-section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h2 class="title">جواب خود را پیدا نکردید?</h2>
                            <h4>برای ما پیام بگذارید</h4>
                            <a href="contact-us.html" class="btn btn-primary">ارتباط با ما</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
