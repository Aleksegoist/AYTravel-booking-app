import './featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img
                    src='https://i.ibb.co/NxfHzVf/dublin-photo.jpg'
                    alt='photo_Dublin'
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img
                    src='https://i.ibb.co/7X7GG0b/kyiv-photo.png'
                    alt='photo_Kyiv'
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Kyiv</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img
                    src='https://i.ibb.co/GC31XBT/munich-photo.jpg'
                    alt='photo_Munchen'
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Munchen</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;
