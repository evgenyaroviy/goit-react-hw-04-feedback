import PropTypes from 'prop-types';
import css from "./button.module.css";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options)
    return (
        <>
            <button className={css.button}
            onClick={() => onLeaveFeedback(options.goodValue)}>
                Good
        </button>
        <button className={css.button}
            onClick={() => onLeaveFeedback(options.neutralValue)}>
                Neutral
        </button>
        <button className={css.button}
            onClick={() => onLeaveFeedback(options.badValue)}>
                Bad
        </button>
        </>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions;