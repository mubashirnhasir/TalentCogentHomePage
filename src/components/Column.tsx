import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./column.module.css";

const Column = ({
  className = "",
  placeholderImage1,
  contractStaffing,
  propBackgroundImage,
}) => {
  const columnStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.column, className].join(" ")} style={columnStyle}>
      <img
        className={styles.placeholderImage1}
        alt=""
        src={placeholderImage1}
      />
      <button className={styles.serviceHeading}>
        <b className={styles.contractStaffing}>{contractStaffing}</b>
      </button>
    </div>
  );
};

Column.propTypes = {
  className: PropTypes.string,
  placeholderImage1: PropTypes.string,
  contractStaffing: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default Column;
