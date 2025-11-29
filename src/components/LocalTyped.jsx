import React, { useEffect, useRef } from 'react';
import TypedJs from 'typed.js';

const LocalTyped = ({ strings = [], typeSpeed = 40, backSpeed = 50, loop = true, className = '', ...rest }) => {
  const elRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    typedInstance.current = new TypedJs(elRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      ...rest,
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [JSON.stringify(strings), typeSpeed, backSpeed, loop]);

  return <span ref={elRef} className={className} />;
};

export default React.memo(LocalTyped);
