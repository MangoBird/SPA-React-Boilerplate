import React from 'react';
import './Footer.scss';

const logo = require('../../../assets/img/logo.png');

class Footer extends React.Component {
  public render() {
    return (
      <footer id="footer">
        <div className="footer_area">
          <div className="footer_left">
            <h3>
              <img src={logo} alt="footer logo" />
            </h3>
          </div>
          <div className="footer_right">
            <div className="footer_about">설명</div>
            <ul className="footer_info">
              <li>대표이사 홍길동</li>
              <li>서울특별시 서초구 강남대로 </li>
              <li>사업자등록번호 111-11-1111111</li>
              <li>
                <a href="">support@somewhere.net</a>
              </li>
              <li>&copy; 2018 Somewhere. All rights reserved</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
