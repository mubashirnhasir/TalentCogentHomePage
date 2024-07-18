import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.contentWrapperWrapper, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.cta}>
            <div className={styles.headingWrapper}>
              <div className={styles.cTAHeading}>
                <h1 className={styles.sectionTitle}>
                  <span>Join A Community Of </span>
                  <span className={styles.span}>10000+ </span>
                  <span>Tech Professionals</span>
                </h1>
                <div className={styles.heading}>
                  <p className={styles.discoverACommunity}>
                    Discover a community of passionate IT tech professionals who
                    have elevated their careers
                  </p>
                  <p className={styles.withTalentCogent}>
                    with Talent Cogent. Together, let's achieve new heights.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ctaCards}>
              <img
                className={styles.bgMaskIcon}
                loading="lazy"
                alt=""
                src="/bg-mask.svg"
              />
              <div className={styles.ctaContent}>
                <div className={styles.ctaCardheading}>
                  <h1
                    className={styles.sectionTitle1}
                  >{`Unlock Your Path to Success & Land Jobs at Tech Titans Worldwide with Talent Cogent's Expert Guidance!`}</h1>
                </div>
                <div className={styles.mailInputField}>
                  <input
                    className={styles.inputArea}
                    placeholder="Your work email address"
                    type="text"
                  />
                  <div className={styles.button}>
                    <div className={styles.label}>ContactUs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.faqSection}>
          <div className={styles.sectionTitle2}>
            <h1 className={styles.faqs}>FAQs</h1>
            <div className={styles.description}>
              This is where all the answers to your questions are.
            </div>
            <img
              className={styles.sectionTitleChild}
              loading="lazy"
              alt=""
              src="/line-10.svg"
            />
          </div>
          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <div className={styles.questionContent}>
                <div className={styles.question}>Question text goes here</div>
                <div className={styles.question1}>Answer Goes here</div>
              </div>
              <img
                className={styles.plusIcon}
                loading="lazy"
                alt=""
                src="/plus@2x.png"
              />
            </div>
            <div className={styles.accordionItem1}>
              <div className={styles.question2}>Question text goes here</div>
              <img className={styles.plusIcon1} alt="" src="/plus-1.svg" />
            </div>
            <div className={styles.accordionItem2}>
              <div className={styles.question3}>Question text goes here</div>
              <img className={styles.plusIcon2} alt="" src="/plus-1.svg" />
            </div>
            <div className={styles.accordionItem3}>
              <div className={styles.question4}>Question text goes here</div>
              <img className={styles.plusIcon3} alt="" src="/plus-1.svg" />
            </div>
            <div className={styles.accordionItem4}>
              <div className={styles.question5}>Question text goes here</div>
              <img className={styles.plusIcon4} alt="" src="/plus-1.svg" />
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.content2}>
              <h3 className={styles.stillHaveA}>Still have a questions?</h3>
            </div>
            <button className={styles.button1}>
              <div className={styles.button2}>Contact</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
