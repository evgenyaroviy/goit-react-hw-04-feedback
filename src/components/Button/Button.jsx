import PropTypes from 'prop-types';
import css from "./button.module.css";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => (
            <button key={option} className={css.button} onClick={() => onLeaveFeedback(option)}>
                {option}
            </button>
        ))
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions;