import React from 'react';
import './Quote.css'
import { HashLink as Link } from 'react-router-hash-link';

const quotes = ["No one is ever quite ready; everyone is always caught off guard. Parenthood chooses you. And you open your eyes, look at what you've got, say Oh, my gosh, and recognize that of all the balls there ever were, this is the one you should not drop. It's not a question of choice. - Marisa de los Santos","I came to parenting the way most of us do - knowing nothing and trying to learn everything. - Mayim Bialik, actress and neuroscientiest","Everyone should have kids. They are the greatest joy in the world. But they are also terrorists. You'll realize this as soon as they're born, and they start using sleep deprivation to break you.- Ray Romano, actor and comedian",
"The beauty of motherhood is not in the freshly pressed shirts and smiling photos we show the world. The beauty of motherhood is in the folds and creases of our lives, the grimaces and tantrums, the moments when we have to grit our teeth to get through, when we pound on windows and yell and scream and demand better of each other and ourselves. -Robyn Passante, blogger","Parental love is the only love that is truly selfless, unconditional and forgiving. Dr T.P.Chia"]

let item = quotes[Math.floor(Math.random()*quotes.length)];
console.log(item)


const Quote = () => {
    return (
        <div>
<<<<<<< HEAD
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
=======
            <div>
                <h2 className='font'>Quote of the Day</h2>
                <div className='form center pa3 '>
                    <div className='center quote '>{item} </div>
                    <div className='author'></div>
>>>>>>> 11aa3cc6ffeb9c69bcd264c33272c29b80f1b2b0
                </div>
            </header>
        </div>
    );
}

<<<<<<< HEAD
export default Quote;


=======
export default quote;
>>>>>>> 11aa3cc6ffeb9c69bcd264c33272c29b80f1b2b0
