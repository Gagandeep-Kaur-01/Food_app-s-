
  
  // Border Radius
  export function borderRadius(radius = 0) {
    return `
        -webkit-border-radius: ${radius};
        -moz-border-radius: ${radius};
        -ms-transition: ${radius};
        -o-border-radius: ${radius};
        border-radius: ${radius};
    `;
  }
  
  // Box Shadow
  export function boxShadow(shadow = 'none') {
    return `
        -webkit-box-shadow: ${shadow};
        -moz-box-shadow: ${shadow};
        box-shadow: ${shadow};
    `;
  }
  