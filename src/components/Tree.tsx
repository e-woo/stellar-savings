import React from 'react';
import treeimg from '../assets/treePlaceholder.png';
function ShowTree() {
    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <img 
            className="absolute bottom-0 w-1/3 h-auto" 
            src={treeimg}/>
        </div>
    );
}
export default ShowTree;
