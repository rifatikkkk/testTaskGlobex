import React, { useState } from 'react'
import styles from '../styles/UserItem.module.scss'


import Image from 'next/image'
import phoneIcon from '../public/icons/phone.png';
import mailIcon from '../public/icons/mail.png';
import ModalUser from './ModalUser';


const UserItem = ({ item, handleOpen }) => {
    return (
        <div className={styles.item} onClick={() => handleOpen(item)}>
            <h2>{item.name}</h2>
            <div className={styles.item__info}>
                <a href={`tel:+${item.phone}`} className={styles.item__info_phone}>
                    <Image src={phoneIcon} width='14px' alt='phone'></Image>
                    <p>{item.phone}</p>
                </a>

                <a href={`mailto:${item.email}`} className={styles.item__info_mail}>
                    <Image src={mailIcon} width='14px' alt='mail'></Image>
                    <p>{item.email}</p>
                </a>
            </div>
        </div>
    )
}

export default UserItem