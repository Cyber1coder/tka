/* ==========================================================================
   The Kiran Academy (TKA) - Internships Data & Application Controller
   ========================================================================== */

const INTERNSHIPS_DATA = [
  {
    id: 'intern-1',
    role: 'Full Stack Web Development Intern',
    category: 'Web Development',
    company: 'TKA Industry Incubator & Partner Tech Labs',
    mode: 'Hybrid (Pune / Remote)',
    duration: '6 Months',
    stipend: '₹15,000 / month',
    eligibility: 'B.E / B.Tech / MCA / BCA (2024, 2025, 2026 Passouts)',
    skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'REST APIs'],
    description: 'Work on live commercial client projects under direct guidance of senior full stack architects. Build frontend UIs and backend APIs.',
    deadline: '15th Oct 2026'
  },
  {
    id: 'intern-2',
    role: 'Java Backend Software Developer Intern',
    category: 'Java Development',
    company: 'FinTech Solutions India',
    mode: 'On-site (Karve Nagar, Pune)',
    duration: '6 Months',
    stipend: '₹18,000 / month',
    eligibility: 'Degree in Computer Science / IT or equivalent',
    skills: ['Core Java', 'Spring Boot', 'MySQL', 'Hibernate', 'Git'],
    description: 'Participate in backend microservices design, API integration, and SQL database tuning for high-throughput enterprise systems.',
    deadline: '20th Oct 2026'
  },
  {
    id: 'intern-3',
    role: 'Python & Data Analytics Intern',
    category: 'Data Analytics',
    company: 'Analytics Quotient Labs',
    mode: 'Remote',
    duration: '3 Months',
    stipend: '₹12,000 / month',
    eligibility: 'Open to all engineering & science graduates',
    skills: ['Python', 'Pandas', 'SQL', 'PowerBI / Tableau', 'Excel'],
    description: 'Analyze real business datasets, generate automated reporting dashboards, and build predictive statistical models.',
    deadline: '25th Oct 2026'
  },
  {
    id: 'intern-4',
    role: 'QA Automation & Manual Testing Intern',
    category: 'Software Testing',
    company: 'CloudScale Systems',
    mode: 'Hybrid (Deccan, Pune)',
    duration: '4 Months',
    stipend: '₹14,000 / month',
    eligibility: 'B.E/B.Tech CS/IT/ENTC/BCA',
    skills: ['Manual Testing', 'Selenium WebDriver', 'Java', 'JIRA', 'Postman'],
    description: 'Write comprehensive test suits, perform regression testing, and build automated end-to-end test scripts for web apps.',
    deadline: '18th Oct 2026'
  },
  {
    id: 'intern-5',
    role: 'Mobile App Developer Intern (Flutter / React Native)',
    category: 'Web Development',
    company: 'AppVibe Innovations',
    mode: 'Remote',
    duration: '6 Months',
    stipend: '₹16,000 / month',
    eligibility: 'Computer Science Final Year Students',
    skills: ['JavaScript / Dart', 'React Native or Flutter', 'REST APIs', 'Firebase'],
    description: 'Develop high performance mobile applications for iOS & Android with responsive UI animations and state management.',
    deadline: '30th Oct 2026'
  }
];

let selectedCategory = 'All';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('internshipsContainer')) {
    initInternshipsPage();
  }
});

function initInternshipsPage() {
  renderInternships();

  const tabBtns = document.querySelectorAll('.tab-btn[data-intern-category]');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.getAttribute('data-intern-category');
      renderInternships();
    });
  });
}

