import PropTypes from "prop-types";
import styles from "./services-card-content.module.css";

const ServicesCardContent = ({ className = "" }) => {
  return (
    <div className={[styles.servicesCardContent, className].join(" ")}>
      <div className={styles.servicesCardHeader}>
        <h1 className={styles.heading}>
          Prepare To Break Through Into Top Tech Jobs In The Market
        </h1>
        <div className={styles.heading1}>
          All of our program come with exclusive Career Services that will equip
          you to use your learnings and skills to ace your next interview or
          excel in your current role.
        </div>
      </div>
      <div className={styles.servicesBody}>
        <div className={styles.servicesDescription}>
          <div className={styles.expertContainer}>
            <div className={styles.becomeExpertInTechnologyParent}>
              <div className={styles.becomeExpertIn}>
                Become expert in technology
              </div>
              <div className={styles.expertShapes}>
                <img className={styles.lineIcon} alt="" src="/line-14.svg" />
                <img className={styles.lineIcon1} alt="" src="/line-15.svg" />
                <div className={styles.shapeOne}>
                  <div className={styles.wrapperVector}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.shapeTwo}>
                    <div className={styles.wrapperVector1}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <div className={styles.shapeThree}>
                      <div className={styles.ellipse} />
                      <div className={styles.ellipseParent}>
                        <div className={styles.ellipse1} />
                        <img
                          className={styles.image7Icon}
                          loading="lazy"
                          alt=""
                          src="/image-7@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.ellipse2} />
                    <div className={styles.ellipse3} />
                  </div>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.ellipse4} />
                    <div className={styles.frame} />
                  </div>
                </div>
                <div className={styles.shapeItems} />
                <div className={styles.shapeItems1} />
              </div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.line} />
          </div>
          <div className={styles.talkWithOur}>{`Talk with our counselor `}</div>
        </div>
      </div>
      <div className={styles.dreamJobContainer}>
        <div className={styles.frameParent}>
          <div className={styles.getYourDreamJobWrapper}>
            <div className={styles.getYourDream}>Get your dream job</div>
          </div>
          <div className={styles.getEnrolledInCourseParent}>
            <div className={styles.getEnrolledIn}>Get enrolled in course</div>
            <div className={styles.line1} />
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesCardContent.propTypes = {
  className: PropTypes.string,
};

export default ServicesCardContent;
