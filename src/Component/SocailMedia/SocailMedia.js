import React, {useEffect, useState} from 'react';
import './style';
import axios from "axios";
import {Social,SocialIcon,SocialInfo,Socialmedia,SocialP,Socialspan} from './style';
const SocailMedia = () =>{

  const [SocailMedia,SocailStatus] =useState([]);
  useEffect(()=>{
    axios.get('js/data.json').then(res=>{
      SocailStatus(res.data.social)
    })
  },[])
  const SocailMediaAtt =SocailMedia.map((item)=>{
    return(
        <Social item={item.id} key={item.id}>
          <SocialIcon className={item.icon}></SocialIcon>
          <SocialP>
            <Socialspan >{item.title}</Socialspan>
            <SocialInfo >{item.body}</SocialInfo>
          </SocialP>
        </Social>

    )
  })

    return (
        <Socialmedia >
          {SocailMediaAtt}
        </Socialmedia>

    )
}

export default SocailMedia;
