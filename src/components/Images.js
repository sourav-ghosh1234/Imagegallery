import React, { useState } from 'react';
import './images.css'

function Images() {
    const [imageurl,setImgurl]=useState('')
    const [open,setOpen]=useState(false)
    const [imagearray,setImagearray]=useState([
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg",
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
         "https://image.shutterstock.com/image-photo/lovely-beach-picture-beautiful-260nw-1554809048.jpg",
         "https://images.unsplash.com/photo-1527342726932-1d392fcdd316?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
         "https://thumbs.dreamstime.com/b/christmas-background-magic-glowing-snowflakes-winter-nature-landscape-beautiful-scene-bokeh-fairytale-illuminated-lights-154691551.jpg",
         "https://cdn.wallpapersafari.com/63/79/ctZJYf.jpg",
         "https://cdn.wallpapersafari.com/63/79/ctZJYf.jpg"

    ])
    const [showmodal,setShowmodal]=useState(false)
    const [popimageurl,setPopimageurl]=useState('')

    const images=imagearray.map((url,i)=>{
        return (
            <>
            
           
            
            
            </>

        ) 

    })
    const imageSubmitter=(event)=>{
        event.preventDefault();
        let imageArray=imagearray;
        imageArray.push(imageurl);
        setImagearray(imageArray)

    }
    const handleShowDialog=()=>{
        setOpen(false)
        setImgurl('')
    }
    const handleclickChange=(event)=>{
        event.preventDefault();
        setImgurl(event.target.value);

    }
    const showImage=(url)=>{
        setOpen(true)
        setImgurl(url)
    }
    return (
        <div>
            <div >
            <div className="row">
            {
                imagearray.map((url,i)=>{
                    return (
                        <>
                  
                      <div className="col-md-4 col-sm-12 my-4 p-20">
                      <div key={i} style={{height:'200px',width:'150px',display:'flex',padding:'20px'}}>
            <div className="card" >
  <img className="card-img-top" style={{height:'500px',width:"300px"}} src={url} alt="Card image cap" onClick={()=>{showImage(url)}}/>

                      </div>
                  
                      
                            
           

   
  
</div>
</div> 
            
            {open && (
          <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
            onClick={handleShowDialog}
          >
              <i class="fa fa-arrows-alt" style={{cursor:"pointer"}} onClick={()=>{handleShowDialog()}}></i>
            <img
            style={{
                height:"500px",
                width:"500px"
            }}
              className="image"
              src={imageurl}
              onClick={()=>{handleShowDialog()}}
              alt="no image"
            />
          </dialog>
        )}
                        </>
                    )
                })
            }
            </div>
            </div>
            
            
        </div>
    )
}

export default Images
