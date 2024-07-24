import React from 'react';

// Linked Button purposes
import { Link } from 'react-router-dom';

import './Button.css';

// Button Element conditions
// Props provided :
// - props.href
// - props.to
// - props.size
// - props.inverse
// - props.danger
// - props.exact
// - props.size
// - props.type
// - props.onClick
// - props.disabled
const Button = props => {
  if (props.href) {
    return (
      <a
        // costumized className for design purposes
        className={`button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        // costumized className for design purposes
        className={`button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      // costumized className for design purposes
      className={`button button--${props.size || 'default'} ${props.inverse &&
        'button--inverse'} ${props.danger && 'button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
