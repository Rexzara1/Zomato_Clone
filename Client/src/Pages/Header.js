import React from "react";
import Modal from 'react-modal';



const customStyles = {
    overlay:{
        backgroundColor: "rbga(0,0,0,0.8)"
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
     },
  };

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            loginModal: false,
        }
        
    }

    //For Modal
    handleModal = (state, value) => {

        this.setState({ [state]: value });
    }
    google = () =>{
        window.open("http://localhost:5500/auth/google", "_self");
    }

    logout = () => {
        window.open("http://localhost:5500/auth/logout", "_self");
    }

    render(){
        const { loginModal } = this.state; // calling of the state.
        const {user} = this.props;
        return(
            <div>
                <nav class="navbar bg-danger" data-bs-theme="">
                    <div class="container">
                        <div class="navbar-brand text-danger circle">
                            <h2 class="logo">e!</h2>
                        </div>
                        {console.log(user)}
                        {!user ? (
                            <form class="d-flex nav-form">
                                <button type="button" class="btn btn-danger" onClick={() => this.handleModal('loginModal', true)}>Login</button>
                                <button type="button" class="btn btn-outline-light">Create an account</button>
                            </form>
                        ) : (
                            <form class="d-flex nav-form">
                                <img src={user.picture} className="circle me-3" />
                                <p className="text-white m-3">{user.displayName}</p>
                                <button type="button" class="btn btn-outline-light" onClick={this.logout}>Logout</button>
                            </form>
                        )}
                        
                    </div>
                </nav>

                <Modal
                    isOpen={loginModal}
                    style={customStyles}
                    >
                    <div onClick={() => this.handleModal('loginModal', false)} className="close"><i class="bi bi-x-lg"></i></div>
                    <div>
                        <input type="button" className="btn btn-outline-success px-4" value={"GOOGLE"} onClick={this.google} />
                    </div>
                </Modal> 
            </div>
        )
    }
}

export default Header;