import Card from "./components/Card";
import "./index.css";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/dateCounter";
import StarRating from "./components/StarRating";
import Accordion from "./components/Accordion";

const accordionContent = [
    {
        title: "About Hiper-Text-Markup-Language",
        details:
            "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    },
    {
        title: "About Casceding-Style-Sheet",
        details:
            "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },
    {
        title: "About Java-Script",
        details:
            "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
    },
    {
        title: "About React",
        details:
            "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
    },
];

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1rem",
    padding: "4rem 0",
};
function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
            <DateCounter />
            <div>
                <StarRating color="#be4bdb" defaultRating={3} size={5} />
                <StarRating color="#ffd43b" defaultRating={4} size={6} />
                <StarRating color="#40c057" defaultRating={5} size={9} />
            </div>
            <Accordion content={accordionContent} color="#2f9e44" />
        </div>
    );
}
export default App;
