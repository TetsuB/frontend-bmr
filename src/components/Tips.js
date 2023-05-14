import { Card } from "react-bootstrap"
import "../style/tips.css"
import tipsKal from "../assets/images/Tips/tipsKal.jpeg"

const Tips = () => {
    return (
        <div>
            <div>
                <div className="tipsIntro">
                    <h2>Tips</h2>

                    <Card className="tipsImg">
                        <Card.Img src={tipsKal} />
                    </Card>
                </div>
                
                <div className="contents">
                    <div className="detailCon">
                        <h3 className="titleCon">Kurangi asupan kalori</h3>
                        <p>Salah satu cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori Anda. Ini dapat dilakukan 
                            dengan memilih makanan<br/> yang lebih sehat dan lebih rendah kalori seperti sayuran, dan buah-buahan.
                        </p>
                    </div>

                    <div className="detailCon">
                        <h3 className="titleCon">Perhatikan ukuran porsi</h3>
                        <p>Penting untuk memperhatikan ukuran porsi makanan Anda. Jangan terlalu banyak makan dan jangan terlalu 
                            sedikit makan. Cobalah untuk mengontrol ukuran<br/> porsi Anda agar sesuai dengan kebutuhan kalori harian Anda.
                        </p>
                    </div>

                    <div className="detailCon">
                        <h3 className="titleCon">Lakukan olahraga</h3>
                        <p>Olahraga membantu membakar kalori lebih banyak. Cobalah untuk melakukan olahraga secara teratur untuk membantu 
                            Anda mencapai tujuan penurunan<br/> berat badan atau mempertahankan berat badan yang sehat.
                        </p>
                    </div>

                    <div className="detailCon">
                        <h3 className="titleCon">Minum air putih</h3>
                        <p>Minum air putih sepanjang hari dapat membantu mengurangi asupan kalori Anda. Cobalah untuk minum air setidaknya 
                            delapan gelas sehari untuk membantu<br/> Anda tetap hidrasi dan merasa kenyang lebih lama.
                        </p>
                    </div>

                    <div className="detailCon">
                        <h3 className="titleCon">Konsumsi makanan padat kalori</h3>
                        <p>Konsumsi makanan padat kalori seperti kacang-kacangan mentah, kismis, atau sereal granola. Makanan padat 
                            kalori dapat membantu Anda menambahkan<br/> kalori dengan cepat.
                        </p>
                    </div>

                    <div className="detailCon">
                        <h3 className="titleCon">Tingkatkan ukuran porsi</h3>
                        <p>Tingkatkan ukuran porsi makanan Anda untuk meningkatkan asupan kalori Anda. Namun, pastikan untuk tidak 
                            berlebihan dan tetap mengontrol asupan<br/> kalori harian Anda.
                        </p>
                    </div>

                    <div className="detailCon">
                        <h3 className="titleCon">Tambahkan saus atau bumbu</h3>
                        <p>Menambahkan saus atau bumbu ke makanan Anda dapat membantu menambahkan kalori ke makanan. Cobalah menambahkan 
                            saus salad, saus tomat, atau<br/> saus rempah-rempah ke makanan Anda.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips