
import React from 'react';
import './Quote.css'
import { HashLink as Link } from 'react-router-hash-link';

const quotes = ["No one is ever quite ready; everyone is always caught off guard. Parenthood chooses you. And you open your eyes, look at what you've got, say Oh, my gosh, and recognize that of all the balls there ever were, this is the one you should not drop. It's not a question of choice. - Marisa de los Santos", "I came to parenting the way most of us do - knowing nothing and trying to learn everything. - Mayim Bialik, actress and neuroscientest", "Everyone should have kids. They are the greatest joy in the world. But they are also terrorists. You'll realize this as soon as they're born, and they start using sleep deprivation to break you.- Ray Romano, actor and comedian",
    "The beauty of motherhood is not in the freshly pressed shirts and smiling photos we show the world. The beauty of motherhood is in the folds and creases of our lives, the grimaces and tantrums, the moments when we have to grit our teeth to get through, when we pound on windows and yell and scream and demand better of each other and ourselves. -Robyn Passante, blogger", "Parental love is the only love that is truly selfless, unconditional and forgiving. Dr T.P.Chia"]

let item = quotes[Math.floor(Math.random() * quotes.length)];


const Quote = () => {
    return (
        <div>
            <header className="home-area overlay" id="home_page">
                <div className="container">
                    <div className="row">
                        <div className="quote col-xs-12  col-lg-12 col-xl-12">
                            <div className="space-80"></div>
                            <h1 className="wow fadeInUp quotetitle" data-wow-delay="0.4s">Quote of the Day</h1>
                            <div className="space-20"></div>
                            <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                                <p>{item}</p>
                            </div>
                            <div className="space-40"></div>
                            <Link to='#about_us' className="bttn-white wow fadeInUp" data-wow-delay="0.8s">Get to know us</Link>
                            <div className="space-80 hidden-xs"></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Quote;
