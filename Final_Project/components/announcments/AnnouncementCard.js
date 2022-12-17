import style from "./announce.module.css"

export default function Card(props) {
    return(
        <>
        <div className={style.announceBox}>
            <h2>Announcments</h2>
            
            <button onClick="">Add Post</button>
        </div>

        </>
    )
}