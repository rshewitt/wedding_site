import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'

const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '15px',
      top: '15px'
    },
    bmBurgerBars: {
      background: '#052E16'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '55%',
      width: '250px'
    },
    bmMenu: {
      background: '#052E16',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      borderRadius: '10px'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

const BurgerMenu = () => {
  
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
      setOpen(!isOpen)
  }

  const closeSideBar = ( topPX: number) => {
    window.scrollTo({ top: topPX, behavior: "smooth" })
    setOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 mx-3 bg-green-950 rounded-lg" style={{ marginTop: "10px" }}>
      <Menu isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen} 
        styles={styles}>
        <button 
            id="home_bm" 
            className="menu-item font-semibold text-white mb-6" 
            onClick={ () => {closeSideBar(0)}}
        >Home</button>
        <br/>
        <button 
            onClick={ () => {closeSideBar(900)}}
            id="bride_groom_bm" 
            className="menu-item font-semibold text-white mb-6"
        >Bride & Groom</button>
        <br/>
        <button
            onClick={ () => {closeSideBar(2300)}}
            id="festivities_bm" className="menu-item font-semibold text-white mb-6" 
        >Festivities</button>
        <br/>
        <button 
            id="bridal_party_bm" 
            onClick={ () => {closeSideBar(3200)}}
            className="menu-item--small font-semibold text-white mb-6"
        >Bridal Party</button>
        <br/>
        <button 
            id="wedding_location_mb" 
            onClick={ () => {closeSideBar(5400)}}
            className="menu-item--small font-semibold text-white mb-6" 
        >Wedding Location</button>
        <br/>
        <button 
            id="gallery_bm" 
            onClick={ () => {closeSideBar(6400)}} 
            className="menu-item--small font-semibold text-white mb-6" 
        >Gallery</button>
        <br/>
        <button 
            id="spotify_bm" 
            onClick={ () => {closeSideBar(7000)}} 
            className="menu-item--small font-semibold text-white mb-6" 
        >Spotify Playlist</button>
        <br/>
        <button
            id="rsvp_bm" 
            onClick={ () => {closeSideBar(7700)}} 
            className="menu-item--small font-semibold text-white" 
        >RSVP</button>
      </Menu>
    </div>
    );
}

export default BurgerMenu