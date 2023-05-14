import "../style/info.css"

const Info = () => {
    return (
        <div>
            <div className="infoBmr">
                <h2 className="infoTeks">INFO!</h2>

                <div className="content1">
                    <div className="detail">
                        <h3 className="titleInfo">Apa itu BMR?</h3>
                        <p>BMR adalah kebutuhan kalori minimal yang dipakai organ-organ tubuh untuk melakukan tugas dasarnya. Ini meliputi pernapasan, 
                            sirkulasi, dan produksi sel. Prosesnya dikenal sebagai metabolisme. Dengan memenuhi BMR, tubuh dapat tumbuh dan berfungsi dengan baik.
                        </p>
                    </div>

                    <div className="detail">
                        <h3 className="titleInfo">Kebutuhan Kalori Pria dan Wanita?</h3>
                        <p>Rata-rata kebutuhan kalori harian pada pria dewasa berkisar 1500 - 2725 kalori per hari, sedangkan wanita memerlukan sekitar 1400 -2,250 kalori per hari.</p>
                    </div>
                </div>

                <div className="content2">
                    <div className="detail">
                        <h3 className="titleInfo">Apa itu Kalori?</h3>
                        <p>Kalori adalah satuan unit kandungan panas atau energi, alias jumlah energi yang didapatkan dari makanan dan minuman. Kalori dalam makanan yang Anda konsumsi 
                            memberikan energi berupa panas agar tubuh dapat berfungsi. Jadi, bisa dibilang kalori adalah bahan bakar tubuh Anda.</p>
                    </div>

                    <div className="detail">
                        <h3 className="titleInfo">Kebutuhan Kalori Remaja dan Anak-anak?</h3>
                        <p>Kebutuhan kalori per hari pada anak-anak biasanya berkisar antara 1.000–2.000 kalori. Sementara itu, remaja membutuhkan kalori sebanyak 2.000–2.650 per hari.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info