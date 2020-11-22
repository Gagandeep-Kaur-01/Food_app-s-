import React from 'react';
import { StickerWidgetWrapper } from './style';
import defaultColors from './defaultColors';


function StickerWidget(props) {
  const { bgColor, width, icon, iconBgColor, iconBgIndex, iconColor, number, numberColor, text, textColor, numberOfOrders, getAllOrders } = props;

  const stickerClasses = {
    numberOfOrders: {
      color: numberOfOrders ? numberOfOrders : defaultColors.statColor
    },
    widgetStyle: {
      background: bgColor ? bgColor : defaultColors.bgColor,
      width: width
    },
    iconStyle: {
      color: iconColor ? iconColor : defaultColors.iconColor
    },
    iconBgColor: {
      background: iconBgColor ? iconBgColor : defaultColors.iconBgColor[iconBgIndex]
    }
  };

  return (
    
    <StickerWidgetWrapper className="isoStickerWidget" style={stickerClasses.widgetStyle}>
      <div className="isoIconWrapper" style={stickerClasses.iconBgColor}>
        <i className={icon} style={stickerClasses.iconStyle} />
      </div>     
      <div>
        <span className="isoLabel">
          {text}
        </span>
            
        <div>
          {numberOfOrders}
        </div>
        <div>
          <button type="button" onClick={(e) => getAllOrders()} className="btn btn-primary">Get all Orders</button>
        </div>
      </div>
    </StickerWidgetWrapper>
  );
}

export default StickerWidget;