import TimelineItem from "./timeline-item";
import PropTypes from "prop-types";
import styles from "./services-timeline.module.css";

const ServicesTimeline = ({ className = "" }) => {
  return (
    <div className={[styles.servicestimeline, className].join(" ")}>
      <TimelineItem
        frame145="/frame-145.svg"
        heading="Career Service and Guidance"
        text="All of our program come with exclusive Career Services that will equip you to use your learnings and skills to ace your next interview or excel in your current role."
      />
      <TimelineItem
        frame145="/frame-145-1.svg"
        heading="Live Mock Interviews"
        text="Gain invaluable insights and practical experience through live mock interviews conducted by seasoned industry experts."
      />
      <TimelineItem
        frame145="/frame-145-2.svg"
        heading="Mock Assessments"
        text="Series of mock assessments and detailed interview prepration sprints to ace top tech jobs."
      />
      <TimelineItem
        frame145="/frame-146.svg"
        heading="Enhance Professional Presence"
        text="Get your GitHub, LinkedIn, and resume ready for success with personalized expert guidance. Enhance your professional presence and showcase your skills to attract top opportunities in the industry."
      />
      <div className={styles.timelineItem}>
        <div className={styles.wrapperFrame145}>
          <img
            className={styles.wrapperFrame145Child}
            loading="lazy"
            alt=""
            src="/frame-145-3.svg"
          />
        </div>
        <div className={styles.content}>
          <b className={styles.heading}>Tailored Job Application Guidance</b>
          <div className={styles.text}>
            Guidance to start applying to a diverse set of job opportunities
            in-line with your career aspirations.
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesTimeline.propTypes = {
  className: PropTypes.string,
};

export default ServicesTimeline;
