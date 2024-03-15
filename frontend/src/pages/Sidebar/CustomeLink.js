import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {

    let resoloved = useResolvedPath(to);
    let match = useMatch({path:resoloved.pathname, end:true });

  return (
    <div>
        <Link 
            style={{
                textDecoration:'none',
                color: match ? 'var(--twitter-color)' : 'black'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    </div>
  );
};

export default CustomLink;
