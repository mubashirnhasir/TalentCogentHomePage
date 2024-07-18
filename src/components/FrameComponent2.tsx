import CardOne from "./card-one";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={[styles.clientLogosContentWrapper, className].join(" ")}
    >
      <div className={styles.clientLogosContent}>
        <div className={styles.clientLogosHeading}>
          <div className={styles.clientLogosTitle}>
            <h1 className={styles.heading}>Our Industry leading Courses</h1>
            <div className={styles.subheading}>
              Our Industry leading Courses
            </div>
          </div>
        </div>
        <div className={styles.row1}>
          <CardOne
            salesforceLogopng="/salesforce-logopng@2x.png"
            salesforceAdministrationD={`Salesforce Administration & Developer`}
          />
          <CardOne
            salesforceLogopng="/image-9@2x.png"
            salesforceAdministrationD="MERN Stack"
            propBoxShadow="unset"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
