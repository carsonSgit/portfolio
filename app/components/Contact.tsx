import ObfuscatedEmail from "./ObfuscatedEmail";

const Contact = () => (
	<footer className="contact">
		<h2>More</h2>
		<p>
			You can see more of my work on{" "}
			<a
				href="https://github.com/carsonSgit"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
			</a>
			. You can also reach me on{" "}
			<a
				href="https://linkedin.com/in/carsonspriggs"
				target="_blank"
				rel="noopener noreferrer"
			>
				LinkedIn
			</a>{" "}
			or over <ObfuscatedEmail>email</ObfuscatedEmail>.
		</p>
	</footer>
);

export default Contact;
