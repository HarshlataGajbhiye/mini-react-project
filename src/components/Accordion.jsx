import { useState } from "react";
import styles from "../style/Accordion.module.css";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

function Accordion(props) {
    // App.jsx main hai  parent hai jiski propertity ko child me access kar rahe hai or props ke throw kar sakte hai
    const { content, color } = props;

    const [open, setOpen] = useState(null);

    //open == null > all closed
    //open == 1 > 1sth row is opend
    // isOpend= open ===index

    // curr index
    // 1    1  = null
    // 1    2  = 2

    function handleClick(index) {
        setOpen((currState) => (currState === index ? null : index));
    }

    return (
        <div className={styles.container}>
            {content.map(function (content, index) {
                return (
                    <Row
                        // value is pass
                        title={content.title}
                        details={content.details}
                        handleClick={handleClick}
                        index={index}
                        isOpen={open === index}
                        key={index}
                    />
                );
            })}
        </div>
    );
}
function Row(props) {
    const { title, details, handleClick, index, isOpen } = props;
    //receive kiya hai title and details
    return (
        <div className={styles.row}>
            <h3 onClick={() => handleClick(index)} className={styles.title}>
                <span>
                    {title}
                    {isOpen ? <HiMiniMinus /> : <HiMiniPlus />}
                </span>
            </h3>
            {isOpen && <p className={styles.details}>{details}</p>}
        </div>
    );
}

export default Accordion;
