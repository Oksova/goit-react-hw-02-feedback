import s from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div className={s.section}>
      <h2 className={s.title}> {title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
