"use client";

import { useActiveTab } from "@/components/Directory";
import SiteNav from "@/components/SiteNav";

const HomeNav = () => {
	const active = useActiveTab();
	return <SiteNav trail={[{ label: active.label }]} />;
};

export default HomeNav;
