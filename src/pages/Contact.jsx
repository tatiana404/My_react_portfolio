import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Footer from './Footer';

export default function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section>
			<div className="center">
			<br />
			<br />
				<h2 className="page-header" style={{color:"darkBlue", textAlign: "center" }}>Contact Me :)</h2>
			</div>
			<div>
			<br />
			<br />
				<form id="contact-form" style={{textAlign: "center" }}>
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input style={{width:"50%"}}
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email" >Email address:</label>
						<br></br>
						<input style={{width:"50%"}}
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea style={{width:"50%"}}
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button style={{borderRadius: "8px", width: "100px", fontSize: "15px"}} type="submit">Submit</button>
				</form>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Footer />
		</section>
	);
}
