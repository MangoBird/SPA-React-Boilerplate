import { push } from 'connected-react-router';
import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';

const logo = require('../../../assets/img/logo.png');
interface HeaderProps {
  isShadowed: boolean;
  isFixed: boolean;
  dispatchRoutePush: (route: string) => any;
}

interface HeaderState {
  isDropdownOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
  }
  private handleHomeNav = (e: any) => {
    e.preventDefault();
    this.props.dispatchRoutePush('/');
  };

  private getHeaderClass = () => {
    let className = '';

    if (this.props.isFixed) className += 'fixed';
    if (this.props.isShadowed && className.length > 0) className += ' shadowed';
    if (this.props.isShadowed && className.length === 0) {
      className += 'shadowed';
    }

    return className;
  };

  public render() {
    return (
      <header id="header" className={this.getHeaderClass()}>
        <div className="header_area">
          <div className="logo">
            <h1>
              <a href="/" title="header logo" onClick={this.handleHomeNav}>
                <img
                  className="header_saLogoGreen_img"
                  src={this.props.isShadowed ? logo : logo}
                  alt="My logo"
                />
              </a>
            </h1>
          </div>
          <div className="gnb" />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: any, props: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchRoutePush: (route: string) => dispatch(push(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
