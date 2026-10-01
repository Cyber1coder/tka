/* ==========================================================================
   The Kiran Academy (TKA) - Student Dashboard Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('dashboardRoot')) {
    initDashboard();
  }
});

function initDashboard() {
  let user = getCurrentUser();

  // If no user exists, set up a default demo user for frictionless preview
  if (!user) {
    user = {
      id: 'demo-student-001',
      fullName: 'Saurabh Kulkarni',
      email: 'saurabh.kulkarni@demo.tka.com',
      phone: '+91 98234 56789',
      enrolledBatch: 'Full Stack Java 2026',
      targetRole: 'Java Backend Engineer',
      joinedDate: '15/08/2026'
    };
    localStorage.setItem('tka_user', JSON.stringify(user));
  }

  renderUserProfile(user);
  renderDashboardStats();
  renderEnrolledCourses();
  renderTestHistory();
  renderApplicationHistory();
}

function renderUserProfile(user) {
  const nameElems = document.querySelectorAll('.user-display-name');
  const emailElems = document.querySelectorAll('.user-display-email');
  const batchElems = document.querySelectorAll('.user-display-batch');

  nameElems.forEach(el => el.innerText = user.fullName);
  emailElems.forEach(el => el.innerText = user.email);
  batchElems.forEach(el => el.innerText = user.enrolledBatch || 'Standard Batch');
}

function renderDashboardStats() {
  const enrolled = JSON.parse(localStorage.getItem('tka_enrolled_courses') || '[]');
  const tests = JSON.parse(localStorage.getItem('tka_test_history') || '[]');
  const apps = JSON.parse(localStorage.getItem('tka_applications') || '[]');

  let avgScore = 0;
  if (tests.length > 0) {
    const totalPct = tests.reduce((acc, curr) => acc + (curr.percentage || 0), 0);
    avgScore = Math.round(totalPct / tests.length);
  }

  const statEnrolled = document.getElementById('statEnrolledCount');
  const statTests = document.getElementById('statTestsCount');
  const statAvg = document.getElementById('statAvgScore');
  const statApps = document.getElementById('statAppsCount');

  if (statEnrolled) statEnrolled.innerText = enrolled.length > 0 ? enrolled.length : 2; // sample fallback
  if (statTests) statTests.innerText = tests.length > 0 ? tests.length : 3;
  if (statAvg) statAvg.innerText = tests.length > 0 ? `${avgScore}%` : '85%';
  if (statApps) statApps.innerText = apps.length > 0 ? apps.length : 1;
}

function renderEnrolledCourses() {
  const container = document.getElementById('dashEnrolledCoursesList');
  if (!container) return;

  let enrolled = JSON.parse(localStorage.getItem('tka_enrolled_courses') || '[]');

  // Default sample courses if empty for demonstration
  if (enrolled.length === 0) {
    enrolled = [
      {
        id: 'course-1',
        title: 'Full Stack Java Development Masterclass',
        category: 'Java',
        duration: '6 Months',
        progress: 45
      },
      {
        id: 'course-3',
        title: 'Data Structures & Algorithms (DSA) in Java & C++',
        category: 'DSA',
        duration: '4 Months',
        progress: 70
      }
    ];
  }

  container.innerHTML = enrolled.map(c => `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
      <div>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.35rem;">
          <span class="badge badge-primary">${c.category}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> ${c.duration}</span>
        </div>
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem;">${c.title}</h4>
        
        <div style="display: flex; align-items: center; gap: 1rem; width: 260px;">
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${c.progress || 35}%;"></div>
          </div>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary);">${c.progress || 35}%</span>
        </div>
      </div>

      <div>
        <a href="courses.html" class="btn btn-primary btn-sm">
          Continue Learning <i class="fa-solid fa-play"></i>
        </a>
      </div>
    </div>
  `).join('');
}

function renderTestHistory() {
  const tableBody = document.getElementById('dashTestHistoryTable');
  if (!tableBody) return;

  let history = JSON.parse(localStorage.getItem('tka_test_history') || '[]');

  // Default sample records if empty
  if (history.length === 0) {
    history = [
      {
        testTitle: 'Core Java & OOPs Concepts Mock Assessment',
        subject: 'Java',
        score: 8,
        maxScore: 10,
        percentage: 80,
        date: '28/09/2026'
      },
      {
        testTitle: 'General Aptitude & Logical Reasoning Drive Test',
        subject: 'Aptitude',
        score: 10,
        maxScore: 10,
        percentage: 100,
        date: '25/09/2026'
      }
    ];
  }

  tableBody.innerHTML = history.map(item => `
    <tr>
      <td>
        <strong>${item.testTitle}</strong>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${item.subject}</div>
      </td>
      <td>${item.date}</td>
      <td>
        <strong>${item.score}/${item.maxScore}</strong> (${item.percentage}%)
      </td>
      <td>
        <span class="badge badge-${item.percentage >= 60 ? 'success' : 'danger'}">
          ${item.percentage >= 60 ? 'PASSED' : 'FAILED'}
        </span>
      </td>
    </tr>
  `).join('');
}

function renderApplicationHistory() {
  const tableBody = document.getElementById('dashApplicationsTable');
  if (!tableBody) return;

  let apps = JSON.parse(localStorage.getItem('tka_applications') || '[]');

  // Default sample app if empty
  if (apps.length === 0) {
    apps = [
      {
        role: 'Full Stack Web Development Intern',
        company: 'TKA Industry Incubator',
        appliedDate: '29/09/2026',
        status: 'Under Review'
      }
    ];
  }

  tableBody.innerHTML = apps.map(app => `
    <tr>
      <td>
        <strong>${app.role}</strong>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${app.company}</div>
      </td>
      <td>${app.appliedDate}</td>
      <td>
        <span class="badge badge-warning">${app.status}</span>
      </td>
    </tr>
  `).join('');
}

function openEditProfileModal() {
  const user = getCurrentUser() || {};

  const modalHtml = `
    <div class="modal-backdrop active" id="editProfileModal">
      <div class="modal-dialog" style="max-width: 500px;">
        <div class="modal-header">
          <h3 class="modal-title">Edit Student Profile</h3>
          <button class="modal-close" onclick="document.getElementById('editProfileModal').remove()">&times;</button>
        </div>
        <div class="modal-body">
          <form onsubmit="handleSaveProfile(event)">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="editName" class="form-control" value="${user.fullName || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input type="tel" id="editPhone" class="form-control" value="${user.phone || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Enrolled Batch / Goal</label>
              <input type="text" id="editBatch" class="form-control" value="${user.enrolledBatch || ''}">
            </div>
            <div class="modal-footer" style="padding-left:0; padding-right:0;">
              <button type="button" onclick="document.getElementById('editProfileModal').remove()" class="btn btn-secondary">Cancel</button>
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function handleSaveProfile(e) {
  e.preventDefault();
  let user = getCurrentUser() || {};

  user.fullName = document.getElementById('editName').value;
  user.phone = document.getElementById('editPhone').value;
  user.enrolledBatch = document.getElementById('editBatch').value;

  localStorage.setItem('tka_user', JSON.stringify(user));
  document.getElementById('editProfileModal').remove();

  showToast('Profile updated successfully!', 'success');
  renderUserProfile(user);
}
