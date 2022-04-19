import React, {useRef, useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../../_context/profile-context";

// Borrowed HEAVILY from here: https://react-bootstrap.github.io/components/modal/

const SignUpModal = () => {
    const [set, setShow] = useState(false);

    const emailRef = useRef()
    const usernameRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate();

    const {signup} = useProfile()

    const handleSignup = async () => {
        try {
            await signup(
                emailRef.current.value,
                usernameRef.current.value,
                passRef.current.value
            )
            navigate('/profile')
        } catch (e) {
            throw(e);
        }
    }

    return (
        <>
            <Button className="btn btn-secondary rounded-pill border-0 m-1" onClick={() => setShow(true)}>
                Sign up
            </Button>

            <Modal show={set} onHide={() => setShow(false)}>
                <Modal.Header closeButton className={`border-0`}>
                    <div className={'container text-center'}>
                        <Modal.Title>Register</Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form className={`container`}>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={emailRef}
                                       type="email" id="InputEmail"
                                       placeholder="email@domain.com"/>
                                <small id="emailHelp" className="form-text text-muted ps-2">
                                    We'll never share your email with anyone else
                                </small>
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={usernameRef}
                                       type="text" id="InputUsername"
                                       placeholder="JohnDoe123"/>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="InputPassword"
                                   className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control rounded-pill bg-light border-0 shadow-none"
                                       ref={passRef}
                                       type="password" id="InputPassword"
                                       placeholder="Password"/>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer className={`border-0`}>
                    <div className={'container text-center'}>
                        <button className={'btn btn-primary bg-primary rounded-pill border-0 m-2'}
                                onClick={handleSignup}>
                            Register
                        </button>
                        <button className={'btn btn-primary bg-danger rounded-pill border-0 m-2'}
                                onClick={() => setShow(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default SignUpModal;