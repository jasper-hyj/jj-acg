export default async function animeLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return <>{children}</>;
}
