import PropTypes from "prop-types";
import styles from "./frame-component6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.newHomePageInner, className].join(" ")}>
      <div className={styles.navbarParent}>
        <header className={styles.navbar}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className={styles.navlinksWrapper}>
            <div className={styles.navlinks}>
              <div className={styles.column}>
                <div className={styles.linkOne}>
                  <div className={styles.component2}>
                    <div className={styles.home}>Home</div>
                    <img
                      className={styles.component2Child}
                      alt=""
                      src="/line-4.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkTwo}>
                  <div className={styles.component21}>
                    <div className={styles.home1}>Company</div>
                    <img
                      className={styles.component2Item}
                      alt=""
                      src="/line-4-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkThree}>
                  <div className={styles.component22}>
                    <div className={styles.home2}>Placements</div>
                    <img
                      className={styles.component2Inner}
                      alt=""
                      src="/line-4-2.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkFour}>
                  <div className={styles.navLinkDropdown}>
                    <div className={styles.component23}>
                      <div className={styles.home3}>Courses</div>
                      <img
                        className={styles.lineIcon}
                        alt=""
                        src="/line-4-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.linkThree1}>
                  <div className={styles.component24}>
                    <div className={styles.home4}>Career</div>
                    <img
                      className={styles.component2Child1}
                      alt=""
                      src="/line-4-4.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkThree2}>
                  <div className={styles.component25}>
                    <div
                      className={styles.home5}
                    >{`Recruiting & staffing`}</div>
                    <img
                      className={styles.component2Child2}
                      alt=""
                      src="/line-4-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctaButtonsWrapper}>
            <button className={styles.ctaButtons}>
              <div className={styles.button}>
                <div className={styles.button1}>Book a consultation</div>
              </div>
              <div className={styles.ctaButtonsChild} />
            </button>
          </div>
        </header>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <img className={styles.frameChild} alt="" src="/group-15.svg" />
              <div className={styles.ellipse} />
              <div className={styles.ellipse1} />
              <div className={styles.theNewStandartInParent}>
                <h1 className={styles.theNewStandartContainer}>
                  <p className={styles.excellenceInRecruiting}>
                    <span
                      className={styles.excellenceIn}
                    >{`Excellence in `}</span>
                    <span className={styles.recruiting}>Recruiting</span>
                    <span>{` &`}</span>
                  </p>
                  <p
                    className={styles.technologyLeadership}
                  >{`Technology Leadership `}</p>
                </h1>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/line-3.svg"
                />
              </div>
              <div className={styles.loremIpsumDolor}>
                Your Premier IT Service Company, Recruitment Consultancy, and
                Software Training Institute. At Talent Cogent, we're your
                strategic partner in navigating the ever-evolving landscape of
                technology.
              </div>
            </div>
            <div className={styles.ctaButtonsContainer}>
              <button className={styles.ctaButtons1}>
                <div className={styles.button2}>
                  <div className={styles.button3}>Get Started</div>
                </div>
                <div className={styles.ctaButtonsItem} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
