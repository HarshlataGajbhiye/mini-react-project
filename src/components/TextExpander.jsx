import { useState } from "react";

const textStyle = {
    maxWidth: "40rem",
};

// const showButton = {
//     backgroundColor: "#9C36B5",
//     color: "white",
//     border: "none",
//     borderRadius: "1rem",
//     padding: " 0.5rem  1rem",
// };
const btnStyle = {
    border: "none",
    backgroundColor: "transparent",
    marginLeft: "0.5rem",
    color: "blue",
    cursor: "pointer",
};
const rowText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                sequi autem optio ipsum sed cum incidunt, harum repellat dicta
                quaerat quam qui eius repellendus. Porro vitae magni excepturi
                tempora ut doloribus illum, doloribus consequuntur fuga, labore,
                molestias obcaecati eveniet impedit laboriosam neque vero. Nulla
                doloremque quia consectetur voluptatem perferendis, minus natus
                aliquid mollitia quis autem id, iusto aspernatur vero laboriosam
                quas? Quaerat non sapiente quos fugiat? Error, cum voluptates
                explicabo eos fugit deleniti blanditiis vero. Quam nisi quod
                facilis facere officiis. Rem, accusamus, corrupti dicta
                necessitatibus ipsam sint adipisci doloribus perspiciatis
                delectus quam quod esse, voluptatem ipsum dolor sit amet
                consectetur adipisicing elit.  cum voluptates
                explicabo eos fugit deleniti blanditiis vero. Quam nisi quod
                facilis facere officiis. Rem, accusamus, corrupti dicta
                necessitatibus ipsam sint adipisci doloribus perspiciatis
                delectus quam quod esse, voluptatem ipsum dolor sit amet
                consectetur adipisicing elit. `;

function TextExpander() {
    const [show, setShow] = useState(false);
    //derived state
    const text = show ? rowText : rowText.slice(0, 100);

    function handleClick() {
        setShow((show) => !show);
    }
    return (
        <div style={textStyle}>
            <span>{text} </span>

            <button onClick={handleClick} style={btnStyle}>
                {show ? `show less` : `...show more`}
            </button>
        </div>
    );
}

export default TextExpander;
