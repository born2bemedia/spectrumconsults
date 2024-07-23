import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="_container">
        <div className="footer-top">
          <Link href="/" className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </Link>

          <div className="footer-row">
            <div className="left">
              <p>Optimise your operations and transform your strategy today.</p>

              <div className="soc">
                <Link href="#">
                  <img src="/images/facebook.svg" />
                </Link>
                <Link href="#">
                  <img src="/images/instagram.svg" />
                </Link>
                <Link href="#">
                  <img src="/images/x.svg" />
                </Link>
              </div>

              <ul>
                <li>
                  <Link href="#">Number</Link>
                </li>
                <li>
                  <Link href="#">Email</Link>
                </li>
                <li>
                  <Link href="#">Registered address</Link>
                </li>
              </ul>
            </div>

            <div className="right">
              <div>
                <h2>Expertise</h2>
                <ul>
                  <li>
                    <Link href="#">What We Do</Link>
                  </li>
                  <li>
                    <Link href="#">Client Results</Link>
                  </li>
                </ul>
                <h2>Our Solutions</h2>
                <ul>
                  <li>
                    <Link href="#">Business Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Marketing Consulting</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Join Community</h2>
                <ul>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Industry News</Link>
                  </li>
                  <li>
                    <Link href="#">Articles</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Legal</h2>
                <ul>
                  <li>
                    <Link href="#">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {currentYear} Spectrum Consults. All Rights Reserved | Privacy
          Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
