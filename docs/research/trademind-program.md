# TradeMind program sources

Primary sources inspected on November 6, 2026. These notes cover program context; repository evidence belongs in the technical case study research.

## Winter 2024: the project’s cohort

AI Launch Lab lists **TradeMind Stock Analysis** among its Winter 2024 cohort projects. The listing describes polynomial regression between dates and closing prices, historical S&P 500 data spanning 2013–2018, a REST API, and a custom React frontend. It frames the product as an analytics platform for both new and experienced investors. Those are the program’s descriptions of the project, not independent validation of predictive performance. The entry publishes no accuracy, trading-return, or deployment metrics. [Winter 2024 project listing](https://launchlab.ai/winter-2024-rd-program/)

The listing’s timeline image places kickoff on February 10, workshops on February 17 and 24 and March 2, 9, and 16, a data challenge on March 22–24, and the student project showcase and cohort end on April 5. The graphic carries AI Launch Lab and Dawson College branding. The dates come from that image, rather than the newer general program page. [Winter 2024 timeline](https://launchlab.ai/wp-content/uploads/2024/02/Timeline-English-2024-3.png)

The cohort page does not identify individual contributors or give TradeMind a rank or award. It does not establish the title “R&D Fellow,” a PhD mentor’s identity, an investment-panel presentation, a paid internship, or that TradeMind was the program’s top project. Carson’s participation and personal contributions should use his own account and repository evidence; an award needs an additional source. [Winter 2024 project listing](https://launchlab.ai/winter-2024-rd-program/)

## Summer 2024: later partnership context

Dawson’s partnership announcement concerns an eight-week online AI Accelerator beginning June 22, 2024. It names AI Launch Lab and Mitacs as partners, describes team projects and specialist support, and requires participants to present their work. Topics include data manipulation, machine learning, deep learning, reinforcement learning, and ethics. Mitacs appears in a possible subsequent paid-internship pathway; availability is explicitly limited. This is evidence of the later partnership, not proof that Carson held a Mitacs internship during Winter 2024. [Dawson partnership announcement](https://www.dawsoncollege.qc.ca/ai/dawsonai-ai-launch-lab/)

## Fall 2024: a separate archived curriculum

Dawson’s AI Accelerator page identifies itself as an archive. Its schedule runs September 28–December 7, 2024: ten weeks, with the final two optional. It describes foundational programming and data work, followed by AI and machine learning. The dated schedule includes Python, scikit-learn, pandas, visualization, ethics, Hugging Face, fine-tuning, RAG and agents, and Streamlit. The page again describes a potential Mitacs internship after the program. These topics can illustrate how the program evolved, but cannot establish what the Winter 2024 cohort studied. [Dawson archived accelerator page](https://www.dawsoncollege.qc.ca/ai/aia-program)

## Winter 2025: the general page now describes a later intake

The current R&D program page’s schedule is labelled Winter 2025. It includes foundational programming/data work, machine learning, ethics, Hugging Face, RAG, agents, demo interfaces, pitching, and Mitacs opportunities. It describes project-specific learning plans and mentorship. Its introductory date range ends April 16, while its schedule lists student presentations on April 26; use neither as a Winter 2024 date. The page links back to the Winter 2024 archive. [AI Launch Lab R&D program](https://launchlab.ai/rd-program/)

## Editorial consequences

- Anchor TradeMind to **Winter 2024 AI Launch Lab R&D**, supported by the cohort listing and timeline.
- Name Dawson’s involvement using the Winter 2024 timeline. Explain the later Dawson/AI Launch Lab/Mitacs partnership only with its dates attached.
- Keep the existing “R&D Fellow” title as Carson’s self-reported role unless a certificate or first-party participant record confirms it.
- Separate the original investment-product ambition from the model’s demonstrated capabilities. The cohort blurb supplies no performance measurements.
- Avoid claiming the project predates all AI fintech products: these sources establish the cohort’s date, not a market-wide first.
- Check code and notebooks before carrying over the existing portfolio’s Keras claim: the cohort writeup names polynomial regression.


## Repository and authorship evidence

Inspected default-branch snapshot `57a1964886d52ea42cf10175b36eddfa611b1a95`. The GitHub commits API filtered by `author=carsonSgit` returned 74 commits in one page (no contribution percentage inferred). Individual diffs establish:

- [9873b88, Modify hamburger menu animation](https://github.com/carsonSgit/TradeMind/commit/9873b8873756900155400237e6f00a0a2067eabf): changed hover selectors to checked-state selectors.
- [27525e8, Add resize handler](https://github.com/carsonSgit/TradeMind/commit/27525e8d0aaccd641abf751aea676f91c3d9de70): added responsive dimensions and Plotly resize handler.
- [3cd875e, Fix overflow issue](https://github.com/carsonSgit/TradeMind/commit/3cd875edf5939ed253392dc6c392be683f34188a): constrained chart container and hid overflow.
- [be958d6, Analytics UI update](https://github.com/carsonSgit/TradeMind/commit/be958d6317c1b2795c3b7905e807df11876cb709): adjusted button and range-input styling.
- [02dceb5, Added Dataset & projected use](https://github.com/carsonSgit/TradeMind/commit/02dceb5354169c2b2a9931e09a9ebe567419e8ec): documented dataset and planned features.
- [13a071c, Improve/Update readme](https://github.com/carsonSgit/TradeMind/commit/13a071c3b247e2f1add7848214d4ce442de1704d): program context, data-cleaning plans, limitations and setup links.

The source shows [quadratic regression](https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/backend/model_trainer.py) with a random 80/20 split and unused test arrays. It returns projections without validation metrics. [server.py](https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/backend/server.py) loads a Keras model at startup but routes prediction through ModelTrainer. [Analytics.js](https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/frontend/trade-mind/src/pages/Analytics.js) offers one-to-five-year horizons. [DataPlot.jsx](https://github.com/carsonSgit/TradeMind/blob/57a1964886d52ea42cf10175b36eddfa611b1a95/web/frontend/trade-mind/src/components/DataPlot.jsx) distinguishes history and predictions by line style.

Do not infer stock-market performance or paid employment. Commit attribution alone does not establish notebook authorship. Retrospective evaluation proposals in the case study are editorial analysis, not reported historical results. User supplied the R&D Fellow title in this session.


## Authorship correction from Carson

Carson explicitly confirmed that he sourced the Kaggle dataset, researched scikit-learn models using program lessons and research, and built the machine-learning model in a Jupyter notebook. This first-person account establishes his model authorship. The earlier inference that his role was limited to interface and documentation was incorrect. Repository commits establish additional contributions, not an exhaustive account of his work.
