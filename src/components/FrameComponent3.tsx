import Column from "./column";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.ellipseParent, className].join(" ")}>
      <div className={styles.ellipse} />
      <div className={styles.frameChild} />
      <div className={styles.nestedHeadingWrapper}>
        <div className={styles.nestedHeading}>
          <div className={styles.headingContentWrapper}>
            <div className={styles.headingContent}>
              <h1 className={styles.heading}>Our Capabilities</h1>
              <div className={styles.text}>{`IT Recruitment & Staffing`}</div>
            </div>
          </div>
          <div className={styles.columnParent}>
            <Column
              placeholderImage1="/placeholder-image-1@2x.png"
              contractStaffing="Contract Staffing"
            />
            <div className={styles.onshoreParent}>
              <div className={styles.permanentStaffingParent}>
                <img
                  className={styles.placeholderImage3}
                  alt=""
                  src="/placeholder-image-3@2x.png"
                />
                <div className={styles.permanentStaffingTitle}>
                  <b className={styles.permanentStaffing}>Permanent Staffing</b>
                </div>
              </div>
              <div className={styles.offshoreParent}>
                <img
                  className={styles.offshoreParentChild}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.offshoreTitleParent}>
                  <img
                    className={styles.placeholderImage4}
                    alt=""
                    src="/placeholder-image-4@2x.png"
                  />
                  <button className={styles.offshoreTitle}>
                    <b className={styles.offshore}>Offshore</b>
                  </button>
                </div>
              </div>
            </div>
            <Column
              placeholderImage1="/placeholder-image-6@2x.png"
              contractStaffing="Onshore "
              propBackgroundImage="url('/placeholder-image-6@2x.png')"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
