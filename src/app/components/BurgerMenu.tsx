import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "15px",
    top: "15px",
  },
  bmBurgerBars: {
    background: "#354834",
  },
  bmBurgerBarsHover: {
    background: "#0f2e31",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "62%",
    width: "250px",
  },
  bmMenu: {
    background: "#354834",
    padding: "0.5em 1.5em 0",
    fontSize: "1.15em",
    borderRadius: "10px",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: "0",
    left: "0",
  },
};

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const executeScroll = (divName: string) => {
    const element = document.getElementById(divName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navItems = [
    {
      div_id: "home_page_div",
      name: "Home",
    },
    {
      div_id: "bride_and_groom_div",
      name: "Bride & Groom",
    },
    {
      div_id: "agenda_div",
      name: "Festivities",
    },
    {
      div_id: "bridal_party_div",
      name: "Bridal Party",
    },
    {
      div_id: "location_div",
      name: "Wedding Location",
    },
    {
      div_id: "lodging_div",
      name: "Lodging",
    },
    {
      div_id: "ttd_dev",
      name: "Things To Do",
    },
    {
      div_id: "carousel_div",
      name: "Gallery",
    },
    {
      div_id: "spotify_div",
      name: "Spotify Playlist",
    },
    {
      div_id: "rsvp_div",
      name: "RSVP",
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 mx-3 rounded-lg"
      style={{ marginTop: "10px", zIndex: "5" }}
    >
      <Menu
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        styles={styles}
      >
        {navItems.map((navItem) => (
          <div key={`bg_item_${navItem.div_id}`}>
            <button
              className="menu-item--small font-normal text-xl-wel text-white"
              key={`bg_item_${navItem.div_id}`}
              onClick={() => {
                executeScroll(navItem.div_id);
              }}
            >
              {navItem.name}
            </button>
            <br />
          </div>
        ))}
      </Menu>
    </div>
  );
};

export default BurgerMenu;
