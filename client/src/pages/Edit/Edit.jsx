import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API"; 
import "./Edit.css"

const Edit = () => {
    return (
        <body>
            <Navbar/>
            <main className="content">
                <div className="container">
                    <section className="row">
                        <div className="col-sm-12">
                            <h1 className="edit-profile">Edit Profile</h1>
                        </div>
                    </section>
                <section className="row">
                <div className="col-sm-12">
                    <form className="profile-form">
                        <div className="form-group">
                            <label for="full_name">Full Name</label>
                            <input
                                type="text"
                                className="form-control profile-input-form"
                                id="full_name"
                                name="full_name"
                                aria-describedby="nameHelp"
                            />
                        </div>
                        <div className="form-group profile-input-form">
                            <label for="birthday">Birthday</label>
                            <input
                                type="date"
                                name="birthday"
                                className="form-control"
                                id="birthday"
                            />
                        </div>
                        <div className="form-group profile-input-form">
                            <label for="phone_number">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone_number"
                                name="phone_number"
                            />
                        </div>
                    </form>
                    <Link type="submit" className="btn btn-primary edit-btn" to="/profile">
              CANCEL
            </Link>
                    <button type="submit" className="btn btn-primary edit-btn">
              SAVE CHANGES
            </button>
                </div>
             </section>
            </div>
        </main>
        </body>
    );
};

export default Edit;