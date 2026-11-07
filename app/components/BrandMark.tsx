import Image from "next/image";

interface BrandMarkProps {
	label: string;
	logo?: string;
	href?: string;
	srLabel?: string;
}

const BrandMark = ({ label, logo, href, srLabel }: BrandMarkProps) => {
	const content = (
		<>
			{logo ? (
				<Image
					className="brand-mark__icon"
					src={logo}
					width={14}
					height={14}
					alt=""
				/>
			) : null}
			{label}
			{srLabel ? <span className="sr-only">{srLabel}</span> : null}
		</>
	);

	if (!href) {
		return <span className="brand-mark">{content}</span>;
	}
	return (
		<a
			className="brand-mark brand-mark--link"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{content}
		</a>
	);
};

export default BrandMark;
