import "./FooterStyles.css";
import { Link } from "react-router-dom";


export default function Footer(){
    return (
        <>
            <div className="footer">
                <div className="top">
                    <div>
                        <h1>
                            Trippy
                        </h1>
                        <p>
                            Choose Your Favourite Destination
                        </p>
                    </div>

                    <div>
                        <Link to = "">
                            <i className="fa-brands fa-facebook-square"></i>
                        </Link>

                        <Link to = "">
                            <i className="fa-brands fa-instagram-square"></i>
                        </Link>


                        <Link to = "">
                            <i className="fa-brands fa-behance-square"></i>
                        </Link>


                        <Link to = "">
                            <i className="fa-brands fa-twitter-square"></i>
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h4>Projects</h4>
                        <Link to = ""  className="link">Changelog</Link>
                        <Link to = ""  className="link">Status</Link>
                        <Link to = ""  className="link">License</Link>
                        <Link to = ""  className="link">All Versions</Link>
                    </div>


                    <div>
                        <h4>Community</h4>
                        <Link to = ""  className="link">GitHub</Link>
                        <Link to = ""  className="link">Issues</Link>
                        <Link to = ""  className="link">Project</Link>
                        <Link to = ""  className="link">Twitter</Link>
                    </div>


                    <div>
                        <h4>Help</h4>
                        <Link to = ""  className="link">Support</Link>
                        <Link to = ""  className="link">Troubleshooting</Link>
                        <Link to = ""  className="link">Contact Us</Link>
                        
                    </div>


                    <div>
                        <h4>Others</h4>
                        <Link to = ""  className="link">Terms of Service</Link>
                        <Link to = ""  className="link">Privacy Policy</Link>
                        <Link to = ""  className="link">License</Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}