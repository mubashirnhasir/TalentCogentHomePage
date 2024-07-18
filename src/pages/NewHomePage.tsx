import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import ServicesCardContent from "../components/services-card-content";
import ServicesTimeline from "../components/services-timeline";
import CareersContainer from "../components/careers-container";
import PresenceContainer from "../components/presence-container";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./new-home-page.module.css";

const NewHomePage = () => {
  return (
    <div className={styles.newHomePage}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.lookingForA}>Looking for a new career?</div>
          <b className={styles.getInTouch}>Get in touch</b>
        </div>
      </div>
      <div className={styles.newHomePageChild} />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className={styles.servicessection}>
        <div className={styles.subheading}>Resources</div>
        <div className={styles.servicessectionChild} />
        <ServicesCardContent />
        <div className={styles.servicestimelineWrapper}>
          <ServicesTimeline />
        </div>
        <div className={styles.servicessectionInner}>
          <div className={styles.frameChild} />
        </div>
      </section>
      <CareersContainer />
      <PresenceContainer />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default NewHomePage;
