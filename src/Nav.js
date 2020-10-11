import React from 'react'
import './Nav.css'
import Avatar from '@material-ui/core/Avatar';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__logoContainer">
                <img className="nav__logo" src="https://media-private.canva.com/nIRws/MAEJwcnIRws/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJJATJK7JCUD446NA%2F20201005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201005T065003Z&X-Amz-Expires=49972&X-Amz-Signature=ec1ba5dbf37e3b09a7cac97b7f5fc1476e89afb1b8ebba54d0e7c6cf7e6b6c16&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2005%20Oct%202020%2020%3A42%3A55%20GMT" alt=""/>
            </div>
            <div  className="nav__avatarContainer">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFPwqjsZFiBAg/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=ZSUEEY_L4G9sCCnroJnkAGfVZHBWO3yQQHTHsZp_nzc" />
            </div>
        </div>
    )
}

export default Nav
