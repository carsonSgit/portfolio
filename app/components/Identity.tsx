import Image from "next/image";

const Identity = () => (
	<header className="identity">
		<Image
			src="/klungo.webp"
			alt="Carson’s avatar"
			width={64}
			height={64}
			priority
		/>
		<h1 className="identity__name">
			Hi, I&apos;m Carson Spriggs-Audet. I build systems that improve and
			automate workflows.
		</h1>
	</header>
);

export default Identity;
