import React, { useState, useEffect, useContext } from "react";
import { Grid } from '@material-ui/core';

const Post = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/allpost", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => res.json())
        .then(result=>{
            setData(result.posts)
        })
    }, [])

    return (
        <div>
            <div>
                <Grid container direction="row" justify="center" alignItems="center">
                    {[1,2,3].map(item => (
                        <Grid key={item} item>
                            <img src={item.photo} alt={item.title} style={{maxWidth: "250px"}}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        {/* // <div>
        //     <Grid container direction="row" justify="center" alignItems="center">
        //         {data.map(item => (
        //             <Grid key = {item} item>
        //                 <img src={item.photo} style={{maxWidth: "250px"}}/>
        //             <Grid/>
        //         ))}
        //     </Grid>
        // </div>
        <div> */}

        </div>
    )
}

export default Post;