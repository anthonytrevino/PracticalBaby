import React from 'react';
import './ProfilePage.css'
import { connect } from 'react-redux';


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  }

  componentDidMount(){
    let response = this.props.refreshpage;
    console.log(response + " trying to refresh")
      // this.setState({
      //   brandSelected: response.brandSelected,
      //   carSeatType:response.carSeatType,
      //   colorSelected:response.colorSelected,
      //   maxChildWeight:response.maxChildWeight
      // })
  }



  render() {
    const user = this.props.user
    console.log(this.props)


    return (
      <div>
        <div className="container emp-profile card">
          <form method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="profile-head">

                  <h4> USER PROFILE</h4>

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile Information</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Preferences</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active in" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.firstName} <span></span>
                          {user.lastName}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Username</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.username}</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Brand preference</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.props.brandSelected}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Car seat type selected</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.props.carSeatType}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Color selected</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.props.colorSelected}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Max child weight capacity</label>
                      </div>
                      <div className="col-md-6">
                        <p>{this.props.maxChildWeight}</p>
                      </div>
                    </div>
                    <div className="row">


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return{
    brandSelected :  state.brandSelected,
    carSeatType : state.carSeatType,
    colorSelected : state.colorSelected ,
    maxChildWeight : state.maxChildWeight
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    refreshpage: () => dispatch({type:"refresh"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
