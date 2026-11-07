import ObfuscatedEmail from "./ObfuscatedEmail";

const SiteFooter = () => (
	<footer className="site-footer">
		<p>© {new Date().getFullYear()} Carson Spriggs-Audet</p>
		<nav aria-label="Social links">
			<a
				href="https://github.com/carsonSgit"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
			</a>
			<a
				href="https://linkedin.com/in/carsonspriggs"
				target="_blank"
				rel="noopener noreferrer"
			>
				LinkedIn
			</a>
			<ObfuscatedEmail>Email</ObfuscatedEmail>
		</nav>
	</footer>
);

export default SiteFooter;
