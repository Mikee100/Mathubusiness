import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
         <div className="footer">
        <p>&copy; Mezuri Shopping 2023</p>
        <h3 className="hd_pages">Pages</h3>
        <ul className="ul_media">
          <li className="li_media" style={{ textDecoration: "none" }}>
            bags
          </li>

          <a href="./contact" style={{ textDecoration: "none" }}>
            <li className="li_media">Dresses</li>{" "}
          </a>
          <li className="li_media" style={{ textDecoration: "none" }}>
            Shoes
          </li>
          <li className="li_media" style={{ textDecoration: "none" }}>
            Favourites
          </li>
          <li className="li_media" style={{ textDecoration: "none" }}>
            Search
          </li>
        </ul>
      </div>
    </div>
  )
}
