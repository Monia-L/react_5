import  React  from  'react';

const  DisplayQuote = ({image, character, characterDirection, quote}) => {
    
    return (

        <div  className="DisplayQuote">
            <img  src={image}  alt="picture"/>
            <ul>
                <li>Character : {character}</li>
                <li>
                    Quote : {quote}
                </li>
                
            </ul>
        </div>
    );
   
};


export default  DisplayQuote;