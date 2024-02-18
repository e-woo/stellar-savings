import React, { useState } from 'react';

const TipBox = () => {
    const tips = [
        "dfjlksj fsjlk dfdjlk fjlfkd fkljldsj ldfs jk (tip 1)",
        "ads adfsljk aflds jkafdsljk dafl kjad (tip 2)",
        "q pepi eqw iopweqo ipewqp oiqweop iqew (tip 3)",
        "jajls l kjdl adksal dkssadlkjdaskljadlks (tip 4)",
        "sdjlf sdl jkf jlksdl jksdf dfsfsd asklmas (tip 5)"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextTip = () => {
        const nextIndex = (currentIndex + 1) % tips.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="flex p-1 gap-8 rounded-xl border-4 border-primary-400 ml-8 my-8 h-10">
            <span><b>💡 Tip: </b>{tips[currentIndex]}</span>
            <div className="flex flex-grow justify-end items-center">
                <button className="w-6 h-6 rounded-xl bg-secondary-500 hover:bg-secondary-600" onClick={getNextTip}>
                    →
                </button>
            </div>
        </div>
    );
};

export default TipBox;
