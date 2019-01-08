import React from 'react';
import './Quote.css'

const quotes = ["No one is ever quite ready; everyone is always caught off guard. Parenthood chooses you. And you open your eyes, look at what you've got, say Oh, my gosh, and recognize that of all the balls there ever were, this is the one you should not drop. It's not a question of choice.","I came to parenting the way most of us do - knowing nothing and trying to learn everything. - Mayim Bialik, actress and neuroscientiest","Everyone should have kids. They are the greatest joy in the world. But they are also terrorists. You'll realize this as soon as they're born, and they start using sleep deprivation to break you.- Ray Romano, actor and comedian",
"The beauty of motherhood is not in the freshly pressed shirts and smiling photos we show the world. The beauty of motherhood is in the folds and creases of our lives, the grimaces and tantrums, the moments when we have to grit our teeth to get through, when we pound on windows and yell and scream and demand better of each other and ourselves. -Robyn Passante, blogger"]

const quote = () => {
    return (
        <div>
            <div>
                <h2 className='font'>Quote of the Day</h2>
                <div className='form center pa3 '>
                    <div className='center quote '>Parental love is the only love that is truly selfless, unconditional and forgiving. </div>
                    <div className='author'>Dr T.P.Chia</div>
                    {
                      quotes.map(str => <p>{str}</p>)
                    }
                </div>
            </div>
        </div >
    );
}

export default quote;
