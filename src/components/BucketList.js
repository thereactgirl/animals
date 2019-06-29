import React from 'react';
import Goals from "./Goals";


const BucketList = props => {
    return(
        <div className="bucket-list">
            <h1>This is the Bucket List Component.</h1>
            {props.bucketlist.map(item => (
                <Goals 
                key={item.id}
                item={item} 
                /> 
            ))}
                   
        </div>
    );
}
export default BucketList;
