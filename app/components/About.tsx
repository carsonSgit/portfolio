import Image from "next/image";

const About = () => (
	<section className="about" aria-label="About Carson">
		<p>
			I have a passion for automation, distributed infra, and zero copy
			architecture. Day to day I work on AI solutions towards Sovereign Zero
			Copy Data Security at{" "}
			<a
				className="inline-brand"
				href="https://qohash.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src="/logos/qohash.png" width={16} height={16} alt="" />
				Qohash
			</a>
			, and I&apos;m studying Engineering Technology &amp; Applied Sciences at{" "}
			<a
				className="inline-brand"
				href="https://www.mun.ca/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src="/logos/memorial.png" width={16} height={16} alt="" />
				Memorial University
			</a>
			.
		</p>
		<p>
			Based in <strong>Canada 🇨🇦</strong>, focused on pragmatic software, clean
			interfaces, and resilient data governance. In my downtime, I hang out with
			my cats 🐱, work out 🏋️‍♂️, and build open-source dev tools 🛠️.
		</p>
	</section>
);

export default About;
