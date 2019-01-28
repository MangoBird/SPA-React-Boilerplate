import React from 'react';
import { connect } from 'react-redux';
import { Footer, Header, ImageUpload } from '../../common/components';
import './Landing.scss';

// interface LandingProps {}

// interface LandingState {}

class Landing extends React.Component {
  public render() {
    return (
      <div id="landing-wrap">
        <Header isFixed={false} isShadowed={false} />
        <div className="landing-container">
          <ImageUpload
            updateImageLinks={() => console.log('update image')}
            imgLinks={[]}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
