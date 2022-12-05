import style from "./card.module.css"

export default function Card() {
    return(
        <>
        <div className={style.cardBox}>
            <h2>Header</h2>
            <p>Content</p>
        </div>

        </>
    )
}