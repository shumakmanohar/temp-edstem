"use client";
import React, { useState } from "react";
import InputMulti from "./InputMulti";
import { educationLvl, skillSt } from "@/Data";

const Form = ({ setDbData, dbData }) => {
	const [fieldVal, setFieldVal] = useState({
		name: "",
		educationLvl: "",
		skills: [],
		gender: "",
		phoneNum: "",
		email: "",
	});
	const handleNameChange = (e) => {
		setFieldVal({ ...fieldVal, name: e.target.value });
	};
	const handlePhoneChange = (e) => {
		setFieldVal({ ...fieldVal, phoneNum: e.target.value });
	};
	const handleEmailChange = (e) => {
		setFieldVal({ ...fieldVal, email: e.target.value });
	};
	const handleEducationLvlChange = (e) => {
		setFieldVal({ ...fieldVal, educationLvl: e.target.value });
		console.log(e.target.value);
	};

	const handleSkillStChange = (e) => {
		if (!fieldVal.skills.includes(e.target.value)) {
			setFieldVal({
				...fieldVal,
				skills: [...fieldVal.skills, e.target.value],
			});
		}
		console.log(e.target.value);
		return;
	};

	const submitForm = (e) => {
		e.preventDefault();

		setDbData((prev) => [...prev, fieldVal]);
		setFieldVal({
			name: "",
			educationLvl: "",
			skills: [],
			gender: "",
			phoneNum: "",
			email: "",
		});
	};

	const handleGenderChange = (e) => {
		setFieldVal({ ...fieldVal, gender: e.target.value });
	};
	return (
		<form
			className="md:max-w-md w-full flex flex-col gap-4"
			onSubmit={submitForm}
		>
			<div>
				<label>Name</label>
				<input
					type="text"
					required
					placeholder="Name"
					value={fieldVal.name}
					onChange={handleNameChange}
					className="w-full py-3 text-lg border rounded-lg outline-none"
				/>
			</div>
			{/* Email */}
			<div>
				<label>Email</label>
				<input
					type="email"
					placeholder="Email"
					value={fieldVal.email}
					onChange={handleEmailChange}
					className="w-full py-3 text-lg border rounded-lg outline-none"
				/>
			</div>
			{/* Phone */}
			<div>
				<label>Phone</label>
				<input
					type="phone"
					placeholder="Phone"
					value={fieldVal.phoneNum}
					pattern="[0-9]*"
					required
					onChange={handlePhoneChange}
					className="w-full py-3 text-lg border rounded-lg outline-none"
				/>
			</div>
			{/* gender Multi Select */}
			<div>
				<h3>Please select Your Gender</h3>
				<div>
					<input
						type="radio"
						value={"male"}
						name="genderGrp"
						id="male"
						onChange={handleGenderChange}
					/>
					<label htmlFor="male">Male</label>
				</div>
				<div>
					<input type="radio" value={"female"} name="genderGrp" id="female" />
					<label htmlFor="female">Female</label>
				</div>
			</div>
			{/* Education Level (select box) */}
			<div>
				<label htmlFor="education">Choose Education Level</label>
				<br />
				<select
					name="education"
					id="education"
					onChange={handleEducationLvlChange}
				>
					{educationLvl.map(({ name, value }, _indx) => (
						<option key={_indx} value={value}>
							{name}
						</option>
					))}
				</select>
			</div>
			{/* Skills Multi Select */}
			<div>
				<label htmlFor="education">Choose Your Skill Set</label>
				<br />

				<select name="education" id="education" onChange={handleSkillStChange}>
					{skillSt.map(({ name, value }, _indx) => (
						<option key={_indx} value={value}>
							{name}
						</option>
					))}
				</select>
				<div className="mt-8">
					<span className="font-bold mt-8">My Skills : </span>
					<ul className="flex gap-4">
						{fieldVal.skills.map((val, _indx) => (
							<li className="font-bold" key={_indx}>
								{val}
							</li>
						))}
					</ul>
				</div>
			</div>

			<button className="bg-blue-500 text-white py-4 rounded-lg">Submit</button>
		</form>
	);
};

export default Form;
