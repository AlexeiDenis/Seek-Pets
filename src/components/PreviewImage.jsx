import {  useState } from 'react';
export default function PreviewImage() {
    const [img, setImg]= useState(null)
    function change(e) {
        const file = e.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            console.log(formData.get("image"));
            setImg(URL.createObjectURL(file))
        }
    }
    return (
        <>

            <input onChange={change} type="file" />
           {img && <img src={img} alt="Uploaded Image" width={100} height={100} />}
        </>
    )
}