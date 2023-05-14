import "../style/footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footContent">
                    <a className="title" href="/" style={{textDecoration: 'none', color: '#000000', fontFamily: 'cursive'}}>KALORIKU</a>

                    <div className="home">
                        <a href="/" style={{textDecoration: 'none', color: '#000000'}}>Home</a>
                    </div>
                    <div className="rekomendasi">
                        <a href="rekomendasi" style={{textDecoration: 'none', color: '#000000'}}>Rekomendasi</a>
                    </div>
                    <div className="tips">
                        <a href="tips" style={{textDecoration: 'none', color: '#000000'}}>Tips</a>
                    </div>
                    <div className="copyright">
                        <p>COPYRIGHT © 2023 KALORIKU</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer