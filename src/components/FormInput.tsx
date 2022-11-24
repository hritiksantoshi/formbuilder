import React from "react";
import "./style.css";

export const FormInput = () => {
  return (
    <>
      <form className="BuilderPage-module--form--ab580">
        <h2 className="typography-module--title--05771">Input Creator</h2>
        <p style={{ fontSize: 14 }}>
          <span className="Popup-module--icon--cc4ed [object Object]">!</span>
          This htmlForm allows you to create and update inputs. The Generate
          htmlForm button will create a new htmlForm with the updates.
        </p>
        <label>Name: </label>
        <input autoComplete="off" aria-label="name" aria-invalid="false" name="name"/>
        <div style={{ maxHeight: 0, transition: "all 0.6s linear 0s" }}></div>
        <label>Type: </label>
        <select  className="Form-module--input--42b56" aria-label="Select type" name="type">
          <option value="text">Text</option>
          <option value="password">Password</option>
          <option value="select">Select</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="number">Number</option>
          <option value="textarea">Textarea</option>
          <option value="email">Email</option>
          <option value="range">Range</option>
          <option value="search">Search</option>
          <option value="tel">Tel</option>
          <option value="url">url</option>
          <option value="time">Time</option>
          <option value="datetime">datetime</option>
          <option value="datetime-local">datetime-local</option>
          <option value="week">week</option>
          <option value="month">month</option>
          <option value="validate" disabled>
            validate
          </option>
        </select>
        <label>
          {" "}
          <input style={{marginBottom: 20}} type="checkbox" name="toggle" />
          Show validation
        </label>
        <div
          style={{
            maxHeight: 0,
            overflow: "hidden",
            transition: "all 0.3s linear 0s",
          }}
        >
          <fieldset>
            <label style={{ marginTop: 0 }}>
              <input type="checkbox" name="required" />
              Required
            </label>
            <label htmlFor="max">Max</label>
            <input
            className="Form-module--input--42b56"
            style={{marginBottom: 20}}
              aria-label="max"
              autoComplete="false"
              name="max"
              type="number"
              value=""
            />
            <label htmlFor="min">Min</label>
            <input
              autoComplete="false"
              aria-label="min"
              name="min"
              type="number"
              value=""
            />
            <label htmlFor="maxLength">MaxLength</label>
            <input
              autoComplete="false"
              aria-label="max length"
              name="maxLength"
              type="number"
              value=""
            />
            <label htmlFor="pattern">Pattern</label>
            <input
              autoComplete="false"
              aria-label="pattern"
              name="pattern"
              type="text"
              value=""
              style={{ marginBottom: 20 }}
            />
          </fieldset>
        </div>
        <button className="button-module--pinkButton--2776e">Create</button>
        <h2
          className="typography-module--title--05771"
          style={{ fontSize: 14, maxWidth: "80%", margin: "0px auto" }}
        >
          or
        </h2>
        <button
          className="button-module--darkButton--82a56"
          type="button"
          style={{
            opacity: 1,
            pointerEvents: "auto",
            transition: "all 0.3s linear 0s",
          }}
        >
          Generate Form
        </button>
      </form>
    </>
  );
};
