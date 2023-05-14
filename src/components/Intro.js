import { Card } from "react-bootstrap"
import "../style/intro.css"
import introImg from "../assets/images/home/introImg.jpeg"

const Intro = () => {
    return (
        <div>
            <Card className="text-dark mt-3">
                <Card.Img src={introImg} alt="Card image" className="imageIn" />
                <Card.ImgOverlay className="mt-5">
                    <div className="introContent">
                        <h1 className="titleIntro">Selamat Datang</h1>
                        <p className="teksIntro">
                            Gunakan kalkulator ini untuk menentukan berapa <br/>
                            kebutuhan kalori Anda berdasarkan tinggi, berat badan, dan usia.
                        </p>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Intro