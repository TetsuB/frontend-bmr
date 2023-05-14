import { Card } from "react-bootstrap";
import "../style/rekomendasi.css"
import nasiImg from "../assets/images/Rekomendasi/nasi.webp"
import kacangImg from "../assets/images/Rekomendasi/kacang.jpg"
import alpukatImg from "../assets/images/Rekomendasi/alpukat.jpg"
import ubijalarImg from "../assets/images/Rekomendasi/ubijalar.jpg"
import asparagusImg from "../assets/images/Rekomendasi/asparagus.png"
import brokoliImg from "../assets/images/Rekomendasi/brokoli.jpg"
import kubisImg from "../assets/images/Rekomendasi/kubis.jpg"
import bayamImg from "../assets/images/Rekomendasi/bayam.jpg"

const Rekomendasi = () => {
    return (
        <body>
            <div>
                <h3 className="title1">Makanan Kalori Tinggi</h3>
                <div className="cards">
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nasiImg} />
                            <Card.Body>
                                <Card.Title>Nasi Putih</Card.Title>
                                <Card.Text>
                                    Makanan wajib bagi masyarakat Indonesia ini mengandung sekitar 240 kalori per tiap mangkuk kecilnya.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={kacangImg} />
                            <Card.Body>
                                <Card.Title>Kacang-kacangan</Card.Title>
                                <Card.Text>
                                    Kacang-kacangan merupakan salah satu makanan berkalori tinggi. Bahkan untuk jenis kacang kenari, jumlah kalorinya mencapai 185 kalori per 25 gramnya. Selain kenari, 
                                    jenis kacang-kacangan yang juga mengandung kalori tinggi adalah kacang mete, kacang almond, dan kacang tanah.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={alpukatImg} />
                            <Card.Body>
                                <Card.Title>Alpukat</Card.Title>
                                <Card.Text>
                                    Sudah bukan rahasia lagi jika alpukat termasuk salah satu jenis buah berkalori tinggi. Dalam satu buah alpukat yang 
                                    berukuran sedang dengan berat 200 gram, terdapat sekitar 332 kalori.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ubijalarImg} />
                            <Card.Body>
                                <Card.Title>Ubi Jalar</Card.Title>
                                <Card.Text>
                                    Makanan yang banyak mengandung kalori selanjutnya adalah ubi jalar. Untuk satu ubi jalar berukuran sedang 
                                    terkandung sekitar 180 kalori.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>


            <div>
                <h3 className="title2">Makanan Kalori Rendah</h3>
                <div className="cards2">
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={asparagusImg} />
                            <Card.Body>
                                <Card.Title>Asparagus</Card.Title>
                                <Card.Text>
                                    Salah satu makanan berkalori rendah yang layak dijadikan pilihan diet adalah asparagus. Dalam 100 gram asparagus mentah hanya terdapat sekitar 20 kilokalori.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={brokoliImg} />
                            <Card.Body>
                                <Card.Title>Brokoli</Card.Title>
                                <Card.Text>
                                    Brokoli mengandung sekitar 39 kilokalori dalam 100 gram brokoli mentah.
                                    Selain baik untuk diet, sayuran yang satu ini juga baik untuk membantu mengurangi peradangan di dalam tubuh.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={kubisImg} />
                            <Card.Body>
                                <Card.Title>Kubis</Card.Title>
                                <Card.Text>
                                    Dalam 100 gram kubis hanya terdapat 25 kilokalori. Selain itu, makanan berkalori rendah ini juga mengandung 
                                    vitamin A, C, K, folat, serat, kalsium, kalium dan antioksidan yang berperan dalam memerangi kanker.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bayamImg} />
                            <Card.Body>
                                <Card.Title>Bayam</Card.Title>
                                <Card.Text>
                                    Dalam 100 gram bayam hanya terkandung 23 kilokalori. Makanan berkalori rendah ini dapat 
                                    menjaga berat badan agar tetap ideal, jangan ragu untuk mengonsumsi makanan berkalori rendah.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Rekomendasi