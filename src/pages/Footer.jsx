import React from 'react'

export default function Footer(props) {
  
  return (
    <footer className="footer" style={{textAlign: "center",  display: "flex", justifyContent: "space-between" }} >
    <div>
        <a
            href="https://github.com/tatiana404"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img style={{width: "50px", height: "50px"}}
                src="/img/githubLogo.png"
                alt="Github"
                className="logo"
            ></img>
        </a>
    </div>
    <div>
        <a
            href="https://www.linkedin.com/in/peutina/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img style={{width: "50px", height: "50px"}}
                src="/img/linkedinLogo.png"
                alt="LinkedIn"
                className="logo"
            ></img>
        </a>
    </div>
    <div>
        <a
            href="https://www.facebook.com/tanya.peutina"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img style={{width: "50px", height: "50px"}}
                src="/img/facebook.png"
                alt="Twitter"
                className="logo"
            ></img>
        </a>
    </div>
</footer>
);
}
