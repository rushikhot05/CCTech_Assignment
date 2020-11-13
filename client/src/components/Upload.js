import React, { useEffect, useState } from 'react';
import M from "materialize-css"
import PublishIcon from "@material-ui/icons/Publish";

const Upload = () => {
    const [photo, setPhoto] = useState("");
    const [url, setUrl] = useState("");
    // const [title, setTitle] = useState("");

    useEffect(() => {
        if(url){
            fetch("api/createpost", {
                method:"post",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body:JSON.stringify({
                    photo:url,
                    // title
                })
            }).then(res => res.json())
            .then(data => {
                if(data.error){
                    M.toast({html: data.error, classes: "#c62828 red darken-3"})
                }
                else {
                    M.toast({html: "Created post successfully", classes:"#43a047 green darken-1"})
                }
            }).catch(err => {
    
            })
        }
    }, [url])

    const postDetails = () => {
        const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "m1dde7qg")
        data.append("cloud_name", "eventsbook")
        fetch("https://api.cloudinary.com/v1_1/eventsbook/image/upload", {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
        })
    }

    return (
        <div>
            {/* <input type="file" id="actual-btn" hidden onClick = {() =>postDetails()}  onChange = {(e) => setPhoto(e.target.files[0])}/>
            <label htmlFor="actual-btn" style={{backgroundColor:"white", color:"black", padding:"0.5rem", fontFamily:"Verdana", borderRadius:"0.3rem", cursor:"pointer", marginTop:"1rem"}}>
                <PublishIcon style={{padding:"-1.5rem"}}/>
                Upload
            </label> */}




            <button onClick= {() => postDetails()} style={{fontFamily:"Verdana", paddingTop:"5px"}}>
                <input type = "file" onChange = {(e) => setPhoto(e.target.files[0])}/>
                <span>
                    <svg src="./upload.svg" style={{display:"inline-block", height:"10px", width:"10px"}}></svg>
                </span>
                {/* <span onClick= {() => postDetails()} style={{fontFamily:"Verdana"}}></span> */}
                Upload
            </button>
        </div>
    )

}

export default Upload;