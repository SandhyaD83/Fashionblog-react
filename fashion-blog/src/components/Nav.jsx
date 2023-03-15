import React from 'react'
import { Link } from "react-router-dom"
function Nav() {
    return (
        <div className="nav">

            <nav aria-label="Main Navigation" role="navigation" class="navigation">
                <ul>
                    <li><a href="...">Women's</a></li>
                    <li><a href="...">Men's</a></li>
                    <li><a href="...">On the Street</a></li>
                    <li><a href="...">The CatWalk</a></li>
                    <li><a href="...">AdWatch</a></li>
                    <li><a href="...">About</a></li>
                </ul>
            </nav>


            {/* <Link to="/Women">
                    <div>Women's</div>
                </Link>
                <Link to="/Men">
                    <div>Men's</div>
                </Link>
                <Link to="/Street">
                    <div>On the Street</div>
                </Link>
                <Link to="/CatWalk">
                    <div>The Catwalk</div>
                </Link>
                <Link to="/AdWatch">
                    <div>AdWatch</div>
                </Link>
                <Link to="/About">
                    <div>About</div>
                </Link> */}






        </div>
    )
}

export default Nav