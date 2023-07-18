import React from 'react';
import styles from './Card.module.scss'

function Card({ title, price, imageUrl, onFavorite, onPlus, favorited = false }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ title, price, imageUrl });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    React.useEffect(() => {
        console.log('peremennaya changed');
    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className="favorite" onClick={onFavorite}>
                <img onClick={onClickFavorite} src={isFavorite ? "/img/liked.svg" : "img/unliked.svg"} alt="not added to fav" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} kzt.</b>
                </div>

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />

            </div>
        </div>
    );
}

export default Card;