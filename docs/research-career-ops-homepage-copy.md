# career-ops copy audit for portfolio homepage positioning

Repository inspected: `santifer/career-ops`  
Snapshot: [`799fa43cbaa4e00b1081ba753c516c9871c7abfc`](https://github.com/santifer/career-ops/tree/799fa43cbaa4e00b1081ba753c516c9871c7abfc)

## Bottom line

The repository does not contain a complete, author-specific homepage biography. It contains:

1. Direct author positioning in `README.md`.
2. A reusable profile schema and writing framework for turning experience into a coherent narrative.
3. A fictional CV example showing how to combine engineering, teaching, open source, speaking, and self-directed study.
4. No author-specific degree or academic-history copy, and no dedicated extracurricular section.

## Direct author positioning

The clearest source for homepage copy is [`README.md#about-the-author`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/README.md#L464-L470):

- Current identity: “Head of Applied AI.”
- Founder proof: a former founder who “built and sold a business that still runs with my name on it.”
- Builder motivation: career-ops was built to solve the author’s own job-search problem.
- Outcome proof: the system was used to land the author’s current role.
- Ongoing practice: the repo is maintained through a fleet of AI agents, with a linked maintenance article.
- Portfolio signal: the author points to a portfolio and other open-source projects.

The README hero gives the sharper emotional framing in [`README.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/README.md#L13-L17): months of applying “the hard way” led to engineering the system the author wished existed; the contrast is companies using AI to filter candidates versus candidates using AI to choose companies; the final signal is that the system is now open source.

This suggests a homepage voice built around firsthand problem-solving, applied AI, founder/operator experience, and public proof through open source.

## Experience positioning

The reusable profile guidance lives in [`config/profile.example.yml`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/config/profile.example.yml#L43-L60) and [`modes/_profile.template.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/modes/_profile.template.md#L31-L59).

Useful copy principles:

- Start with a one-line professional headline.
- Explain the transition or “exit story” that connects past work to the present direction.
- Name 3–5 “superpowers,” phrased as capabilities rather than a generic skills list.
- Attach proof points to projects, articles, or case studies, each with a hero metric.
- Adapt the emphasis to the role: production systems, orchestration, product discovery, system design, fast delivery, or change management.
- Frame the person as a “technical builder with real-world proof.”

The generic example provides the intended evidence style: a concise summary followed by concrete outcomes such as production scale, precision, latency, savings, conversion uplift, deployment-time reduction, and team scope in [`examples/cv-example.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/examples/cv-example.md#L9-L33).

The repo’s proof-point format is especially useful for homepage experience cards: project name, hero metric, architecture or approach, key decisions, and measurable proof. See [`examples/article-digest-example.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/examples/article-digest-example.md#L7-L40).

## Academics and learning

There is no author-specific academic history in the repository. The generic CV structure treats Education as a compact section containing degree, institution, and year, as shown in [`examples/cv-example.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/examples/cv-example.md#L40-L43) and the education rendering contract in [`templates/sections/education.html`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/templates/sections/education.html#L1-L21).

The fictional dual-track CV expands this into a stronger portfolio pattern: formal degree plus self-directed study and concrete implementations, rather than a long academic biography. See [`examples/dual-track-engineer-instructor/cv.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/examples/dual-track-engineer-instructor/cv.md#L63-L66).

For the portfolio homepage, the repo therefore supports presenting academics as evidence of current capability and curiosity: degree or formal study first, then selected self-directed learning tied to things built.

## Extra-curricular and adjacent signals

There is no dedicated extracurricular section and no author-specific list of clubs, volunteering, sports, or hobbies. The closest supported signals are:

- Open-source projects with adoption metrics, contributors, or stars.
- Speaking and writing with audience size or a clear topic.
- Teaching, curriculum design, mentoring, and community education when substantial enough to be a real track.
- Public maintenance work and reusable tools.

The fictional dual-track example is the strongest structural reference. It places open-source projects under Projects, public talks and blog posts under Speaking and writing, and teaching outcomes inside experience, with measurable evidence throughout: [`examples/dual-track-engineer-instructor/cv.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/examples/dual-track-engineer-instructor/cv.md#L57-L80). Its guidance says hybrid work should be led by the combination itself when both sides are substantial, while hobby-grade activity should remain a differentiator rather than become a second career track: [`examples/dual-track-engineer-instructor/README.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/examples/dual-track-engineer-instructor/README.md#L28-L41).

## Writing style to carry into the homepage

The repo’s voice template recommends short paragraphs, direct active voice, concrete names and numbers, specific examples, varied rhythm, and stopping once the point is made: [`voice-dna.template.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/voice-dna.template.md#L7-L29). Its professional-writing rules prefer specifics over abstractions, for example a measured latency reduction over “improved performance”: [`modes/_writing.md`](https://github.com/santifer/career-ops/blob/799fa43cbaa4e00b1081ba753c516c9871c7abfc/modes/_writing.md#L100-L113).

The practical homepage formula is:

> identity or unusual combination → what was built or practiced → measurable proof → why it matters now

