import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/card";
import style from "../styles/dashboard.module.css"

export default function dashboard(){
    return(
        <>
        <Navbar></Navbar>
        <div className={style.container}>
            <div className={style.one}>
            <Card></Card>
            </div>

            <div className={style.two}>
            <Card></Card>
            </div>
            
            <div className={style.three}>
            <Card></Card>
            </div>
            
            <div className={style.four}>
            <Card></Card>
            </div>
        </div>
        </>
    )

}