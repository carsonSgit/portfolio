const STACK_LOGOS: Record<string, string> = {
	"Azure IoT Hub": "/logos/stack/microsoft.png",
	"C#": "/logos/stack/dotnet.svg",
	Elasticsearch: "/logos/stack/elasticsearch.svg",
	Gemini: "/logos/stack/googlegemini.svg",
	Mux: "/logos/stack/mux.png",
	Roboflow: "/logos/stack/roboflow.svg",
	Supabase: "/logos/stack/supabase.svg",
	".NET MAUI": "/logos/stack/dotnet.svg",
	FastAPI: "/logos/stack/fastapi.svg",
	Firebase: "/logos/stack/firebase.svg",
	Jupyter: "/logos/stack/jupyter.svg",
	LLMz: "/logos/botpress.png",
	MQTT: "/logos/stack/mqtt.svg",
	Mantine: "/logos/stack/mantine.svg",
	"Next.js": "/logos/stack/nextdotjs.svg",
	Plotly: "/logos/stack/plotly.svg",
	PostgreSQL: "/logos/stack/postgresql.svg",
	Prisma: "/logos/stack/prisma.svg",
	Python: "/logos/stack/python.svg",
	QStash: "/logos/stack/upstash.svg",
	"Raspberry Pi": "/logos/stack/raspberrypi.svg",
	React: "/logos/stack/react.svg",
	Tilt: "/logos/stack/tilt.png",
	TypeScript: "/logos/stack/typescript.svg",
	Zod: "/logos/stack/zod.svg",
	pandas: "/logos/stack/pandas.svg",
	"scikit-learn": "/logos/stack/scikitlearn.svg",
};

const HOST_LOGOS: Record<string, string> = {
	"botpress.com": "/logos/botpress.png",
	"colab.research.google.com": "/logos/stack/googlecolab.svg",
	"conway.ai": "/logos/stack/conway.png",
	"dawsoncollege.qc.ca": "/logos/stack/dawson.png",
	"devpost.com": "/logos/stack/devpost.svg",
	"docs.google.com": "/logos/stack/googledocs.svg",
	"forge.ai": "/logos/stack/forge.png",
	"github.com": "/logos/stack/github.svg",
	"github.io": "/logos/stack/github.svg",
	"johnabbott.qc.ca": "/logos/john-abbott.png",
	"kaggle.com": "/logos/stack/kaggle.png",
	"launchlab.ai": "/logos/stack/launchlab.png",
};

export function stackLogo(name: string): string | undefined {
	return STACK_LOGOS[name];
}

export function linkLogo(href: string): string | undefined {
	const host = new URL(href).hostname;
	const match = Object.keys(HOST_LOGOS).find(
		(domain) => host === domain || host.endsWith(`.${domain}`),
	);
	return match ? HOST_LOGOS[match] : undefined;
}
