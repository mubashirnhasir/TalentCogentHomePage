import PropTypes from "prop-types";
import styles from "./team-card-item.module.css";

const TeamCardItem = ({
  className = "",
  avatar,
  logopng,
  name1,
  designation,
}) => {
  return (
    <div className={[styles.teamCardItem, className].join(" ")}>
      <div className={styles.profileWrapper}>
        <div className={styles.profile}>
          <img className={styles.avatarIcon} alt="" src={avatar} />
          <div className={styles.twitterLogo}>
            <img
              className={styles.logopngIcon}
              loading="lazy"
              alt=""
              src={logopng}
            />
          </div>
        </div>
      </div>
      <div className={styles.teamNameOne}>
        <div className={styles.name}>{name1}</div>
        <div className={styles.designation}>{designation}</div>
      </div>
    </div>
  );
};

TeamCardItem.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
  logopng: PropTypes.string,
  name1: PropTypes.string,
  designation: PropTypes.string,
};

export default TeamCardItem;
