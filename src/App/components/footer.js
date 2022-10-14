function Footer() {
    return (
        <footer className='flex'>
            <div id='tourism-logo'>
                <img src={require('../../assets/images/gta_v_tourism_clear.png')} alt='San Andreas Tourism logo'></img>
            </div>

            <div className='external-links flex'>
                <a href='//twitter.com'><i className='fa-brands fa-twitter fa-2xl'></i></a>
                <a href='//instagram.com'><i className='fa-brands fa-instagram fa-2xl'></i></a>
                <a href='//facebook.com'><i className='fa-brands fa-facebook fa-2xl'></i></a>
            </div>

            <div className='contact-info'>
                <ul>
                    <li><h3>(323) 555-9876</h3></li>
                    <li><h3>8450 San Andreas Blvd</h3></li>
                    <li><h3>Los Santos, SA&ensp;90026</h3></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
