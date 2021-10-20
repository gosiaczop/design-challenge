import React from "react";
import "./styles.css";

export default function JobForm() {
  return (
    <div class="form-container">
      <form class="register-form">
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />{" "}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <br />
        <input
          id="phone-number"
          class="form-field"
          type="text"
          placeholder="Phone Number"
          name="Phone Number"
        />{" "}
        <input
          id="e-mail"
          class="form-field"
          type="text"
          placeholder="E-mail"
          name="e-mail"
        />
        <br />
        <input
          id="linkedin"
          class="long"
          type="text"
          placeholder="Linkedin URL"
          name="Linkedin URL"
        />
        <br />
        <input
          id="Potfolio"
          class="long"
          type="text"
          placeholder="Potfolio"
          name="Potfolio"
        />
        <br />
        <input
          id="Available"
          class="form-field"
          type="text"
          placeholder="Available"
          name="Availablee"
        />{" "}
        <input
          id="Salary"
          class="form-field"
          type="text"
          placeholder="Monthly Gross Salary"
          name="Monthly Gross Salary"
        />{" "}
        <br />
        <input
          id="resume"
          class="form-fieldfile"
          type="file"
          placeholder="Resume"
          name="resume"
        />{" "}
        <input
          id="other"
          class="form-fieldfile"
          type="file"
          placeholder="Other Files"
          name="other"
        />
        <br />
        <button class="submit" type="submit">
          SUBMIT
        </button>
        <button class="cancel" type="cancel">
          CANCEL
        </button>
      </form>
    </div>
  );
}
