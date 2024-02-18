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

function InterpolateBackground(sum: number) {
    if (sum > 30000) {return '000000'}
    else {
        // 5A9FC8
        // 000000
        // R=90 G=159 B=200
        let ratio = sum/30000;
        let R = 90-ratio*90;
        let G = 159-ratio*159;
        let B = 200-ratio*200;
        return String(R)+String(G)+String(B);
    }
}

export default ShowTree;
