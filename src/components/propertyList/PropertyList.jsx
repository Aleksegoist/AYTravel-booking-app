import './propertyList.css';

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className='pListItem'>
                <img
                    src='https://i.ibb.co/vJJGJsM/hotels-photo.jpg'
                    alt='hotels_photo'
                    className='pListImg'
                />
                <div className='pListTitles'>
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img
                    src='https://i.ibb.co/MMsV08z/apartments-photo.jpg'
                    alt='apartments_photo'
                    className='pListImg'
                />
                <div className='pListTitles'>
                    <h1>Apartments</h1>
                    <h2>233 apartments</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img
                    src='https://i.ibb.co/w0KYD2V/resorts-photo.jpg'
                    alt='resort_photo'
                    className='pListImg'
                />
                <div className='pListTitles'>
                    <h1>Resorts</h1>
                    <h2>233 resorts</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img
                    src='https://i.ibb.co/k9R3GzF/villas-photo.jpg'
                    alt='villa_photo'
                    className='pListImg'
                />
                <div className='pListTitles'>
                    <h1>Villas</h1>
                    <h2>233 villas</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img
                    src='https://i.ibb.co/x3gQMHT/cabins-photo.jpg'
                    alt='cabins_photo'
                    className='pListImg'
                />
                <div className='pListTitles'>
                    <h1>Cabins</h1>
                    <h2>233 cabins</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;
