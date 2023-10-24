"use client";
import { getProviders, signIn } from "next-auth/react";
export default function getInfo({
	google,
}: {
	google: { id: string; name: string };
}) {
	console.log(google);
	return (
		<div key={google.name}>
			<button onClick={() => signIn(google.id)}>
				Sign in with {google.name}
			</button>
		</div>
	);
}