function renderInternships() {
  const container = document.getElementById('internshipsContainer');
  if (!container) return;

  const filtered = INTERNSHIPS_DATA.filter(item => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  container.innerHTML = filtered.map(item => `
    <div class="internship-card">
      <div class="intern-head">
        <div>
          <h3 class="intern-role">${item.role}</h3>
          <div class="intern-company"><i class="fa-regular fa-building"></i> ${item.company}</div>
        </div>
        <span class="badge badge-primary">${item.mode}</span>
      </div>

      <div class="intern-tags">
        ${item.skills.map(s => `<span class="badge badge-info">${s}</span>`).join('')}
      </div>

      <div class="intern-details-list">
        <div class="detail-item">
          <span>Stipend</span>
          <strong>${item.stipend}</strong>
        </div>
        <div class="detail-item">
          <span>Duration</span>
          <strong>${item.duration}</strong>
        </div>
        <div class="detail-item">
          <span>Eligibility</span>
          <strong>${item.eligibility}</strong>
        </div>
        <div class="detail-item">
          <span>Apply By</span>
          <strong>${item.deadline}</strong>
        </div>
      </div>

      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.25rem;">${item.description}</p>

      <div style="margin-top: auto; display: flex; gap: 0.75rem;">
        <button onclick="openApplyModal('${item.id}')" class="btn btn-primary btn-block">
          <i class="fa-solid fa-paper-plane"></i> Apply Now
        </button>
      </div>
    </div>
  `).join('');
}

function openApplyModal(internId) {
  const intern = INTERNSHIPS_DATA.find(i => i.id === internId);
  if (!intern) return;

  const user = getCurrentUser() || { fullName: '', email: '', phone: '' };

  const modalHtml = `
    <div class="modal-backdrop active" id="applyModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">Apply for ${intern.role}</h3>
          <button class="modal-close" onclick="closeApplyModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div style="background: var(--primary-light); padding: 0.85rem 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--primary);">
            <i class="fa-solid fa-circle-info"></i> Frontend Demo Application System - Submissions are simulated.
          </div>

          <form id="internshipApplyForm" onsubmit="handleApplySubmit(event, '${intern.id}')">
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" id="appFullName" class="form-control" value="${user.fullName || ''}" required placeholder="e.g. Rahul Patil">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <input type="email" id="appEmail" class="form-control" value="${user.email || ''}" required placeholder="name@domain.com">
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number *</label>
                <input type="tel" id="appPhone" class="form-control" value="${user.phone || ''}" required placeholder="+91 98765 43210">
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Degree / Education *</label>
                <input type="text" id="appEducation" class="form-control" required placeholder="e.g. B.E. Computer Science">
              </div>
              <div class="form-group">
                <label class="form-label">Passout Year *</label>
                <select id="appPassoutYear" class="form-control" required>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Resume URL / Google Drive Link *</label>
              <input type="url" id="appResume" class="form-control" required placeholder="https://drive.google.com/your-resume">
            </div>

            <div class="form-group">
              <label class="form-label">Cover Note / Why are you a good fit?</label>
              <textarea id="appCover" class="form-control" rows="3" placeholder="Briefly describe your interest & key projects..."></textarea>
            </div>

            <div class="modal-footer" style="padding-left:0; padding-right:0; border-top:none;">
              <button type="button" onclick="closeApplyModal()" class="btn btn-secondary">Cancel</button>
              <button type="submit" class="btn btn-primary">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeApplyModal() {
  const modal = document.getElementById('applyModal');
  if (modal) modal.remove();
}

function handleApplySubmit(e, internId) {
  e.preventDefault();
  const intern = INTERNSHIPS_DATA.find(i => i.id === internId);

  const applicationData = {
    id: 'app-' + Date.now(),
    internshipId: internId,
    role: intern.role,
    company: intern.company,
    applicantName: document.getElementById('appFullName').value,
    email: document.getElementById('appEmail').value,
    phone: document.getElementById('appPhone').value,
    education: document.getElementById('appEducation').value,
    passoutYear: document.getElementById('appPassoutYear').value,
    resumeLink: document.getElementById('appResume').value,
    status: 'Under Review',
    appliedDate: new Date().toLocaleDateString()
  };

  let apps = JSON.parse(localStorage.getItem('tka_applications') || '[]');
  apps.push(applicationData);
  localStorage.setItem('tka_applications', JSON.stringify(apps));

  closeApplyModal();

  // Show success modal
  const successModal = `
    <div class="modal-backdrop active" id="successModal">
      <div class="modal-dialog" style="max-width: 450px; text-align: center;">
        <div class="modal-body" style="padding: 2.5rem 1.5rem;">
          <div style="width: 70px; height: 70px; background: var(--success-light); color: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 1.25rem auto;">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Application Submitted!</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
            Your application for <strong>${intern.role}</strong> has been received. You can track your application status in your Student Dashboard.
          </p>
          <button onclick="document.getElementById('successModal').remove()" class="btn btn-primary btn-block">
            Done
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', successModal);
}
