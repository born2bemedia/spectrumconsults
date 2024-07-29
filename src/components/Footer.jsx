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
                  <img src="/images/facebook.svg" alt="facebook" />
                </Link>
                <Link href="#">
                  <img src="/images/instagram.svg" alt="instagram" />
                </Link>
                <Link href="#">
                  <img src="/images/x.svg" alt="x"/>
                </Link>
              </div>

              <ul>
                <li>
                  <Link href="tel:+442070434509">+442070434509</Link>
                </li>
                <li>
                  <Link href="mailto:info@spectrumconsults.io">info@spectrumconsults.io</Link>
                </li>
                <li>
                  <Link href="#">Registration address: 128 City Road, London, United Kingdom, EC1V 2NX</Link>
                </li>
                <li>
                  <Link href="#">Office address: 62 Great Eastern Street, London, EC2A 3QR</Link>
                </li>
              </ul>
            </div>

            <div className="right">
              <div>
                <h2>Expertise</h2>
                <ul>
                  <li>
                    <Link href="/what-we-do">What We Do</Link>
                  </li>
                  <li>
                    <Link href="/client-results">Client Results</Link>
                  </li>
                </ul>
                <h2>Our Solutions</h2>
                <ul>
                  <li>
                    <Link href="/business-consulting">Business Consulting</Link>
                  </li>
                  <li>
                    <Link href="/marketing-consulting">Marketing Consulting</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Join Community</h2>
                <ul>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/industry-news">Industry News</Link>
                  </li>
                  <li>
                    <Link href="/articles">Articles</Link>
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
