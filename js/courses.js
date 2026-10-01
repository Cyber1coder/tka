/* ==========================================================================
   The Kiran Academy (TKA) - Courses Data & Controller
   ========================================================================== */

const COURSES_DATA = [
  {
    id: 'course-1',
    title: 'Full Stack Java Development Masterclass',
    category: 'Java',
    level: 'Intermediate',
    duration: '6 Months',
    rating: 4.9,
    reviewsCount: 1420,
    price: 18999,
    originalPrice: 28999,
    instructor: 'Kiran Sir & Senior Tech Team',
    instructorTitle: 'Lead Java Architect (15+ Yrs Exp)',
    banner: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Master Core Java, Advanced Java, Spring Boot, Hibernate, Microservices, REST APIs, MySQL, and React frontend with real-world enterprise projects.',
    modules: [
      'Core Java & Object-Oriented Programming (OOP)',
      'Data Structures & Collection Framework',
      'Advanced Java, Servlets & JSP',
      'Spring Framework & Spring Boot 3.x',
      'Hibernate ORM & JPA Data Access',
      'Building Microservices & Web APIs',
      'MySQL & Relational Database Design',
      'React.js Frontend Integration & Project Work'
    ],
    prerequisites: 'Basic understanding of programming logic.',
    mode: 'Live Online + Offline Batches'
  },
  {
    id: 'course-2',
    title: 'Python Full Stack & Data Science Track',
    category: 'Python',
    level: 'Beginner to Advanced',
    duration: '5 Months',
    rating: 4.8,
    reviewsCount: 980,
    price: 17499,
    originalPrice: 25999,
    instructor: 'Rahul Sharma',
    instructorTitle: 'Data Science Specialist',
    banner: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive Python training covering Django framework, PostgreSQL, Pandas, NumPy, Machine Learning fundamentals, and automated API development.',
    modules: [
      'Python Syntax & Functional Programming',
      'Object-Oriented Python & File Handling',
      'Web Development with Django & Flask',
      'REST APIs & PostgreSQL Database',
      'Data Analysis with NumPy & Pandas',
      'Data Visualization with Matplotlib & Seaborn',
      'Machine Learning Algorithms Overview',
      'Capstone Industry Project'
    ],
    prerequisites: 'No prior coding experience required.',
    mode: 'Interactive Live Mentorship'
  },
  {
    id: 'course-3',
    title: 'Data Structures & Algorithms (DSA) in Java & C++',
    category: 'DSA',
    level: 'Advanced',
    duration: '4 Months',
    rating: 4.95,
    reviewsCount: 2150,
    price: 12999,
    originalPrice: 19999,
    instructor: 'Amit Patil',
    instructorTitle: 'Competitive Programmer & Ex-MAANG',
    banner: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Crack coding interviews at top product-based companies. Complete coverage of Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and System Design.',
    modules: [
      'Time & Space Complexity Analysis (Big O)',
      'Arrays, Two Pointers & Sliding Window',
      'Linked Lists, Stacks & Queues',
      'Trees, Binary Search Trees & Heaps',
      'Graph Algorithms (BFS, DFS, Dijkstra)',
      'Dynamic Programming & Recursion',
      'Bit Manipulation & Greedy Algorithms',
      '200+ LeetCode Problem Solvings'
    ],
    prerequisites: 'Knowledge of Java or C++ fundamentals.',
    mode: 'Live Coding & Problem Solving'
  },
  {
    id: 'course-4',
    title: 'Modern Full Stack Web Development (MERN)',
    category: 'Full Stack',
    level: 'Beginner to Advanced',
    duration: '6 Months',
    rating: 4.85,
    reviewsCount: 1650,
    price: 19999,
    originalPrice: 29999,
    instructor: 'Priya Verma',
    instructorTitle: 'Lead MERN Stack Engineer',
    banner: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80',
    description: 'Build modern responsive web applications using MongoDB, Express.js, React.js, Node.js, Tailwind CSS, TypeScript, and Docker container deployment.',
    modules: [
      'HTML5, Modern CSS3 & JavaScript (ES6+)',
      'React.js Components, Hooks & State Management',
      'Node.js Runtime & Express Server Development',
      'MongoDB & NoSQL Database Architecture',
      'Authentication (JWT & OAuth)',
      'TypeScript Integration',
      'Docker Basics & Deployment (Vercel/AWS)',
      'Real-world SaaS Application Project'
    ],
    prerequisites: 'Basic computer literacy.',
    mode: 'Hands-on Lab & Live Classes'
  },
  {
    id: 'course-5',
    title: 'Aptitude, Reasoning & Verbal Ability Masterclass',
    category: 'Aptitude',
    level: 'All Levels',
    duration: '2 Months',
    rating: 4.75,
    reviewsCount: 840,
    price: 6999,
    originalPrice: 11999,
    instructor: 'Vikram Joshi',
    instructorTitle: 'Aptitude & Campus Recruitment Trainer',
    banner: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    description: 'Essential prep for campus placement drives, IT hiring tests (TCS NQT, Wipro, Infosys), and competitive exams. Short-cut tricks and problem-solving tactics.',
    modules: [
      'Quantitative Aptitude & Shortcut Techniques',
      'Data Interpretation & Analytical Reasoning',
      'Logical & Diagrammatic Reasoning',
      'Verbal Ability & Grammar Accuracy',
      'Reading Comprehension & Critical Thinking',
      'Company Specific Mock Test Series'
    ],
    prerequisites: 'None.',
    mode: 'Fast-track Bootcamp'
  },
  {
    id: 'course-6',
    title: 'C & C++ Programming Foundations',
    category: 'C/C++',
    level: 'Beginner',
    duration: '2.5 Months',
    rating: 4.8,
    reviewsCount: 720,
    price: 7999,
    originalPrice: 12999,
    instructor: 'Sanjay Deshmukh',
    instructorTitle: 'Systems Engineer Trainer',
    banner: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    description: 'Build a bedrock foundation in computer programming logic, memory management, pointers, and Object-Oriented C++ concepts.',
    modules: [
      'Algorithm Logic & Flowcharts',
      'C Variables, Data Types & Control Structures',
      'Functions, Arrays & Strings',
      'Pointers, Dynamic Memory & Structures',
      'Object-Oriented C++ & Classes',
      'Inheritance, Polymorphism & Templates',
      'Standard Template Library (STL)'
    ],
    prerequisites: 'None.',
    mode: 'Interactive Coding Practice'
  },
  {
    id: 'course-7',
    title: 'GATE Computer Science & IT Complete Prep',
    category: 'GATE',
    level: 'Advanced',
    duration: '8 Months',
    rating: 4.9,
    reviewsCount: 510,
    price: 24999,
    originalPrice: 35999,
    instructor: 'Dr. Suresh Nair',
    instructorTitle: 'Ex-IIT Professor & GATE Topper Mentor',
    banner: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    description: 'Complete syllabus coverage for GATE CS exam: OS, DBMS, Networks, Theory of Computation, Compiler Design, Engineering Mathematics, and Test Series.',
    modules: [
      'Operating Systems & Kernel Concepts',
      'Database Management Systems (DBMS & SQL)',
      'Computer Networks & Protocols',
      'Theory of Computation (Automata)',
      'Compiler Design & Parsing',
      'Digital Logic & Computer Organization',
      'Engineering Mathematics & Discrete Structure',
      '50+ Full-length GATE Mock Exams'
    ],
    prerequisites: 'B.E./B.Tech Computer Science student or graduate.',
    mode: 'Comprehensive Hybrid Course'
  },
  {
    id: 'course-8',
    title: 'Software Testing (Manual + Automation Selenium)',
    category: 'Testing',
    level: 'Beginner to Intermediate',
    duration: '4 Months',
    rating: 4.82,
    reviewsCount: 1100,
    price: 15999,
    originalPrice: 22999,
    instructor: 'Snehal Kulkarni',
    instructorTitle: 'QA Lead Automation Specialist',
    banner: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: 'Learn Software QA testing methodologies, Agile Scrum, Test Case writing, JIRA bug tracking, Selenium WebDriver with Java, TestNG, Cucumber BDD & API Testing.',
    modules: [
      'Software Testing Life Cycle (STLC)',
      'Test Case Writing & Defect Management (JIRA)',
      'Java Basics for Automation Testers',
      'Selenium WebDriver & Locators',
      'TestNG Framework & Reporting',
      'Cucumber BDD Framework Integration',
      'REST API Testing with Postman & RestAssured',
      'Continuous Integration with Jenkins'
    ],
    prerequisites: 'Basic knowledge of software usage.',
    mode: 'Live Practical Labs'
  },
  {
    id: 'course-9',
    title: 'IT Interview Preparation & Resume Building Package',
    category: 'Interview',
    level: 'All Levels',
    duration: '1.5 Months',
    rating: 4.92,
    reviewsCount: 1890,
    price: 5999,
    originalPrice: 9999,
    instructor: 'HR & Placement Panel',
    instructorTitle: 'Senior Industry Recruiters',
    banner: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    description: 'Crack HR & Technical rounds. ATS-friendly resume creation, LinkedIn profile optimization, 5 mock interviews with feedback, and HR question prep.',
    modules: [
      'ATS-Compliant Technical Resume Building',
      'LinkedIn Profile & Portfolio Optimization',
      'Technical Interview FAQ Strategies',
      'HR Round Questions & Behavioral Answers',
      '1-on-1 Mock Interview Sessions',
      'Salary Negotiation & Offer Evaluation'
    ],
    prerequisites: 'Job seekers & final year students.',
    mode: '1-on-1 Personal Mentorship'
  }
];

