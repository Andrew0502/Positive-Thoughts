import React from 'react';
import "./SignInCSS.css"

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
                        <div className="col-sm-12">
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </section>

                </div>

            </main>
    );
};

export default SignIn;