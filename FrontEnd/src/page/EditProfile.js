import React, { useState } from 'react';
import Header from '../component/Header';


document.body.style.backgroundColor = "#DEDBD3";

// const ChangePass = () => {
//     $('#picard').hide();
//     $('#aicard').hide();
//     $('#passcard').show();
// }

// const CancelPass = () => {
//     $('#picard').show();
//     $('#aicard').show();
//     $('#passcard').hide();
// }

const EditProfile = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isPassVisible, setIsPassVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setIsPassVisible(!isPassVisible);
    };

    return (
        // <!--EDIT USER HERE-->
    <div class="container1">
        <Header />
        <form id="userForm" method="put">
        {isVisible ? (
            <div class="row" style={{margin: '60px 60px 0 60px'}}>

                {/* <!-- Personal Information : LEFT --> */}
                <div class="col">
                    <div class="card" style={{padding: '30px'}} id="picard">
                        <div class="card-headers" style={{marginBottom: '15px'}}>
                            <h3 style={{color: 'rgb(82, 10, 10)', fontWeight: 'bolder', marginBottom: '15px'}}><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</h3>
                            <h5 style={{color: '#7993a', fontWeight: 'bold'}}>PERSONAL INFORMATION</h5>
                        </div>
                        <div class="card-bodys">
                            <input type="hidden" id="userId" />
                            <div class="mb-4">
                                <label style={{fontWeight: 'bold'}}>First Name:</label>
                                {/* <input class="form-control" id="editFname" type="text" placeholder="First Name" name="firstname"/> */}
                            </div>
                            <div class="mb-4">
                                <label style={{fontWeight: 'bold'}}>Last Name:</label>
                                {/* <input class="form-control" id="editLname" type="text" placeholder="Last Name" name="lastname"/> */}
                            </div>
                            <div class="mb-4">
                                <label style={{fontWeight: 'bold'}}>Address:</label>
                                {/* <input class="form-control" id="editAddress" type="text" placeholder="Home Address" name="address"/> */}
                            </div>
                            <div class="mb-4">
                                <label style={{fontWeight: 'bold'}}>Contact No.:</label>
                                {/* <input class="form-control" id="editContact" type="text" placeholder="Contact No." name="contactNo"/> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Account Information : RIGHT --> */}
                <div class="col">
                    <div class="card" style={{padding: '30px'}} id="aicard">
                        <div class="card-headers" style={{marginBottom: '15px'}}>
                            <h5 style={{color: '#7993a0', fontWeight: 'bold'}}>ACCOUNT INFORMATION</h5>
                        </div>
                        <div class="card-bodys">    
                            <div class="mb-4">
                                <label style={{fontWeight: 'bold'}}>Username:</label>
                                {/* <input class="form-control" id="editUsername" type="text" placeholder="Username" name="username"/> */}
                            </div>
                            <div class="mb-4">
                                <label style={{fontWeight: 'bold'}}>Email Address:</label>
                                {/* <input class="form-control" id="editEmail" type="email" placeholder="Email" name="email"/> */}
                            </div>

                            {/* <!-- Error Message --> */}
                            <span id="errMsg" style={{color: 'red'}}></span><br/>

                            {/* <!-- Buttons --> */}
                            <div style={{float: 'right'}}>
                                <a href="/profile" type="button" class="btn btn-outline-danger">Cancel</a>&nbsp;
                                <button type="button" class="btn btn-secondary" id="changePassBtn" onClick={toggleVisibility}>Change Password</button>&nbsp;
                                <button type="submit" class="btn" style={{backgroundColor: '#537557', color: 'white'}}><i class="fa-solid fa-floppy-disk me-2"></i>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
        </form>

        {/* <!-- CHANGE PASSWORD --> */}
        <form id="userpassForm">
        {isPassVisible ? (
            <div class="card" style={{width:'45%', height: '350px', float: 'left', padding: '30px', margin: '60px 60px 60px 72px'}} id="passcard">
                <div class="card-headers" style={{marginBottom: '15px'}}>
                    <h5 style={{color: '#7993a0', fontWeight: 'bold'}}>CHANGE PASSWORD</h5>
                </div>
                <div class="card-bodys">
                    <input type="hidden" id="passId"/>
                    <div class="mb-4">
                        <input class="form-control" type="password" placeholder="Old Password" name="oldpass" id="oldpass"/>
                    </div>
                    <div class="mb-4">
                        <input class="form-control" type="password" placeholder="New Password" name="password" id="newpass"/>
                    </div>
                    <div class="mb-4">
                        <input class="form-control" type="password" placeholder="Confirm Password" id="conpass" name="conpass"/>
                    </div>   

                    {/* <!-- Error Message --> */}
                    <span id="passerrMsg" style={{color: 'red'}}></span>

                    {/* <!-- Buttons --> */}
                    <div style={{float: 'right'}}>
                        <button type="button" class="btn btn-outline-danger" id="cancelPassBtn" onClick={toggleVisibility}>Cancel</button>&nbsp;
                        <button type="submit" class="btn" style={{backgroundColor: '#537557', color: 'white'}} id="savePassBtn"><i class="fa-solid fa-floppy-disk me-2"></i>Save Password</button>
                    </div>
                </div>
            </div>
        ) : null}
        </form>       
    </div>
    )
}
export default EditProfile