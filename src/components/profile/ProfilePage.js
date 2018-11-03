import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import coverPhoto from '../../static/img/retro-hop.jpg';
// import spinner from '../../static/img/index.svg';
import avtar from '../../static/img/avtar.jpg'


class ProfilePage extends Component {

  updateProfilePic(event) {
    // this.props.dispatch(action());
    this.refs.dp.click();
    console.log(this.refs.dp.value);
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <div className="uk-container uk-padding-small" data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div; delay: 40;">

          <div className="uk-margin-medium-bottom">
            <div className="uk-height-medium uk-background-cover uk-light uk-flex" data-uk-parallax="bgy: -200" style={{ backgroundImage: `url(${coverPhoto})`}}>

              <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-padding-remove">
                <div className="uk-grid-small uk-flex-inline" uk-grid="true">

                  <div className="uk-width-auto">
                    <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                      <img className="uk-transition-scale-down ov-curser-pointer uk-transition-opaque" width="150" src={avtar} onClick={(e) => this.updateProfilePic(e)} alt="" uk-tooltip="title: Upload new Profile Picture; pos: bottom-center"/>
                      <div className="uk-position-center">
                        <form style={{ display: 'none' }} onSubmit={this.updateProfilePic.bind(this)}>
                          <input id="dp" name="dp" type="file" ref="dp"/>
                        </form>
                        <span className="uk-transition-slide-bottom-small" uk-icon="icon: cloud-upload; ratio: 3"></span>
                      </div>
                    </div>
                  </div>

                  <div className="uk-width-expand uk-align-center">
                    <h3 onClick={this.uploadPofilePic} className="uk-card-title uk-margin-remove-bottom">Mohit Kumar Yadav</h3>
                    <p className="uk-text-meta uk-margin-remove-top">A below avg human </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="uk-text-center" data-uk-grid="true">
            <div className="uk-width-expand@m">
              <div className="uk-card uk-card-default uk-card-body">Expand</div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-card uk-card-default uk-card-body">1-3</div>
            </div>
          </div>

          <div className="uk-text-center" data-uk-grid="true">
            <div className="uk-width-expand@m">
              <div className="uk-card uk-card-default uk-card-body">Expand</div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-card uk-card-default uk-card-body">1-3</div>
            </div>
          </div>

          <div className="uk-text-center" data-uk-grid="true">
            <div className="uk-width-2-3@m uk-align-center">
              <div className="uk-card uk-card-default uk-card-body">2-3</div>
            </div>
          </div>

          <div className="uk-text-center" data-uk-grid="true">
            <div className="uk-width-2-3@m uk-align-center">
              <div className="uk-card uk-card-default uk-card-body">2-3</div>
            </div>
          </div>

          <div className="uk-text-center" data-uk-grid="true">
            <div className="uk-width-2-3@m uk-align-center">
              <div className="uk-card uk-card-default uk-card-body">2-3</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(ProfilePage));
