import React from 'react'
import styles from '../styles/ModalUser.module.scss'
import Image from 'next/image'
import closeIcon from '../public/icons/close.png'

const ModalUser = ({ handleClose, user }) => {

    return (
        <div className={styles.modal}>
            <div className={styles.modal__card}>
                <div className={styles.modal__card__header}>
                    <h2 className={styles.modal__card__header_title}>{user.name}</h2>
                    <button className={styles.modal__card__header_close} onClick={handleClose}>
                        <Image width='20px' src={closeIcon} alt='close' />
                    </button>
                </div>
                <div className={styles.modal__card__info}>
                    <div className={styles.modal__card__info__content}>
                        <p className={styles.modal__card__info__content_title}>Телефон:</p>
                        <a href={`tel:+${user.phone}`} className={styles.modal__card__info__content_value_a}>{user.phone}</a>
                    </div>
                    <div className={styles.modal__card__info__content}>
                        <p className={styles.modal__card__info__content_title}>Почта:</p>
                        <a href={`mailto:${user.email}`} className={styles.modal__card__info__content_value_a}>{user.email}</a>
                    </div>
                    <div className={styles.modal__card__info__content}>
                        <p className={styles.modal__card__info__content_title}>Дата приема:</p>
                        <p className={styles.modal__card__info__content_value_p}>{user.hire_date}</p>
                    </div>
                    <div className={styles.modal__card__info__content}>
                        <p className={styles.modal__card__info__content_title}>Должность:</p>
                        <p className={styles.modal__card__info__content_value_p}>{user.position_name}</p>
                    </div>
                    <div className={styles.modal__card__info__content}>
                        <p className={styles.modal__card__info__content_title}>Подразделение:</p>
                        <p className={styles.modal__card__info__content_value_p}>{user.department}</p>
                    </div>
                </div>

                <div className={styles.modal__card__additional}>
                    <p className={styles.modal__card__additional_title}>Дополнительная информация</p>
                    <p className={styles.modal__card__additional_value_p}>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
                </div>
            </div>
        </div>
    )
}

export default ModalUser