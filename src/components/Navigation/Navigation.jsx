import React from 'react';
import { SecondaryMenuLink } from '../../constants/constants';
import WhytoDevelop from '../../assets/svgs/develop.svg';
import QuestionMark from '../../assets/svgs/Icon-open-question-mark.svg';
import Downloads from '../../assets/svgs/Icon-feather-download.svg';
import Community from '../../assets/svgs/Icon-feather-users.svg';
import Signin from '../../assets/svgs/login.svg';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <ul>
        {
          SecondaryMenuLink.map((items, idx) => {
            return <li>
              <a href={items.link} key={items.id} role="button" tabIndex={0}>
                <SVGIcon action={items.icon} imgAlign="nav-img" />{items.name}
              </a>
              <div className="vertical-line"></div>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation;

const SVGIcon = ({action, imgAlign}) => {
  switch(action) {
    case "develop":
      return <img src={WhytoDevelop} alt={action} className={imgAlign} />
    case "Howtodevelop":
      return <img src={QuestionMark} alt={action} className={imgAlign} />    
    case "Downloads":
      return <img src={Downloads} alt={action} className={imgAlign} />
    case "Community":
      return <img src={Community} alt={action} className={imgAlign} />
    case "Signin":
      return <img src={Signin} alt={action} className={imgAlign} />
    default:
      return <img src={Signin} alt={action} className={imgAlign} />
  }
}