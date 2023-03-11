import React from 'react'
import "../accountcss/userinfo.css";
import Form from 'react-bootstrap/Form';


export const UserInfo = () => {
  return (
    <div className = "accountFullUserInfo">
        <h4 className = "accountUserInfoTitle">USER INFORMATION</h4>
        <form>
            <div class="Infoform-row">
                <div class="InfoFormColumn">
                    <label for="inputEmail4">Username</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div class="InfoFormColumn">
                    <label for="inputPassword4">Email</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
            <div class="Infoform-row">
                <div class="InfoFormColumn">
                    <label for="inputEmail4">Change Username</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div class="InfoFormColumn">
                    <label for="inputPassword4">Change Email</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
        </form>
    </div>
  )
}
