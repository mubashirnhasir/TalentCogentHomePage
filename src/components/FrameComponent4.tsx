import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.logoContentWrapper}>
        <div className={styles.logoContent}>
          <div className={styles.logoHeading}>
            <div className={styles.logoEading}>
              <h1 className={styles.sectionTitle}>
                Joining forces that define excellence
              </h1>
              <div className={styles.description}>
                Our Alumni Thrive in Top Fortune 500 Companies
              </div>
            </div>
            <img
              className={styles.logoHeadingChild}
              loading="lazy"
              alt=""
              src="/line-3-1.svg"
            />
          </div>
          <div className={styles.logos}>
            <div className={styles.logoItems}>
              <div className={styles.col1}>
                <div className={styles.clientLogoCardParent}>
                  <img
                    className={styles.clientLogoCard}
                    alt=""
                    src="/-client-logo-card.svg"
                  />
                  <img className={styles.lineIcon} alt="" src="/line.svg" />
                </div>
                <div className={styles.clientLogoCardGroup}>
                  <div className={styles.clientLogoCard1}>
                    <div className={styles.clientLogo}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group.svg"
                      />
                      <img
                        className={styles.groupIcon1}
                        loading="lazy"
                        alt=""
                        src="/group-1.svg"
                      />
                    </div>
                  </div>
                  <img className={styles.lineIcon1} alt="" src="/line.svg" />
                </div>
                <img
                  className={styles.clientLogoCard2}
                  loading="lazy"
                  alt=""
                  src="/-client-logo-card-1.svg"
                />
              </div>
            </div>
            <img className={styles.lineIcon2} alt="" src="/line-2.svg" />
            <div className={styles.logoItems1}>
              <div className={styles.col2}>
                <div className={styles.clientLogoCardContainer}>
                  <img
                    className={styles.clientLogoCard3}
                    alt=""
                    src="/-client-logo-card-2.svg"
                  />
                  <img className={styles.lineIcon3} alt="" src="/line-31.svg" />
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.clientLogoCard4}
                    alt=""
                    src="/-client-logo-card-3.svg"
                  />
                  <img className={styles.lineIcon4} alt="" src="/line-31.svg" />
                </div>
                <img
                  className={styles.clientLogoCard5}
                  loading="lazy"
                  alt=""
                  src="/-client-logo-card-4.svg"
                />
              </div>
            </div>
            <img className={styles.lineIcon5} alt="" src="/line-5.svg" />
            <div className={styles.logoItems2}>
              <div className={styles.col3}>
                <div className={styles.clientLogoCardParent1}>
                  <img
                    className={styles.clientLogoCard6}
                    alt=""
                    src="/-client-logo-card-5.svg"
                  />
                  <img className={styles.lineIcon6} alt="" src="/line-31.svg" />
                </div>
                <div className={styles.clientLogoCardParent2}>
                  <img
                    className={styles.clientLogoCard7}
                    alt=""
                    src="/-client-logo-card-6.svg"
                  />
                  <img className={styles.lineIcon7} alt="" src="/line-31.svg" />
                </div>
                <img
                  className={styles.clientLogoCard8}
                  loading="lazy"
                  alt=""
                  src="/-client-logo-card-7.svg"
                />
              </div>
            </div>
            <img className={styles.lineIcon8} alt="" src="/line-8.svg" />
            <div className={styles.logoItems3}>
              <div className={styles.col4}>
                <div className={styles.clientLogoCardParent3}>
                  <img
                    className={styles.clientLogoCard9}
                    alt=""
                    src="/-client-logo-card-8.svg"
                  />
                  <img className={styles.lineIcon9} alt="" src="/line-31.svg" />
                </div>
                <div className={styles.clientLogoCardParent4}>
                  <img
                    className={styles.clientLogoCard10}
                    alt=""
                    src="/-client-logo-card-9.svg"
                  />
                  <img
                    className={styles.lineIcon10}
                    alt=""
                    src="/line-31.svg"
                  />
                </div>
                <img
                  className={styles.clientLogoCard11}
                  loading="lazy"
                  alt=""
                  src="/-client-logo-card-10.svg"
                />
              </div>
            </div>
            <img className={styles.lineIcon11} alt="" src="/line-11.svg" />
            <div className={styles.clientContentWrapper}>
              <div className={styles.clientContent}>
                <div className={styles.col5}>
                  <div className={styles.clientLogoCardParent5}>
                    <img
                      className={styles.clientLogoCard12}
                      alt=""
                      src="/-client-logo-card-11.svg"
                    />
                    <img className={styles.lineIcon12} alt="" src="/line.svg" />
                  </div>
                  <div className={styles.clientLogoCardParent6}>
                    <img
                      className={styles.clientLogoCard13}
                      alt=""
                      src="/-client-logo-card-12.svg"
                    />
                    <img className={styles.lineIcon13} alt="" src="/line.svg" />
                  </div>
                  <img
                    className={styles.clientLogoCard14}
                    loading="lazy"
                    alt=""
                    src="/-client-logo-card-13.svg"
                  />
                </div>
                <div className={styles.clientContentInner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseDiv} />
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
