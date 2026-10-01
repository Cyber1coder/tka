# The Kiran Academy (TKA) — Modern Coaching Institute Website

A complete, modern, sleek, and responsive EdTech website for **The Kiran Academy (TKA)** built using pure **HTML5, CSS3, and Vanilla JavaScript (ES6+)**.

Inspired by premium EdTech platforms like Coursera, Udemy, Scaler, and TakeUForward, this project features interactive course catalogs, an internship application portal, a 4-phase placement preparation roadmap, an automated Mock Test engine with countdown timer and solution reviews, a persistent student dashboard, dark mode toggle, and responsive layouts across all devices.

---

## 🌟 Key Features

### 1. 🏠 Homepage (`index.html`)
- **Top Announcement Bar:** Admissions open timer & fast-track batch notifications.
- **Hero Section:** Bold value proposition, call-to-action buttons ("Explore Courses", "Take a Mock Test"), live classroom badge, and stats cards.
- **Interactive Counters:** Animated scroll-revealed figures for 50,000+ Students Trained, 94% Placement Rate, 350+ Recruiters, and ₹8.5 LPA Average Package.
- **Popular Courses:** Interactive course cards with badges, ratings, durations, prices, and detail modals.
- **Why Choose TKA Grid:** Highlighting live classes, 1-on-1 mentorship, live projects, and placement assistance.
- **Internship Incubator Preview:** Highlighting stipends up to ₹25,000/mo and hybrid/remote work modes.
- **Placements & Recruiter Logos:** Recruiter marquee and alumni success testimonials.
- **FAQ Accordion:** Expandable frequently asked questions.
- **Newsletter Subscription:** Frontend validated email subscription form with toast feedback.

### 2. 📚 Courses Catalog (`courses.html` & `js/courses.js`)
- **Live Search & Filter:** Instant real-time search by course title or keyword.
- **Category Tabs:** Filter by Java, Python, DSA, Full Stack, Testing, GATE CS, Aptitude, C/C++, and Interview Prep.
- **Sorting Options:** Sort by popularity, rating, price low-to-high, and price high-to-low.
- **Course Detail Modal:** Complete syllabus breakdown, prerequisites, instructor bio, batch mode, and instant "Enroll Now" trigger.
- **LocalStorage Persistence:** Enrolled courses are automatically saved to the student's profile.

### 3. 💼 Internship Portal (`internships.html` & `js/internships.js`)
- **Categorized Listings:** Web Development, Java Backend, Python Data Analytics, and Software QA Testing.
- **Listing Cards:** Details including role, company, mode, duration, stipend, eligibility, deadline, and skills tags.
- **Interactive Application Modal:** Multi-field form (Name, Email, Phone, Education, Passout Year, Resume Link, Cover Note).
- **Form Validation & Success Modal:** Validates user inputs and persists application history in `localStorage`.

### 4. 🏆 Placements & Career Support (`placements.html`)
- **4-Phase Career Preparation Roadmap:** Skill Building -> Live Projects -> Aptitude & Resume -> Mock Interviews & Referrals.
- **Placement Prep Checklist:** Interactive modal to review and download the TKA placement guide.
- **Recruiter Network Grid:** Featuring top IT companies (TCS, Infosys, Wipro, Capgemini, Accenture, etc.).
- **Alumni Success Stories:** Detailed placement stories with package highlights.

### 5. 💻 Online Mock Test Engine (`mock-tests.html` & `js/mock-tests.js`)
- **Subject-Wise Tests:** Core Java, Python Essentials, Data Structures & Algorithms (DSA), and General Aptitude.
- **Interactive Exam UI:**
  - Real-time **Countdown Timer** with auto-submit on expiry.
  - Question navigation (**Next**, **Previous**, **Clear Selection**, **Mark for Review**).
  - Dynamic **Question Palette** grid indicating current, answered, unanswered, and review status.
- **Automated Instant Evaluation:** Score calculation, percentage, pass/fail status, and time spent.
- **Detailed Solution Review:** Explanations provided for every question with correct vs user answer highlights.
- **History Tracking:** Automatically saves test attempts to `localStorage`.

