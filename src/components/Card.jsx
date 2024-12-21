import { useState } from "react";

const cardStyle = {
    backgroundColor: "#DEE2E6",
    height: "fit-content",
    padding: "2rem",
    borderRadius: "1rem",
    border: "2px solid gray",
};
const active = {
    backgroundColor: "#9C36B5",
    color: "white",
};
const numStyle = {
    height: "3rem",
    width: "3rem",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontWeight: "bold",
};
const numsContents = {
    display: "flex",
    // alignItems: "center",
    // width: "100%",
    justifyContent: "space-between",
    gap: "2rem",
    marginBottom: "2rem",
};
const messageStyle = {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
};
const btnContainer = {
    display: "flex",
    justifyContent: "space-between",
};
const btnStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "#9C36B5",
    borderRadius: "1rem",
    color: "white",
    cursor: "pointer",
};

const messages = [
    "😎 Learn HTML",
    "🐳 Learn CSS",
    "💪 JavaScript",
    "🤑 Learn React",
];
function Card() {
    const [step, setStep] = useState(1);
    function minusStep() {
        if (step === 1) return;
        setStep(step - 1);
        //Immediately updated state can'not be accessed
        // we can access it after re-render
        // console.log(step);
    }
    function plusStep() {
        if (step === 4) return;
        setStep(step + 1);
    }
    return (
        <div style={cardStyle}>
            <ul style={numsContents}>
                <div style={step >= 1 ? { ...numStyle, ...active } : numStyle}>
                    <span>1</span>
                </div>
                <div style={step >= 2 ? { ...numStyle, ...active } : numStyle}>
                    <span>2</span>
                </div>
                <div style={step >= 3 ? { ...numStyle, ...active } : numStyle}>
                    <span>3</span>
                </div>
                <div style={step >= 4 ? { ...numStyle, ...active } : numStyle}>
                    <span>4</span>
                </div>
            </ul>
            <p style={messageStyle}>{messages[step - 1]}</p>
            <div style={btnContainer}>
                <button onClick={minusStep} style={btnStyle}>
                    Previous
                </button>
                <button onClick={plusStep} style={btnStyle}>
                    Next
                </button>
            </div>
        </div>
    );
}
export default Card;
