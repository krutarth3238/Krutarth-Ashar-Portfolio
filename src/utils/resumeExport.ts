import { PERSONAL_INFO, EXPERIENCE_ITEMS, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

export const generateResumeMarkdown = (track: 'ai' | 'ds'): string => {
  const isAI = track === 'ai';
  const objective = isAI ? PERSONAL_INFO.objectiveAI : PERSONAL_INFO.objectiveDS;
  const titleTrack = isAI ? 'AI & Machine Learning (Research & Alignment)' : 'Data Science & Analytics (ETL & Systems)';

  return `
# ${PERSONAL_INFO.name}
${PERSONAL_INFO.location} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

## OBJECTIVE (${titleTrack})
${objective}

## EDUCATION
- **${PERSONAL_INFO.education.institution}**
  ${PERSONAL_INFO.education.degree}
  ${isAI ? `CGPA: ${PERSONAL_INFO.education.cgpa} | ` : ''}${PERSONAL_INFO.education.classYear}
  ${isAI ? `- ${PERSONAL_INFO.education.cbse12}\n  - ${PERSONAL_INFO.education.cbse10}` : ''}

## TECHNICAL SKILLS
${isAI ? `
- **Programming Languages**: Python, C++, Java, JavaScript, SQL
- **ML & Deep Learning**: TensorFlow, PyTorch, scikit-learn, NLP, Transformer Architectures, RLHF/RLAIF, LoRA Model Fine-tuning & Evaluation, RAG (Retrieval-Augmented Generation)
- **Computer Vision**: OpenCV, YOLOv5, Roboflow, Object Detection
- **GenAI & APIs**: Gemini API, Groq API, LLM Agent Orchestration, Permission-Gated Task Execution, Google Cloud APIs, RESTful API Design
- **Backend & Web Development**: FastAPI, Flask, Asynchronous Python, Node.js, Express, React 19, TypeScript, Tailwind CSS v4
- **Databases & Security**: PostgreSQL, asyncpg, SQLAlchemy 2.0, SQLite, Relational Schema Design, Append-Only Audit Logging, OAuth 2.0, JWT Auth, Firebase Admin SDK, HMAC-SHA256 Token Signing
- **Data & Tools**: Pandas, SQL, Git, VSCode, Pytest, Asynchronous Testing
` : `
- **Programming**: Python, SQL, C++, Java, JavaScript
- **Data Analytics & Visualization**: MS Excel, Power BI, Tableau, Pandas, Exploratory Data Analysis (EDA), Data Cleaning & Wrangling, Dashboarding, Geospatial Analysis (QGIS)
- **Databases & ETL**: SQL, PostgreSQL, SQLite, SQLAlchemy 2.0, asyncpg, Relational Database Design, ER Modeling, Query Optimization, ETL Pipelines, Data Warehousing, OLAP/OLTP, Star/Snowflake Schema
- **Machine Learning**: scikit-learn, Regression, Classification, Clustering, Feature Engineering, Dimensionality Reduction (PCA)
- **Machine Learning Methods**: SVM, Decision Trees, k-NN, Naive Bayes, k-Means, DBSCAN
- **Deep Learning & AI**: TensorFlow, PyTorch, NLP, Transformer Architectures, LLM API Integration (Groq, Gemini), AI Agent Workflows, Permission-Gated Task Execution
- **Development & Cloud**: AWS, FastAPI, Flask, Node.js, Express, React.js, TypeScript, Tailwind CSS, REST APIs, Asynchronous Python, Git, VSCode
- **Security & Testing**: Google OAuth 2.0, Firebase Admin SDK, JWT Authentication, HMAC-SHA256 Token Validation, Permission Scopes, Audit Logging, Async Pytest, Jest, Supertest
`}

## PROFESSIONAL EXPERIENCE
${EXPERIENCE_ITEMS.map(e => `
### ${e.role} — ${e.company} (${e.period})
${e.bullets.map(b => `- ${b}`).join('\n')}
`).join('\n')}

## KEY PROJECTS
${PROJECTS.map(p => `
### ${p.title} (${p.tags.join(', ')})
${p.description}
`).join('\n')}

## ACCREDITED CERTIFICATIONS
${CERTIFICATIONS.map(c => `- ${c.title} (${c.issuer})`).join('\n')}

## ADDITIONAL QUALIFICATIONS
- Finalist in 3 Case Study Competitions: CaseQuest 2026 (KJSSE E-Summit), MergeMania 2026 (SPIT E-Summit), and FCRIT Green Club Ideathon 2026.
- Experienced in presenting technical results to peers and senior stakeholders in multicultural teams.
`.trim();
};

export const generateResumeHTML = (track: 'ai' | 'ds'): string => {
  const isAI = track === 'ai';
  const objective = isAI ? PERSONAL_INFO.objectiveAI : PERSONAL_INFO.objectiveDS;
  const trackTitle = isAI ? 'AI & Machine Learning Research Candidate' : 'Data Science & Analytics Engineering Candidate';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${PERSONAL_INFO.name} - Resume (${track.toUpperCase()})</title>
  <style>
    @page {
      size: letter;
      margin: 0.5in;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      line-height: 1.45;
      padding: 24px;
      max-width: 800px;
      margin: 0 auto;
      font-size: 10.5pt;
    }
    header {
      border-bottom: 2px solid #0071e3;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 22pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .track-title {
      font-size: 12pt;
      font-weight: 700;
      color: #0071e3;
      margin-top: 2px;
    }
    .contact-info {
      font-size: 9.5pt;
      color: #475569;
      margin-top: 6px;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .contact-info a {
      color: #0071e3;
      text-decoration: none;
    }
    section {
      margin-bottom: 14px;
    }
    h2 {
      font-size: 11pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
      margin-bottom: 6px;
    }
    .entry {
      margin-bottom: 8px;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      font-size: 10pt;
    }
    .institution {
      color: #0f172a;
    }
    .period {
      color: #64748b;
      font-size: 9pt;
      font-weight: 600;
    }
    .subhead {
      color: #0071e3;
      font-weight: 600;
      font-size: 9.5pt;
      margin-bottom: 3px;
    }
    p, li {
      color: #334155;
      font-size: 9.5pt;
      line-height: 1.4;
    }
    ul {
      list-style-type: disc;
      padding-left: 18px;
      margin-top: 3px;
    }
    li {
      margin-bottom: 2px;
    }
    .skill-category {
      margin-bottom: 4px;
    }
    .skill-category strong {
      color: #0f172a;
    }
    @media print {
      body {
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>${PERSONAL_INFO.name}</h1>
    <div class="track-title">${trackTitle}</div>
    <div class="contact-info">
      <span>${PERSONAL_INFO.location}</span>
      <span>•</span>
      <span>${PERSONAL_INFO.email}</span>
      <span>•</span>
      <span>${PERSONAL_INFO.phone}</span>
      <span>•</span>
      <a href="${PERSONAL_INFO.linkedin}">LinkedIn</a>
      <span>•</span>
      <a href="${PERSONAL_INFO.github}">GitHub</a>
    </div>
  </header>

  <section>
    <h2>Objective</h2>
    <p>${objective}</p>
  </section>

  <section>
    <h2>Education</h2>
    <div class="entry">
      <div class="entry-header">
        <span class="institution">${PERSONAL_INFO.education.institution}</span>
        <span class="period">${PERSONAL_INFO.education.classYear}</span>
      </div>
      <div class="subhead">${PERSONAL_INFO.education.degree} — CGPA: ${PERSONAL_INFO.education.cgpa}</div>
      <p style="font-size: 8.5pt; color: #64748b;">${PERSONAL_INFO.education.cbse12} • ${PERSONAL_INFO.education.cbse10}</p>
    </div>
  </section>

  <section>
    <h2>Technical Skills</h2>
    ${isAI ? `
      <div class="skill-category"><strong>Programming:</strong> Python, C++, Java, JavaScript, SQL</div>
      <div class="skill-category"><strong>ML &amp; Deep Learning:</strong> TensorFlow, PyTorch, scikit-learn, NLP, Transformer Architectures, RLHF/RLAIF, LoRA Model Fine-tuning &amp; Evaluation, RAG (Retrieval-Augmented Generation)</div>
      <div class="skill-category"><strong>Computer Vision:</strong> OpenCV, YOLOv5, Roboflow, Object Detection</div>
      <div class="skill-category"><strong>GenAI &amp; APIs:</strong> Gemini API, Groq API, LLM Agent Orchestration, Permission-Gated Task Execution, Google Cloud APIs, RESTful API Design</div>
      <div class="skill-category"><strong>Backend &amp; Web Development:</strong> FastAPI, Flask, Asynchronous Python, Node.js, Express, React 19, TypeScript, Tailwind CSS v4</div>
      <div class="skill-category"><strong>Databases &amp; Security:</strong> PostgreSQL, asyncpg, SQLAlchemy 2.0, SQLite, Relational Schema Design, Append-Only Audit Logging, OAuth 2.0, JWT Auth, Firebase Admin SDK, HMAC-SHA256 Token Signing</div>
      <div class="skill-category"><strong>Data &amp; Tools:</strong> Pandas, SQL, Git, VSCode, Pytest, Asynchronous Testing</div>
    ` : `
      <div class="skill-category"><strong>Programming:</strong> Python, SQL, C++, Java, JavaScript</div>
      <div class="skill-category"><strong>Data Analytics &amp; Visualization:</strong> MS Excel, Power BI, Tableau, Pandas, Exploratory Data Analysis (EDA), Data Cleaning &amp; Wrangling, Dashboarding, Geospatial Analysis (QGIS)</div>
      <div class="skill-category"><strong>Databases &amp; ETL:</strong> SQL, PostgreSQL, SQLite, SQLAlchemy 2.0, asyncpg, Relational Database Design, ER Modeling, Query Optimization, ETL Pipelines, Data Warehousing, OLAP/OLTP, Star/Snowflake Schema</div>
      <div class="skill-category"><strong>Machine Learning:</strong> scikit-learn, Regression, Classification, Clustering, Feature Engineering, Dimensionality Reduction (PCA), SVM, Decision Trees, k-Means</div>
      <div class="skill-category"><strong>Deep Learning &amp; AI:</strong> TensorFlow, PyTorch, NLP, Transformer Architectures, LLM API Integration (Groq, Gemini), AI Agent Workflows</div>
      <div class="skill-category"><strong>Development &amp; Cloud:</strong> AWS, FastAPI, Flask, Node.js, Express, React.js, TypeScript, Tailwind CSS, REST APIs, Asynchronous Python, Git</div>
      <div class="skill-category"><strong>Security &amp; Testing:</strong> Google OAuth 2.0, Firebase Admin SDK, JWT Authentication, HMAC-SHA256 Token Validation, Permission Scopes, Audit Logging, Async Pytest, Jest, Supertest</div>
    `}
  </section>

  <section>
    <h2>Professional Experience</h2>
    ${EXPERIENCE_ITEMS.map(e => `
      <div class="entry">
        <div class="entry-header">
          <span class="institution">${e.role} — <strong>${e.company}</strong></span>
          <span class="period">${e.period}</span>
        </div>
        <ul>
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </section>

  <section>
    <h2>Key Engineering Projects</h2>
    ${PROJECTS.map(p => `
      <div class="entry">
        <div class="entry-header">
          <span class="institution">${p.title}</span>
          <span class="period">${p.badge}</span>
        </div>
        <p>${p.description}</p>
      </div>
    `).join('')}
  </section>

  <section>
    <h2>Accredited Certifications</h2>
    <ul>
      ${CERTIFICATIONS.map(c => `<li><strong>${c.title}</strong> — ${c.issuer}</li>`).join('')}
    </ul>
  </section>

  <section>
    <h2>Additional Qualifications</h2>
    <ul>
      <li>Finalist in 3 Case Study Competitions: CaseQuest 2026 (KJSSE E-Summit), MergeMania 2026 (SPIT E-Summit), and FCRIT Green Club Ideathon 2026.</li>
      <li>Experienced in presenting technical results to peers and senior stakeholders in multicultural teams.</li>
    </ul>
  </section>
</body>
</html>`;
};

// Direct File Download Helpers
export const downloadResumeFile = (track: 'ai' | 'ds', format: 'html' | 'md') => {
  const isAI = track === 'ai';
  const filename = `Krutarth_Ashar_Resume_${isAI ? 'AI_ML' : 'Data_Science'}.${format}`;
  const content = format === 'html' ? generateResumeHTML(track) : generateResumeMarkdown(track);
  const mimeType = format === 'html' ? 'text/html;charset=utf-8' : 'text/markdown;charset=utf-8';

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

// Robust Print / PDF trigger (works reliably even inside sandboxed iframes)
export const printResumeDocument = (track: 'ai' | 'ds') => {
  try {
    const htmlContent = generateResumeHTML(track);
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(htmlContent);
      doc.close();

      setTimeout(() => {
        try {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
        } catch (e) {
          // If browser iframe permissions block print, trigger direct download
          console.warn('Iframe print blocked, falling back to direct download', e);
          downloadResumeFile(track, 'html');
        } finally {
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
          }, 3000);
        }
      }, 500);
    } else {
      downloadResumeFile(track, 'html');
    }
  } catch (err) {
    console.error('Print failed, downloading document instead:', err);
    downloadResumeFile(track, 'html');
  }
};
