import './NavTab.css'

function NavTab({ scrollRef }) {
    const scroll = (element) => {
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <button type="button" className="promo__button" onClick={() => { scroll(scrollRef.current) }}>Узнать больше</button>
    )
}

export default NavTab;
