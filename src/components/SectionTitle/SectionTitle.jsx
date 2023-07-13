import css from "./sectionTitle.module.css";
import PropTypes from 'prop-types';


const SectionTitle = ({ children }) => {
    return <section className={css.section}>{children}</section>;
}

SectionTitle.propTypes = {
    children: PropTypes.array.isRequired
};

export default SectionTitle;
