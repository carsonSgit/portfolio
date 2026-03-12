import { Avatar } from "@base-ui/react/avatar";
import BracketLink from "./BracketLink";

type IntroLink = {
	label: string;
	href: string;
	srContext?: string;
	target?: "_blank";
	rel?: "noopener noreferrer";
};

const LINKS: IntroLink[] = [
	{
		label: "case studies",
		href: "/case-studies",
	},
	{
		label: "github",
		href: "https://github.com/carsonSgit",
		srContext: "GitHub profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		label: "linkedin",
		href: "https://linkedin.com/in/carsonspriggs",
		srContext: "LinkedIn profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		label: "email",
		href: "mailto:carsonspriggs6@gmail.com",
		srContext: "Email Carson",
		target: "_blank",
		rel: "noopener noreferrer",
	},
];

const Intro = () => {
	return (
		<section className="intro" aria-labelledby="intro-heading">
			<div className="intro__header">
				<Avatar.Root className="intro__avatar">
					<Avatar.Image
						src="/klungo.webp"
						alt="Carson Spriggs"
						width={56}
						height={56}
					/>
					<Avatar.Fallback>CS</Avatar.Fallback>
				</Avatar.Root>

				<div className="intro__title-group">
					<h1 id="intro-heading">Carson Spriggs</h1>
					<p className="intro__subtitle">Software Engineer at Fundica</p>
				</div>
			</div>
			<p className="intro__about">
				I am a Canada-based software engineer building product-focused web
				experiences and developer tools. I currently ship customer-facing
				software at Fundica while studying Engineering Technology and Applied
				Sciences at Memorial University.
			</p>
			<p className="intro__about intro__about--secondary">
				This site is a concise archive of hackathon builds, technical
				experiments, and a few deeper write-ups where the implementation details
				are worth explaining clearly.
			</p>
			<nav className="intro__links" aria-label="Primary links">
				{LINKS.map((link) => (
					<BracketLink
						key={link.label}
						href={link.href}
						target={link.target}
						rel={link.rel}
						srContext={link.srContext}
					>
						{link.label}
					</BracketLink>
				))}
			</nav>
		</section>
	);
};

export default Intro;
