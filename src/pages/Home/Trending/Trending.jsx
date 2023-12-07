import React from 'react'
import ContentWrapper from "../../../contentWrapper/ContentWrapper"
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
const Trending = () => {

  const onTabChange = (tab)=>{
    
  }
  return (
    <>
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day" , "Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
    </div>
    </>
  )
}

export default Trending