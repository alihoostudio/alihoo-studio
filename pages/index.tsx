import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <div
				className={`p-12 text-2xl grid gap-12 grid-cols-[repeat(auto-fill,minmax(50%,1fr))] auto-cols-[minmax(50%,1fr)] grid-flow-col overflow-x-scroll overflow-y-hidden h-screen`}
			>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
				<div className={`aspect-3/2 bg-cool-4`}>Box</div>
			</div> */}
			<div
				className={`p-12 text-2xl flex space-x-12 overflow-x-scroll overflow-y-hidden flex-row flex-nowrap h-screen`}
			>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>
						3/2 and more sad
					</div>
				</div>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>3/2</div>
				</div>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>new</div>
				</div>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>3/2</div>
				</div>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>3/2</div>
				</div>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>3/2</div>
				</div>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>3/2</div>
				</div>
				<div
					className={`h-full w-full min-w-[calc(33.3333333%-2rem)] bg-cool-2`}
				>
					<div className={`aspect-3/2 bg-cool-4`}>3/2</div>
				</div>
			</div>
		</>
	);
}
