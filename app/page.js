"use client";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [dbData, setDbData] = useState([]);
	return (
		<div className=" container mx-auto">
			<Header />
			<Form setDbData={setDbData} dbData={dbData} />
			<div>
				<h1 className="text-3xl mt-16">RESULT : Latest </h1>
				<p>
					Not Recommended to Use Reverse , used it For Quick Workaround Only,
				</p>
				{dbData
					.reverse()
					.map(
						({ name, educationLvl, skills, gender, phoneNum, email }, _ind) => (
							<div key={_ind} className="max-w-sm shadow-md m-2">
								<h1>Name :{name}</h1>
								<h1>Education: {educationLvl}</h1>
								<h1>Skills : {JSON.stringify(skills)}</h1>
								<h1>Gender : {gender}</h1>
								<h1>PhoneNum : {phoneNum}</h1>
								<h1>Email :{email}</h1>
							</div>
						)
					)}
			</div>
		</div>
	);
}
