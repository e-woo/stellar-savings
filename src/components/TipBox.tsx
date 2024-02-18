import React, { useState, useEffect } from 'react';

const TipBox = () => {
    const tips = [
        ["💡 Tip:", "Always save a portion of your allowance!"],
        ["🤔 Did you know?", "The term piggy bank comes from the old English word pygg, which referred to a type of clay used for making pots."],
        ["📖 Definition:", "Inflation is the rate at which the general level of prices for goods and services increases over time, reducing the purchasing power of money."],
        ["💡 Tip:", "Differentiate between needs (like food & clothing) and wants (like toys & games)!"],
        ["🤔 Did you know?", "Thousands of years ago, people used items like salt, shells, and even cattle as forms of currency!"],
        ["📖 Definition:", "An entrepreneur is someone who starts their own business or takes financial risks to make a profit."],
        ["💡 Tip:", "Make a plan to budget your money!"],
        ["🤔 Did you know?", "Money has been a concept for over 3000 years, with the first coins used in ~600 BCE."],
        ["📖 Definition:", "Investing is using your money to buy something with the hope of it growing in value over time."],
        ["💡 Tip:", "Always save a portion of the money you receive as gifts!"],
        ["🤔 Did you know?", "The first ATM was installed by Barclays Bank in London in 1967."],
        ["📖 Definition:", "Budgeting is making a plan for how you will spend or save your money."],
        ["💡 Tip:", "Consider opening a savings account to earn interest on your money."],
        ["🤔 Did you know?", "The term salary comes from the Latin word salarium, which referred to the payments made to Roman soldiers to buy salt."],
        ["📖 Definition:", "Credit is the ability to borrow money or buy goods and services now with the promise to pay for them later."],
        ["💡 Tip:", "Keep track of your spending to see where your money goes."],
        ["🤔 Did you know?", "The average lifespan of a dollar bill is around 18 months, while a coin can last up to 30 years!"],
        ["📖 Definition:", "A stock is a share of ownership in a company that can be bought and sold on the stock market."],
        ["💡 Tip:", "Ask questions if you don't understand something about money or finances."],
        ["🤔 Did you know?", "The most expensive US bill ever printed was worth $100000, and it featured the face of President Woodrow Wilson!"],
        ["📖 Definition:", "Debt is money that is owed to someone else, often with interest."]
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextTip = () => {
        const nextIndex = (currentIndex + 1) % tips.length;
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
        }, 15000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex p-1 gap-8 rounded-xl border-4 bg-gray-900 border-primary-400 ml-8 w-full">
            <span>
                <b>{tips[currentIndex][0]}</b> {tips[currentIndex][1]}
            </span>
            <div className="flex flex-grow justify-end items-center">
                <button className="w-6 h-full rounded-xl bg-secondary-500 hover:bg-secondary-600 select-none" onClick={getNextTip}>
                    →
                </button>
            </div>
        </div>
    );
};

export default TipBox;
