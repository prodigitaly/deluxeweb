import { ScrollLink } from 'react-scroll';
const Link = (props) => {
    return (
      <a {...props}>
        {props.children}
      </a>
    );
  };
  
  export const ScrollableLink = ScrollLink(Link);