import styled from 'styled-components';
//import { palette } from 'styled-theme';
import { borderRadius, boxShadow } from './style-util';

const WidgetWrapper = styled.div`
  margin: 0 10px;
  ${borderRadius('15px')};
  ${boxShadow('0px 3px 10px #E8E8E8')};
  padding: 5px;

  @media only screen and (max-width: 767) {
    margin-right: 0 !important;
  }
`;

export { WidgetWrapper };
