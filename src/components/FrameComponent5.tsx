import Component from "./component";
import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.newHomePageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipse} />
              <div className={styles.ellipse1} />
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.wrapperNumberCardHolderWrapper}>
            <div className={styles.wrapperNumberCardHolder}>
              <img
                className={styles.numberCardHolder}
                loading="lazy"
                alt=""
                src="/frame-1000001215@2x.png"
              />
            </div>
          </div>
          <div className={styles.numbercards}>
            <Component
              featureIconShape="/feature-icon-shape.svg"
              number="1900+"
              label="Trusted by students"
            />
            <Component
              featureIconShape="/feature-icon-shape1.svg"
              number="93+"
              label="Clients"
            />
            <Component
              featureIconShape="/feature-icon-shape2.svg"
              number="136+"
              label="Success Story"
            />
            <Component
              featureIconShape="/feature-icon-shape3.svg"
              number="07+"
              label="Courses"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
