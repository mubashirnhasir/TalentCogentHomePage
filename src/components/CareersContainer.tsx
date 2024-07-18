import TeamCardItem from "./team-card-item";
import PropTypes from "prop-types";
import styles from "./careers-container.module.css";

const CareersContainer = ({ className = "" }) => {
  return (
    <section className={[styles.careersContainer, className].join(" ")}>
      <div className={styles.careerssection}>
        <div className={styles.sectionHeadingWrapper}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.sectionTitle}>
              <p className={styles.talentCogent}>Talent Cogent</p>
              <p className={styles.haveCrackedTheir}>
                Have Cracked Their Dream Careers In
              </p>
            </h1>
          </div>
        </div>
        <div className={styles.teamCardsContainer}>
          <div className={styles.row01}>
            <TeamCardItem
              avatar="/-avatar@2x.png"
              logopng="/logopng.svg"
              name1="Badal Sandhu"
              designation="Linux Administrator"
            />
            <TeamCardItem
              avatar="/-avatar@2x.png"
              logopng="/social-icon.svg"
              name1="Nayeemuddin Khan"
              designation="DevOps Engineer "
            />
            <TeamCardItem
              avatar="/-avatar-2@2x.png"
              logopng="/logopng-1.svg"
              name1="Talha Mohammad"
              designation="Application Support"
            />
            <TeamCardItem
              avatar="/-avatar-3@2x.png"
              logopng="/wells-fargo-logopng.svg"
              name1="Naseeruddin Quadri"
              designation="Network Engineer"
            />
          </div>
          <div className={styles.rightbuttonWrapper}>
            <div className={styles.rightbutton}>
              <img
                className={styles.iconRightArrowAlt}
                alt=""
                src="/icon--rightarrowalt.svg"
              />
            </div>
          </div>
          <div className={styles.row02}>
            <TeamCardItem
              avatar="/-avatar-4@2x.png"
              logopng="/morgan-stanley-iconjpeg.svg"
              name1="Aazeem Mohammad Abdul"
              designation="Application Support Engineer "
            />
            <TeamCardItem
              avatar="/-avatar-5@2x.png"
              logopng="/vistek-iconjpeg.svg"
              name1="Mohammad Mir"
              designation="Software Engineer"
            />
            <TeamCardItem
              avatar="/-avatar-6@2x.png"
              logopng="/zoox-iconjpeg.svg"
              name1="Nayeem Shaik"
              designation="System Engineer"
            />
            <TeamCardItem
              avatar="/-avatar-7@2x.png"
              logopng="/lexisnexis-logopng.svg"
              name1="Ibrahim Arfath"
              designation="Linux System Administrator"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CareersContainer.propTypes = {
  className: PropTypes.string,
};

export default CareersContainer;
