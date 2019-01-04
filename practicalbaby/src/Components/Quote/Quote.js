import React from 'react';
import './Quote.css'


const quote = () => {
    return (
        <div>
            <div>
                <h3 className='font'>Quote of the Day</h3>
                <div className='form center pa3 '>
                    <div className='center quote '>Parental love is the only love that is truly selfless, unconditional and forgiving. </div>
                    <div className='author'>Dr T.P.Chia</div>
                </div>
            </div>
        </div >
    );
}

export default quote;