import React, { useEffect, useState } from 'react'
import axios from '../utils/axios.js'
import styles from '../styles/index.module.scss'

import UserItem from '../components/UserItem';
import { useSearchParams, useRouter } from 'next/navigation.js';

import Image from 'next/image'
import searchIcon from '../public/icons/search.png';
import ModalUser from '../components/ModalUser.jsx';


const Index = ({ users }) => {
    const searchParams = useSearchParams()
    const termQuery = searchParams.get('term')

    const [query, setQuery] = useState(termQuery)
    const router = useRouter()

    const [show, setShow] = useState(false)
    const [selectedData, setSelectedData] = useState({})

    const openModal = (selectedRec) => {
        setSelectedData(selectedRec)
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    const searchHandle = async (e) => {
        e.preventDefault()
        if (query === '') router.push(`/`)
        else router.push(`?term=${query}`)
    }

    useEffect(() => {
        console.log(query)
    }, [query])

    return (
        <div className="wrapper">
            <div className={styles.report}>
                <div className={styles.report__search}>
                    <input value={query} placeholder='Name' onChange={e => setQuery(e.target.value)}
                        className={styles.report__search_input} type="text" />
                    <button className={styles.report__search_btn} onClick={searchHandle}>
                        <Image src={searchIcon} width='20px' alt='search'></Image>
                    </button>
                </div>
                <div className={styles.report__list}>

                    {users.map((user, index) => (
                        <UserItem item={user} handleOpen={openModal} />
                    ))}
                </div>

                {show && <ModalUser user={selectedData} handleClose={hideModal} />}

            </div>
        </div>
    )
}

export default Index

export async function getServerSideProps({ query }) {
    try {
        var term = query["term"] || null
        const { data } = await axios.get(term ? `?term=${term}` : '/')

        return {
            props: {
                users: data
            }
        }
    } catch (error) {
        console.log(error)
    }
}