import './hotel.css';
import NavBar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: 'https://i.ibb.co/GQp2dtM/1-photo.jpg',
        },
        {
            src: 'https://i.ibb.co/HDtN0xx/2-photo.jpg',
        },
        {
            src: 'https://i.ibb.co/SXZ4bB6/3-photo.jpg',
        },
        {
            src: 'https://i.ibb.co/852d2gD/4-photo.jpg',
        },
        {
            src: 'https://i.ibb.co/T42T6Gg/5-photo.jpg',
        },
        {
            src: 'https://i.ibb.co/31Ww43N/6-photo.jpg',
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <NavBar />
            <Header type='list' />
            <div className='hotelContainer'>
                {open && (
                    <div className='slider'>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className='close'
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className='arrow'
                            onClick={() => handleMove('l')}
                        />
                        <div className='sliderWrapper'>
                            <img
                                src={photos[slideNumber].src}
                                alt=''
                                className='sliderImg'
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className='arrow'
                            onClick={() => handleMove('r')}
                        />
                    </div>
                )}
                <div className='hotelWrapper'>
                    <button className='bookNow'>Reserve or Book Now!</button>
                    <h1 className='hotelTitle'>Grand Hotel</h1>
                    <div className='hotelAddress'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className='hotelDistance'>
                        Excellent location - 500m from center
                    </span>
                    <span className='hotelPriceHighlight'>
                        Book a stay over $114 at this property and get a free
                        airport taxi
                    </span>
                    <div className='hotelImages'>
                        {photos.map((photo, i) => (
                            <div className='hotelImgWrapper'>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt='photo_hotel'
                                    className='hotelImg'
                                />
                            </div>
                        ))}
                    </div>
                    <div className='hotelDetails'>
                        <div className='hotelDetailsTexts'>
                            <h1 className='hotelTitle'>
                                Stay in the heart of Paris
                            </h1>
                            <p className='hotelDesc'>
                                Hotel de Crillon is set in Paris, 300 m from
                                both the Tuileries Garden and the Champs-Elysées
                                and 0.9 mi from the Louver Museum. Some rooms
                                have a balcony. The hotel features an indoor
                                swimming pool and a spa. Each room at Hotel de
                                Crillon provides Rivolta Carmignani Italian
                                linen and French Drouault pillows and duvets.
                                The spacious marble bathrooms feature underfloor
                                heating as well as bespoke toiletries and a
                                bathroom mirror with an inset television. A
                                walk-in rain shower and a bath are also
                                provided. In-room check-in and a Bluetooth sound
                                system are available. Hotel de Crillon provides
                                2 Restaurants, L'Ecrin which offers gastronomic
                                meals and the Brasserie d'Aumont. Guests can
                                also enjoy a drink or a cocktail at the lounge
                                bar Les Ambassadeurs or enjoy afternoon tea at
                                the Jardin d'Hiver lounge. Buffet breakfast is
                                served daily on site.
                            </p>
                        </div>
                        <div className='hotelDetailsPrice'>
                            <h1>Perfect for a 1-night stay!</h1>
                            <span>
                                Located in the heart of Paris, this hotel has an
                                excellent location score of 9.9
                            </span>
                            <h2>
                                <b>$250</b> (1 night)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;
