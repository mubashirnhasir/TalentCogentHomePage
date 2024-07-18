import PropTypes from "prop-types";
import styles from "./presence-container.module.css";

const PresenceContainer = ({ className = "" }) => {
  return (
    <section className={[styles.presenceContainer, className].join(" ")}>
      <div className={styles.presencesection}>
        <div className={styles.presenceElementsParent}>
          <div className={styles.presenceElements} />
          <div className={styles.presenceElements1} />
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.mediumLengthHeroHeadlineGoParent}>
                  <h1 className={styles.mediumLengthHero}>Our Presence</h1>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.mediumLengthHero1}>
                  Connecting talent and technology across continents, our
                  expertise spans the globe, delivering innovative solutions and
                  exceptional recruiting services in every corner of the world.
                  With a strong presence in major tech hubs and emerging
                  markets, we empower organizations to achieve excellence and
                  drive innovation on a global scale.
                </div>
              </div>
            </div>
            <div className={styles.wrapperHexMapParent}>
              <div className={styles.wrapperHexMap}>
                <img className={styles.hexMapIcon} alt="" src="/hex-map.svg" />
              </div>
              <div className={styles.tooltipWrapper}>
                <button className={styles.tooltip}>
                  <img
                    className={styles.indicatorIcon}
                    alt=""
                    src="/indicator.svg"
                  />
                  <div className={styles.title}>USA</div>
                  <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
                </button>
              </div>
              <div className={styles.mapPinPinWithName} />
              <button className={styles.tooltip1}>
                <img
                  className={styles.image17Icon}
                  alt=""
                  src="/image-17@2x.png"
                />
                <div className={styles.titleWrapper}>
                  <div className={styles.title1}>UK</div>
                </div>
                <img className={styles.arrowIcon1} alt="" src="/arrow-1.svg" />
              </button>
              <div className={styles.locationTooltip}>
                <button className={styles.tooltip2}>
                  <img
                    className={styles.image16Icon}
                    alt=""
                    src="/image-16@2x.png"
                  />
                  <div className={styles.titleContainer}>
                    <div className={styles.title2}>India</div>
                  </div>
                  <img
                    className={styles.arrowIcon2}
                    alt=""
                    src="/arrow-2.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.lightrightpresence} />
          <div className={styles.lightbottompresence} />
        </div>
      </div>
    </section>
  );
};

PresenceContainer.propTypes = {
  className: PropTypes.string,
};

export default PresenceContainer;
