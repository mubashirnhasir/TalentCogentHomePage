import PropTypes from "prop-types";
import styles from "./card-three.module.css";

const CardThree = ({ className = "", image10, jAVAFullStack }) => {
  return (
    <div className={[styles.cardthree, className].join(" ")}>
      <div className={styles.coursesCardContainers}>
        <div className={styles.card}>
          <div className={styles.courseCardImage}>
            <img
              className={styles.image10Icon}
              loading="lazy"
              alt=""
              src={image10}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.content1}>
              <div className={styles.coursesCardDetails}>
                <div className={styles.coursesCardInfo}>
                  <div className={styles.courseCardTitle}>Expert Trainers</div>
                  <div className={styles.courseCardDuration}>
                    <img
                      className={styles.clock05Icon}
                      alt=""
                      src="/clock05.svg"
                    />
                    <div className={styles.months}>3 Months</div>
                  </div>
                </div>
                <h3 className={styles.javaFullstack}>{jAVAFullStack}</h3>
              </div>
              <div className={styles.courseCardClassType}>
                <div className={styles.userGroupParent}>
                  <img
                    className={styles.userGroupIcon}
                    alt=""
                    src="/usergroup.svg"
                  />
                  <div className={styles.offlineClasses}>Offline Classes</div>
                </div>
                <div className={styles.userSquareParent}>
                  <img
                    className={styles.userSquareIcon}
                    alt=""
                    src="/usersquare.svg"
                  />
                  <div className={styles.onlineClass}>Online Class</div>
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <img
                className={styles.download04Icon}
                alt=""
                src="/download04.svg"
              />
              <div className={styles.syllabus}>Syllabus</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardThree.propTypes = {
  className: PropTypes.string,
  image10: PropTypes.string,
  jAVAFullStack: PropTypes.string,
};

export default CardThree;
