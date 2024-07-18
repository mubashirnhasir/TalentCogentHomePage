import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./card-one.module.css";

const CardOne = ({
  className = "",
  salesforceLogopng,
  salesforceAdministrationD,
  propBoxShadow,
}) => {
  const cardOneStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  return (
    <div className={[styles.cardone, className].join(" ")} style={cardOneStyle}>
      <div className={styles.testimonialCardContainers}>
        <div className={styles.card}>
          <img
            className={styles.salesforceLogopngIcon}
            loading="lazy"
            alt=""
            src={salesforceLogopng}
          />
          <div className={styles.content}>
            <div className={styles.content1}>
              <div className={styles.testimonialCardDetails}>
                <div className={styles.testimonialCardInfo}>
                  <div className={styles.cardTitle}>Expert Trainers</div>
                  <div className={styles.cardDuration}>
                    <img
                      className={styles.clock05Icon}
                      alt=""
                      src="/clock05.svg"
                    />
                    <div className={styles.months}>3 Months</div>
                  </div>
                </div>
                <h3 className={styles.salesforceAdministration}>
                  {salesforceAdministrationD}
                </h3>
              </div>
              <div className={styles.cardClassType}>
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

CardOne.propTypes = {
  className: PropTypes.string,
  salesforceLogopng: PropTypes.string,
  salesforceAdministrationD: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
};

export default CardOne;