### 6. 🎓 Student Dashboard (`dashboard.html` & `js/dashboard.js`)
- **Profile Card:** Student avatar, name, email, target role, and **Edit Profile** modal with live state update.
- **Overview Metrics Widgets:** Enrolled courses count, tests taken count, average score percentage, and applications submitted count.
- **Enrolled Courses Tracker:** Animated progress bars and quick learning links.
- **Mock Test History Table:** Table displaying score badges, percentages, dates, and status.
- **Internship Applications Tracker:** Real-time application status badges (`Under Review`, `Shortlisted`, `Pending`).

### 7. 🔑 Authentication & Demo Session (`login.html`, `register.html`, & `js/auth.js`)
- **Login & Register Forms:** Input validation, password length check, password match check.
- **Password Visibility Toggle:** Show/hide password button.
- **Quick Demo Login:** One-click auto-fill button for testing credentials.
- **Simulated Auth Flow:** Stores user session in `localStorage.tka_user` and handles smooth redirects & logout.

### 8. ℹ️ About Us & Contact Us (`about.html`, `contact.html`)
- **About TKA:** Mission, vision, ISO 9001:2015 certification, and faculty/mentor spotlight cards.
- **Contact Us:** Interactive inquiry form, institute branch locations in Pune (Karve Nagar, Deccan, Chinchwad), phone/email support details, operating hours, and Google Maps iframe view.

---

## 🛠️ Technology Stack

- **Markup:** Semantic HTML5
- **Styling:** Vanilla CSS3 (CSS Custom Properties, Flexbox, Grid, Glassmorphism, Responsive Media Queries)
- **Scripting:** Vanilla JavaScript (ES6+ Modules, DOM Manipulation, LocalStorage API, Event Listeners)
- **Typography & Icons:** Google Fonts (Plus Jakarta Sans, Outfit) & Font Awesome 6.4 (CDN)

---

## 📂 Project Directory Structure

```
tka website/
├── index.html              # Homepage
├── courses.html            # Course catalog & search
├── internships.html        # Internship incubator portal
├── placements.html         # Placements roadmap & recruiter partners
├── mock-tests.html         # Interactive mock test engine & score analysis
├── dashboard.html          # Student profile & progress dashboard
├── login.html              # Login page with demo auto-fill
├── register.html           # Registration page with validation
├── about.html              # About TKA, mission & faculty
├── contact.html            # Contact form, Pune branches & maps
├── css/
│   ├── style.css           # Core design system & theme variables
│   ├── responsive.css      # Responsive media queries (mobile/tablet/desktop)
│   └── dashboard.css       # Dashboard, mock test engine & auth styles
├── js/
│   ├── main.js            # Theme manager, mobile menu, toast system, session sync
│   ├── courses.js         # Course data, live search, filter, sort & enrollment
│   ├── internships.js     # Internship data, detail modal & application validation
│   ├── mock-tests.js      # Quiz engine, countdown timer, question palette & scoring
│   ├── dashboard.js      # Student profile editor, stats & activity tables
│   └── auth.js           # Demo login/register validation & password toggle
└── README.md              # Project documentation
```

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Cyber1coder/tka.git
   cd tka
   ```

2. **Open in Browser:**
   - Double-click `index.html` or open it with any web browser.
   - Alternatively, serve using VS Code Live Server or python http server:
     ```bash
     npx serve .
     # or
     python -m http.server 8000
     ```

---

## 🌐 GitHub Pages Deployment Instructions

1. Push all code to the default `main` branch of `https://github.com/Cyber1coder/tka.git`.
2. Go to your repository settings on GitHub: `https://github.com/Cyber1coder/tka/settings/pages`.
3. Under **Source**, select **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder, then click **Save**.
5. GitHub Pages will build and deploy the site live at `https://Cyber1coder.github.io/tka/`.

---

## ⚠️ Demo Limitations & Disclaimer

- **Frontend Demo Only:** Authentication, course enrollment, internship applications, and test history are stored locally in the browser's `localStorage`.
- **Sample Data Notice:** Placement figures, student names, partner logos, and statistics are fictional sample demo data for presentation purposes.
