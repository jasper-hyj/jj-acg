"use server";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import SigninForm from "./SigninForm";

interface Provider {}

export default async function SignIn() {
	const session = await getServerSession();
	const providers = await getProviders();
	console.log(providers);
	return (
		<>
			<SigninForm google={providers!.google} />
		</>
	);
}
