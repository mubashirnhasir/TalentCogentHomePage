import CardThree from "./card-three";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.coursesContentWrapper, className].join(" ")}>
      <div className={styles.coursesContent}>
        <div className={styles.row2}>
          <CardThree
            image10="/image-10@2x.png"
            jAVAFullStack="JAVA FullStack"
          />
          <CardThree
            image10="/amazon-web-services-logopng@2x.png"
            jAVAFullStack={`AWS & DevOps`}
          />
          <div className={styles.infographiccoursedesign}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameItem} alt="" src="/vector-7174.svg" />
              <img
                className={styles.frameInner}
                alt=""
                src="/vector-7175.svg"
              />
              <div className={styles.courseInfographicShapeItemsParent}>
                <div className={styles.courseInfographicShapeItems} />
                <div className={styles.courseInfographicShapeItems1} />
                <div className={styles.rectangleDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.ellipseDiv} />
                <img
                  className={styles.courseInfographicShapeItems2}
                  alt=""
                  src="/course-infographic-shape-items.svg"
                />
                <img
                  className={styles.courseInfographicShapeItems3}
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-126.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-161@2x.png"
                />
                <div className={styles.courseInfographicShapeItems4} />
                <div className={styles.courseInfographicShapeItems5} />
                <div className={styles.frameChild2} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.courseExploreButton}>
          <button className={styles.coursebutton}>
            <div className={styles.button}>View all</div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
