import React from 'react';
import "../assets/style.css"
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
            <main className="content">
                <div className="container">
                    <section className="row">
                        <div className="col-sm-12">
                            <h1>WELCOME TO POSITIVE THOUGHTS</h1>
                        </div>
                    </section>
                    <section className="row">
                        <form className="col-sm-12 signin-form">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        <Link type="submit" className="btn btn-primary" to="/sign-up">Sign Up</Link>
                    </section>
                </div>
            </main>
    );
};

export default SignIn;