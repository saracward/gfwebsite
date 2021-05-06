import React from 'react'
import "../styles/Services.css"
import ProductionManagement from './ProductionManagement'
import FestivalManagement from './FestivalManagement'
import MusicCuration from './MusicCuration'

const Services = () => {
    return (
    <div className="containers">
    <ProductionManagement />
    <FestivalManagement />
    <MusicCuration />
    </div>
    )
}

export default Services