let currentFilterCategory = 'All';
let currentSearchQuery = '';
let currentSort = 'popular';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('coursesContainer')) {
    initCoursesPage();
  }
});

function initCoursesPage() {
  renderCourses();

  // Category filter tabs
  const tabBtns = document.querySelectorAll('.tab-btn[data-category]');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilterCategory = btn.getAttribute('data-category');
      renderCourses();
    });
  });

  // Search input
  const searchInput = document.getElementById('courseSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderCourses();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('courseSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCourses();
    });
  }
}

function renderCourses() {
  const container = document.getElementById('coursesContainer');
  if (!container) return;

  let filtered = COURSES_DATA.filter(course => {
    const matchesCategory = currentFilterCategory === 'All' || course.category === currentFilterCategory;
    const matchesSearch = course.title.toLowerCase().includes(currentSearchQuery) ||
                          course.description.toLowerCase().includes(currentSearchQuery) ||
                          course.category.toLowerCase().includes(currentSearchQuery);
    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // Default popular
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <i class="fa-solid fa-graduation-cap" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <h3>No courses found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search query or category filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => `
    <div class="course-card">
      <div class="course-banner" style="background-image: url('${course.banner}');">
        <span class="badge badge-primary course-category-badge">${course.category}</span>
        <span class="course-level-tag">${course.level}</span>
      </div>
      <div class="course-body">
        <div class="course-meta">
          <span class="course-meta-item"><i class="fa-regular fa-clock"></i> ${course.duration}</span>
          <span class="course-meta-item"><i class="fa-solid fa-star" style="color: #f59e0b;"></i> ${course.rating} (${course.reviewsCount})</span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-desc">${course.description}</p>
        <div class="course-instructor">
          <div class="instructor-avatar" style="background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem;">TKA</div>
          <div>
            <div class="instructor-name">${course.instructor}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${course.instructorTitle}</div>
          </div>
        </div>
      </div>
      <div class="course-footer">
        <div class="course-price">
          <span class="price-current">₹${course.price.toLocaleString()}</span>
          <span class="price-original">₹${course.originalPrice.toLocaleString()}</span>
        </div>
        <button onclick="openCourseModal('${course.id}')" class="btn btn-primary btn-sm">
          View Details
        </button>
      </div>
    </div>
  `).join('');
}

function openCourseModal(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modalHtml = `
    <div class="modal-backdrop active" id="courseModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">${course.title}</h3>
          <button class="modal-close" onclick="closeCourseModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div style="margin-bottom: 1.5rem;">
            <span class="badge badge-primary">${course.category}</span>
            <span class="badge badge-success">${course.level}</span>
            <span class="badge badge-info">${course.duration}</span>
          </div>

          <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem;">${course.description}</p>

          <h4 style="margin-bottom: 0.75rem; font-size: 1.1rem;">Course Modules & Syllabus</h4>
          <ul style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
            ${course.modules.map(mod => `<li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;"><i class="fa-solid fa-circle-check" style="color: var(--success);"></i> ${mod}</li>`).join('')}
          </ul>

          <div style="background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <div style="font-size: 0.85rem; color: var(--text-muted);"><strong>Prerequisites:</strong> ${course.prerequisites}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.35rem;"><strong>Batch Mode:</strong> ${course.mode}</div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <div>
              <span style="font-size: 1.6rem; font-weight: 800; color: var(--primary);">₹${course.price.toLocaleString()}</span>
              <span style="font-size: 0.9rem; color: var(--text-light); text-decoration: line-through; margin-left: 0.5rem;">₹${course.originalPrice.toLocaleString()}</span>
            </div>
            <button onclick="enrollInCourse('${course.id}')" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-cart-shopping"></i> Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  if (modal) modal.remove();
}

function enrollInCourse(courseId) {
  const user = getCurrentUser();
  if (!user) {
    showToast('Please login to enroll in courses', 'warning');
    closeCourseModal();
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1200);
    return;
  }

  const course = COURSES_DATA.find(c => c.id === courseId);
  let enrolled = JSON.parse(localStorage.getItem('tka_enrolled_courses') || '[]');

  if (enrolled.some(c => c.id === courseId)) {
    showToast('You are already enrolled in this course!', 'info');
    closeCourseModal();
    return;
  }

  enrolled.push({
    ...course,
    enrolledAt: new Date().toLocaleDateString(),
    progress: 0
  });

  localStorage.setItem('tka_enrolled_courses', JSON.stringify(enrolled));
  showToast(`Successfully enrolled in ${course.title}!`, 'success');
  closeCourseModal();
}
