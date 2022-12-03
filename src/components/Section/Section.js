import PropTypes from 'prop-types';
import { SectionStyled, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
