import React ,{useState,useEffect}from 'react';
import{Box,BoxImg,Overlay,OverlaySpan,Portfolioist,PortfolioItem,PortfolioSection,PortfolioTitle} from './style.js';
import axios from "axios";


const Portfolio =()=>  {

const  [img,setImg] =useState([]);

useEffect(()=>{
      axios.get('js/data.json').then(res => {
          setImg(res.data.portfolio)
      })

},[])



    const  PortfolioHtml = img.map((item) =>{




        return(

                <Box key={item.id}>
                    <BoxImg src={item.image} alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>

        )

    })
  return (
        <PortfolioSection>
          <PortfolioTitle><span>My</span> Portfolio</PortfolioTitle>
          <Portfolioist>
            <PortfolioItem active >All</PortfolioItem>
            <PortfolioItem   >HTML</PortfolioItem>
            <PortfolioItem  >Photoshop</PortfolioItem>
            <PortfolioItem  >Wordpress</PortfolioItem>
            <PortfolioItem  >Mobile</PortfolioItem>
          </Portfolioist>

    <PortfolioSection>
        {PortfolioHtml}
    </PortfolioSection>

        </PortfolioSection>

        )
}

export default Portfolio;
