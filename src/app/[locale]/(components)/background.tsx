"use server";

export default async function Background({imageURL}: {imageURL: string}) {
	return (
		<style>{`
        .bg-image {
            background-image: url(${imageURL});
        };
        `}</style>
	);
}
