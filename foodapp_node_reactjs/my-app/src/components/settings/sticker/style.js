import styled from 'styled-components';
import { borderRadius } from '../widget/style-util'

const StickerWidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  ${borderRadius('5px')}; 
 
    .isoLabel {
      font-size: 20px ;
      font-weight: 600;
      margin: 0;
      line-height: 17px;
    }
  }
`;

export { StickerWidgetWrapper };
