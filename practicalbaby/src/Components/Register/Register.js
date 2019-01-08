import React from 'react';


const Register = ({ onRouteChange }) => {
    return (
        <article className="signin br3 ba b--black-10 mv6 shadow-5 w-100 w-50-m w-50-l mw6 center">
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" name="firstname">First Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstname" id="firstname" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" name="lastname">Last Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lastname" id="lastname" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" email="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" password="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" password="confirmpassword">Confirm Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="confirmpassword" id="confirmpassword" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> I accept the Terms and Conditions</label>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={() => onRouteChange('home')} />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('signin')} className="f6 link dim black db pointer">Already have an account?<br></br>Log In Here</p>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default Register;

// class Register extends Component {

//     render() {
//         return (
//             <div>
//                 <form id="registerform" onSubmit={() => this.onSubmit}>

//                     <h1>Register</h1>
//                     <p>{this.state.email}</p>
//                     <ul id="registration">

//                         <li>E-mail address  <input className="form-input" type="email" placeholder="Isabelle@gmail.com" onChange={this.handleEmail} value={this.state.email} refs="cookiewakie@gmail.com" name="emailaddress" required /></li>
//                         <li>First Name  <input className="form-input" type="text" placeholder="Isabelle" name="firstname" refs="Pamela" required /></li>
//                         <li>Last Name  <input className="form-input" type="text" placeholder="Smith" name="lastname" refs="Soto" required /></li>
//                         <li>Username  <input className="form-input" type="text" name="username" placeholder="@Username" refs="cookiewakie" required /></li>
//                         <li>Password  <input className="form-input" type="password" placeholder="Password" name="password" refs="11" required /></li>
//                         <li>Confirm Password <input className="form-input" type="password" placeholder="Password" name="password" refs="11" required /></li>

//                         <li><button type="submit" value="Register">Register</button> </li>
//                     </ul>
//                     <a href="/*">I have an account</a>
//                 </form>
//                 <div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default Register;
