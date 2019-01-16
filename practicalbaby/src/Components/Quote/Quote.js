import React from 'react';
import './Quote.css'
import { HashLink as Link } from 'react-router-hash-link';


const Quote = () => {
    return (
        <div>
            <header class="home-area overlay" id="home_page">
                <div class="container">
                    <div class="row">
                        <div class="quote col-xs-12  col-lg-12 col-xl-12">
                            <div class="space-80"></div>
                            <h1 class="wow fadeInUp quotetitle" data-wow-delay="0.4s">Quote of the Day</h1>
                            <div class="space-20"></div>
                            <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                                <p>Parental love is the only love that is truly selfless, unconditional and forgiving.
                            <br></br>
                                    -Dr T.P.Chia
                                </p>
                            </div>
                            <div class="space-40"></div>
                            <Link to='#about_us' class="bttn-white wow fadeInUp" data-wow-delay="0.8s">Get to know us</Link>
                            <div class="space-80 hidden-xs"></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Quote;


