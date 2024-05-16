import React from 'react';

function IrctcCard({imageUrl,title,about,readMore}) {
return (
    <div style={{
        marginBottom: "20px",
        width:"400px",
        padding: "10px"
    }}> 
        <img src = {imageUrl} alt = {title}/>
        <h4>{title} </h4>
        <p>{about}</p>
        <a href={readMore} target="_blank"> Read More</a>
    </div>
)
}
export default IrctcCard;