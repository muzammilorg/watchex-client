import React, { useState } from 'react'
import styles from './add-movie.module.scss'
import TextInput from '../../../components/Inputs/text-input'
import GetTicketButton from '../../../components/Button/get-ticket-button'

const AddMoviePage = () => {

    const [inputId, setInputId] = useState("")
    const [inputImage, setInputImage] = useState(null)

    console.log(inputImage)

    return (
        <>
            <div className={styles.container}>
                <h2>Add Movie</h2>


                <div className={styles.add_movie_container}>
                    <TextInput style={{ marginTop: "20px" }}
                        type="text"
                        value={inputId}
                        onChange={setInputId}
                        placeholder={"Type Movie ID"}
                    />

                    <input style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "190px"}}
                        type="file"
                        className={styles.hiddenFileInput}
                        onChange={(e) => setInputImage(e.target.files[0])}
                    />

                    <GetTicketButton >Submit</GetTicketButton>
                </div>
            </div>
        </>
    )
}

export default AddMoviePage