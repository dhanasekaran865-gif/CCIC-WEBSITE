# CCIC Club Official Website
### Computational and Cognitive Intelligence Club (CCIC)
**Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning)**  
**Sri Sairam Engineering College, Chennai**

---

## 🚀 Quick Start for Developers

### 1. Run Locally
No heavy dependencies, NodeJS build steps, or frameworks needed! It runs cleanly on any standard static HTTP server or Python:

`ash
# Using Python
python -m http.server 8000

# Or with VS Code Live Server extension
# Right click on index.html -> 'Open with Live Server'
`

Visit: http://localhost:8000

---

## 📂 Project Structure

`	ext
ccic-website/
├── index.html              # Home Page (Campus hero, Institution profile, Leadership grid)
├── about.html              # About CCIC, Department affiliation, Vision, Mission, Emblem
├── scope-members.html      # Scope Members (Faculty Leads: Strategist, Captain, Organizer, etc.)
├── magic-members.html      # Magic Members (3rd Year -> 2nd Year -> Student Coordinators)
├── events.html             # Activities & Events (Agent Automation Bootcamp, Inauguration)
├── achievements.html       # Achievements (Initial milestone timeline & records)
├── contact.html            # Contact Us (Campus details, Advisors, Form, Google Maps)
├── css/
│   ├── bootstrap.min.css   # Reference Bootstrap framework
│   ├── font-awesome.min.css# Vector icon library
│   ├── ref-styles.css      # Replicated reference styles
│   └── ccic-custom.css     # CCIC custom responsive styling & member card architecture
├── js/
│   ├── jquery.min.js       # jQuery 3.7.1
│   ├── bootstrap.min.js    # Bootstrap components
│   └── main.js             # Mobile drawer, modal brochure viewer, cohort filtering
├── fonts/                  # Offline FontAwesome font files
└── images/
    ├── ccic-logo.png       # Official circular CCIC Club emblem
    ├── sairam-logo.png     # Sri Sai Ram Engineering College crest
    ├── sairam-campus.jpg   # Campus hero background
    ├── leadership/         # CEO, Principal, HOD portraits
    ├── members/            # Faculty Scope Member portraits
    │   └── magic/          # Student Magic Member portraits
    └── events/             # Bootcamp flyers & event posters
`

---

## 🖼 How to Add or Replace Photographs

### Scope Members (Faculty)
Drop image files into images/members/:
- geetha.jpg &mdash; Dr. R. Geetha (Strategist)
- lalitha.jpg &mdash; Dr. V. Lalitha (Captain)
- gayathri.jpg &mdash; Ms. S. Gayathri (Organizer)
- 
oselin.jpg &mdash; Mrs. S. Ebenezer Roselin (Propagator)
- nitha.jpg &mdash; Ms. M. Anitha (Executor)

### Magic Members (Students)
Drop image files into images/members/magic/:
- member-3-1.jpg to member-3-4.jpg (3rd Year cohort)
- member-2-1.jpg to member-2-4.jpg (2nd Year cohort)
- haripriyan.jpg, guruprakash.jpg, harathkumar.jpg (Coordinators)

*(Any missing or loading image will automatically fall back to images/members/avatar-placeholder.png)*.

---

## 🤝 Git Collaboration Workflow

### Pushing to GitHub:
`ash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
`
