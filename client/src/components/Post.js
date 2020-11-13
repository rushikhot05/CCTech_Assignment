import React, { useState, useEffect } from "react";
import { GridList, GridListTile, GridListTileBar, Card } from "@material-ui/core"


const Post = (props) => {
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
        <div className="root">
            <GridList spacing={10} cellHeight={"auto"} cols={3} style={{paddingLeft:"50px", paddingTop:"100px", paddingRight:"50px", paddingBottom:"100px"}}>
            {
                data.map((item, i) => {
                    return (
                        <GridListTile key={item} style={{padding:"5px", }}>
                            {/* <Card style={{display:"center", maxHeight: "200px", maxWidth:"250px", borderRadius:"10px"}}> */}
                                <div key={i}>
                                    <img src={item.photo} alt="Image" id="image-{i}.jpg" style={{display:"center", maxHeight: "400px", maxWidth:"500px", height:"auto", width:"auto", borderRadius:"10px",  boxShadow:"2.5px 5px grey"}}></img>
                                </div>
                            {/* </Card> */}
                            <div >
                                <p key={i}>image-{i+1}</p>
                            </div>
                        </GridListTile>           
                    )
                })
            }
            </GridList>
        </div>
    )
}

export default Post;