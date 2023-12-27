import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    console.log(images)
    const [ind, setIndex] = useState(0)

    const forward = () => {
        setIndex((ind + 1) % images.length);
    }

    const backward = () => {
        setIndex((ind - 1 + images.length) % images.length);
    }

    return (
        <div>
            <div className="body ">
                <ArrowBackIosIcon onClick={backward} />
                <div className="title">
                    <h1 className="title1">{images[ind].title}</h1>
                    <img src={images[ind].img} />
                    <h3 className="title2">{images[ind].subtitle}</h3>
                </div>
                <ArrowForwardIosIcon onClick={forward} />
            </div>
        </div>
    )
}

export default Carousel;