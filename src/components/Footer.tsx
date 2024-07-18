import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer10, className].join(" ")}>
      <div className={styles.copyright}>
        <img
          className={styles.tcinc1Icon}
          loading="lazy"
          alt=""
          src="/tcinc-1@2x.png"
        />
        <h3 className={styles.builtWithLoveContainer}>
          <p className={styles.builtWithLove}>
            Built with love in San Francisco,
          </p>
          <p className={styles.californiaUsa}>California, USA.</p>
        </h3>
      </div>
      <img className={styles.logomarkIcon} alt="" src="/logomark.svg" />
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.subFooter}>
        <div className={styles.landifyUiKit}>
          © 2021 Landify UI Kit. All rights reserved
        </div>
        <div className={styles.socialLinks}>
          <img className={styles.socialIcon} alt="" src="/social-icon-1.svg" />
          <img className={styles.socialIcon1} alt="" src="/social-icon-2.svg" />
          <img className={styles.socialIcon2} alt="" src="/social-icon-3.svg" />
          <img className={styles.socialIcon3} alt="" src="/social-icon-4.svg" />
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.container}>
          <div className={styles.col1}>
            <h3 className={styles.usa}>USA</h3>
            <div className={styles.uSContact}>
              <div className={styles.callUs}>Call Us</div>
              <div className={styles.listItems}>
                <a
                  className={styles.detail}
                  href="tel:+1510-400-4470"
                  target="_blank"
                >
                  +1510-400-4470
                </a>
                <a
                  className={styles.detail1}
                  href="tel:+1510-371-3088"
                  target="_blank"
                >
                  +1510-371-3088
                </a>
                <a
                  className={styles.detail2}
                  href="tel:+1510-203-9247"
                  target="_blank"
                >
                  +1510-203-9247
                </a>
                <a
                  className={styles.detail3}
                  href="tel:+1510-240-1100"
                  target="_blank"
                >
                  +1510-240-1100
                </a>
                <div className={styles.emailUs}>Email Us</div>
                <div className={styles.hrtalentcogentcom}>
                  hr@talentcogent.com
                </div>
                <div className={styles.address}>Address</div>
                <div className={styles.irvingtonAveFremontCaContainer}>
                  <p className={styles.irvingtonAve}>4140 Irvington Ave</p>
                  <p className={styles.fremontCa94538}>Fremont CA 94538</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col4}>
            <h3 className={styles.india}>India</h3>
            <div className={styles.indiaContact}>
              <div className={styles.callUs1}>Call Us</div>
              <div className={styles.listItems1}>
                <a
                  className={styles.detail4}
                  href="tel: +91 90596 66582"
                  target="_blank"
                >
                  +91 90596 66582
                </a>
                <a
                  className={styles.detail5}
                  href="tel:+91 95155 67159"
                  target="_blank"
                >
                  +91 95155 67159
                </a>
                <a
                  className={styles.detail6}
                  href="tel:+91 83283 48856"
                  target="_blank"
                >
                  +91 83283 48856
                </a>
                <div className={styles.emailUs1}>Email Us</div>
                <div className={styles.hrtalentcogentcom1}>
                  hr@talentcogent.com
                </div>
                <div className={styles.address1}>Address</div>
                <div className={styles.b8HumayunNagarContainer}>
                  <p className={styles.b8HumayunNagar}>
                    10-3-14/B/8 Humayun Nagar Mehdipatnam Hyd-28
                  </p>
                  <p className={styles.landmarkOppHumayun}>
                    Landmark: Opp Humayun
                  </p>
                  <p className={styles.policeStation}>police station</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col3}>
            <h3 className={styles.quickLinks}>Quick Links</h3>
            <div className={styles.listItems2}>
              <div className={styles.home}>Home</div>
              <div className={styles.courses}>Courses</div>
              <div className={styles.placements}>Placements</div>
              <div
                className={styles.recruitingStaffing}
              >{`Recruiting & Staffing`}</div>
              <div className={styles.company}>Company</div>
              <div className={styles.career}>Career</div>
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.followUs}>Follow Us</h3>
            <div className={styles.socialLinks1}>
              <div className={styles.link}>
                <img
                  className={styles.iconFacebook}
                  loading="lazy"
                  alt=""
                  src="/icon--facebook.svg"
                />
                <div className={styles.facebook}>Facebook</div>
              </div>
              <div className={styles.link1}>
                <img
                  className={styles.iconInstagram}
                  loading="lazy"
                  alt=""
                  src="/icon--instagram.svg"
                />
                <div className={styles.instagram}>Instagram</div>
              </div>
              <div className={styles.link2}>
                <img className={styles.iconX} alt="" src="/icon--x.svg" />
                <div className={styles.x}>X</div>
              </div>
              <div className={styles.link3}>
                <img
                  className={styles.iconLinkedin}
                  alt=""
                  src="/icon--linkedin.svg"
                />
                <div className={styles.linkedin}>LinkedIn</div>
              </div>
              <div className={styles.link4}>
                <img
                  className={styles.iconYoutube}
                  alt=""
                  src="/icon--youtube.svg"
                />
                <div className={styles.youtube}>Youtube</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
