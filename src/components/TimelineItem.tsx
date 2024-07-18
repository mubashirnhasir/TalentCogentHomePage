import PropTypes from "prop-types";
import styles from "./timeline-item.module.css";

const TimelineItem = ({ className = "", frame145, heading, text }) => {
  return (
    <div className={[styles.timelineItem, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.wrapperFrame145}>
          <img
            className={styles.wrapperFrame145Child}
            loading="lazy"
            alt=""
            src={frame145}
          />
        </div>
        <img className={styles.dividerIcon} alt="" src="/divider.svg" />
      </div>
      <div className={styles.content1}>
        <b className={styles.heading}>{heading}</b>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  className: PropTypes.string,
  frame145: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default TimelineItem;
