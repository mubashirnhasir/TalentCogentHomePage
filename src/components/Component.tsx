import PropTypes from "prop-types";
import styles from "./component.module.css";

const Component = ({ className = "", featureIconShape, number, label }) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <img className={styles.featureIconShape} alt="" src={featureIconShape} />
      <div className={styles.details}>
        <b className={styles.number}>{number}</b>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  featureIconShape: PropTypes.string,
  number: PropTypes.string,
  label: PropTypes.string,
};

export default Component;
