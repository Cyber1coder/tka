/* ==========================================================================
   The Kiran Academy (TKA) - Mock Test Engine & Practice Portal
   ========================================================================== */

const MOCK_TESTS_DATA = [
  {
    id: 'test-java',
    title: 'Core Java & OOPs Concepts Mock Assessment',
    subject: 'Java',
    difficulty: 'Medium',
    durationMinutes: 10,
    totalQuestions: 5,
    description: 'Evaluate your knowledge of Core Java syntax, Object-Oriented Principles, Exception Handling, and Multithreading.',
    questions: [
      {
        id: 'q1',
        text: 'Which of the following is NOT a feature of Object-Oriented Programming in Java?',
        options: [
          'Encapsulation',
          'Pointers Manipulation',
          'Inheritance',
          'Polymorphism'
        ],
        correctIndex: 1,
        explanation: 'Java explicitly eliminates explicit memory management and pointer manipulation to ensure memory safety and security.'
      },
      {
        id: 'q2',
        text: 'What is the default value of a local object reference variable declared inside a method in Java?',
        options: [
          'null',
          'Garbage value',
          'No default value (Must be initialized before use)',
          '0'
        ],
        correctIndex: 2,
        explanation: 'Local variables in Java do not get default values. They must be explicitly initialized before access, otherwise a compilation error occurs.'
      },
      {
        id: 'q3',
        text: 'Which interface in Java Collection Framework does NOT extend the Collection interface?',
        options: [
          'List',
          'Set',
          'Queue',
          'Map'
        ],
        correctIndex: 3,
        explanation: 'Map interface represents key-value pairs and is part of Java Collections Framework but does NOT extend java.util.Collection interface.'
      },
      {
        id: 'q4',
        text: 'What will happen if a string is modified using methods like concat() on java.lang.String class?',
        options: [
          'The existing String object is mutated in-place.',
          'A new String object is created in memory because String is immutable.',
          'A NullPointerException is thrown.',
          'The memory is automatically freed.'
        ],
        correctIndex: 1,
        explanation: 'Strings in Java are immutable. Any operation that appears to modify a string actually creates a brand new String instance in the String Constant Pool or Heap.'
      },
      {
        id: 'q5',
        text: 'Which keyword is used by a class to implement an interface in Java?',
        options: [
          'extends',
          'implements',
          'interface',
          'inherits'
        ],
        correctIndex: 1,
        explanation: 'The "implements" keyword is used by a Java class to promise adherence to contract methods defined inside an interface.'
      }
    ]
  },
  {
    id: 'test-python',
    title: 'Python Essentials & Data Structures Test',
    subject: 'Python',
    difficulty: 'Easy',
    durationMinutes: 8,
    totalQuestions: 5,
    description: 'Test your grasp on Python list comprehensions, dictionaries, tuples, decorators, and basic algorithm logic.',
    questions: [
      {
        id: 'py1',
        text: 'What is the data structure type of x = (5,)?',
        options: [
          'List',
          'Set',
          'Tuple',
          'Integer'
        ],
        correctIndex: 2,
        explanation: 'A single-element tuple in Python must include a trailing comma `(5,)`. Without the comma `(5)` is interpreted as a parenthesized integer.'
      },
      {
        id: 'py2',
        text: 'Which built-in Python function is used to get the length of an iterable?',
        options: [
          'size()',
          'length()',
          'len()',
          'count()'
        ],
        correctIndex: 2,
        explanation: '`len()` is the standard built-in function to return item count of lists, strings, dictionaries, and tuples.'
      },
      {
        id: 'py3',
        text: 'What is the output of `[x**2 for x in range(3)]`?',
        options: [
          '[1, 4, 9]',
          '[0, 1, 4]',
          '[0, 1, 2]',
          '[1, 2, 3]'
        ],
        correctIndex: 1,
        explanation: 'range(3) produces 0, 1, 2. Squaring each yields 0, 1, and 4 in list format `[0, 1, 4]`.'
      },
      {
        id: 'py4',
        text: 'How do you define a function in Python?',
        options: [
          'function myFunc()',
          'def myFunc():',
          'func myFunc():',
          'void myFunc()'
        ],
        correctIndex: 1,
        explanation: 'Functions in Python are defined using the `def` keyword followed by function name and colon.'
      },
      {
        id: 'py5',
        text: 'What will `type(None)` return in Python 3?',
        options: [
          '<class \'NoneType\'>',
          '<class \'null\'>',
          '<class \'void\'>',
          '<class \'undefined\'>'
        ],
        correctIndex: 0,
        explanation: 'In Python, `None` is the sole instance of the `NoneType` class.'
      }
    ]
  },
  {
    id: 'test-dsa',
    title: 'Data Structures & Algorithms (DSA) Challenge',
    subject: 'DSA',
    difficulty: 'Hard',
    durationMinutes: 12,
    totalQuestions: 5,
    description: 'Challenge your understanding of Binary Search, Trees, Dynamic Programming, Graph Traversal, and Big-O Time Complexity.',
    questions: [
      {
        id: 'dsa1',
        text: 'What is the worst-case time complexity of Quick Sort algorithm?',
        options: [
          'O(N log N)',
          'O(N)',
          'O(N^2)',
          'O(log N)'
        ],
        correctIndex: 2,
        explanation: 'When the pivot selection is poor (e.g. sorted array with first element as pivot), Quick Sort degrades to O(N^2) time complexity.'
      },
      {
        id: 'dsa2',
        text: 'Which data structure follows the Last-In, First-Out (LIFO) order?',
        options: [
          'Queue',
          'Stack',
          'Tree',
          'Graph'
        ],
        correctIndex: 1,
        explanation: 'Stack enforces LIFO ordering where the last element inserted is the first one removed.'
      },
      {
        id: 'dsa3',
        text: 'In a Binary Search Tree (BST), what property holds for every node N?',
        options: [
          'Left child value <= N <= Right child value',
          'Left child value >= N >= Right child value',
          'All nodes are at the same depth',
          'Every node has exactly 2 children'
        ],
        correctIndex: 0,
        explanation: 'In a standard BST, all values in the left subtree are strictly less than/equal to node N, and all values in the right subtree are greater than N.'
      },
      {
        id: 'dsa4',
        text: 'Which algorithm is used to find the shortest path from a single source node in a weighted graph with non-negative edge weights?',
        options: [
          'Prim\'s Algorithm',
          'Kruskal\'s Algorithm',
          'Dijkstra\'s Algorithm',
          'Floyd-Warshall Algorithm'
        ],
        correctIndex: 2,
        explanation: 'Dijkstra\'s Algorithm efficiently computes single-source shortest path for graphs with non-negative edge costs.'
      },
      {
        id: 'dsa5',
        text: 'What is the average time complexity to search an element in a Hash Table?',
        options: [
          'O(1)',
          'O(log N)',
          'O(N)',
          'O(N log N)'
        ],
        correctIndex: 0,
        explanation: 'With a good hash function and reasonable load factor, hash table lookups execute in average constant O(1) time.'
      }
    ]
  },
  {
    id: 'test-aptitude',
    title: 'General Aptitude & Logical Reasoning Drive Test',
    subject: 'Aptitude',
    difficulty: 'Easy',
    durationMinutes: 10,
    totalQuestions: 5,
    description: 'Quantitative aptitude, percentage calculations, ratio-proportions, and analytical series puzzles.',
    questions: [
      {
        id: 'apt1',
        text: 'If a train traveling at 60 km/h crosses a pole in 9 seconds, what is the length of the train in meters?',
        options: [
          '120 m',
          '150 m',
          '180 m',
          '200 m'
        ],
        correctIndex: 1,
        explanation: 'Speed in m/s = 60 * (5/18) = 50/3 m/s. Distance = Speed * Time = (50/3) * 9 = 150 meters.'
      },
      {
        id: 'apt2',
        text: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
        options: [
          '40',
          '42',
          '44',
          '46'
        ],
        correctIndex: 1,
        explanation: 'Differences between consecutive terms are +4, +6, +8, +10. The next difference is +12. So 30 + 12 = 42.'
      },
      {
        id: 'apt3',
        text: 'A item bought for ₹500 is sold for ₹600. What is the profit percentage?',
        options: [
          '15%',
          '18%',
          '20%',
          '25%'
        ],
        correctIndex: 2,
        explanation: 'Profit = ₹100. Profit % = (Profit / Cost Price) * 100 = (100 / 500) * 100 = 20%.'
      },
      {
        id: 'apt4',
        text: 'Point A is to the West of Point B. Point C is to the South of Point A. In which direction is Point B relative to Point C?',
        options: [
          'North-East',
          'South-West',
          'North-West',
          'South-East'
        ],
        correctIndex: 0,
        explanation: 'Point B is East of A. Point C is South of A. Drawing the coordinates puts B to the North-East of C.'
      },
      {
        id: 'apt5',
        text: 'If 5 men take 12 days to build a wall, how many days will 10 men take working at the same pace?',
        options: [
          '4 days',
          '6 days',
          '8 days',
          '10 days'
        ],
        correctIndex: 1,
        explanation: 'Total Man-days required = 5 * 12 = 60. For 10 men: 60 / 10 = 6 days.'
      }
    ]
  }
];

let activeTestState = null;
let timerInterval = null;

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('mockTestsList')) {
    renderMockTestsList();
  }
});

function renderMockTestsList() {
  const container = document.getElementById('mockTestsList');
  if (!container) return;

  container.innerHTML = MOCK_TESTS_DATA.map(test => `
    <div class="course-card">
      <div class="course-body">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <span class="badge badge-primary">${test.subject}</span>
          <span class="badge badge-${test.difficulty === 'Hard' ? 'danger' : test.difficulty === 'Medium' ? 'warning' : 'success'}">${test.difficulty}</span>
        </div>
        <h3 class="course-title">${test.title}</h3>
        <p class="course-desc">${test.description}</p>
        
        <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          <span><i class="fa-regular fa-clock"></i> ${test.durationMinutes} mins</span>
          <span><i class="fa-regular fa-file-lines"></i> ${test.totalQuestions} Questions</span>
          <span><i class="fa-solid fa-award"></i> ${test.totalQuestions * 2} Marks</span>
        </div>
        
        <button onclick="startTest('${test.id}')" class="btn btn-primary btn-block">
          <i class="fa-solid fa-play"></i> Start Mock Test
        </button>
      </div>
    </div>
  `).join('');
}

function startTest(testId) {
  const test = MOCK_TESTS_DATA.find(t => t.id === testId);
  if (!test) return;

  // Initialize test state
  activeTestState = {
    testInfo: test,
    currentIndex: 0,
    answers: new Array(test.questions.length).fill(null),
    reviewFlags: new Array(test.questions.length).fill(false),
    secondsLeft: test.durationMinutes * 60,
    startTime: Date.now()
  };

  renderTestInterface();
  startCountdown();
}

function renderTestInterface() {
  const mainWrapper = document.getElementById('testMainApp') || document.body;
  const test = activeTestState.testInfo;
  const q = test.questions[activeTestState.currentIndex];

  const html = `
    <div class="container section-padding" style="padding-top: 2rem;">
      <div class="test-header-strip">
        <div>
          <h2 style="font-size: 1.25rem;">${test.title}</h2>
          <div style="font-size: 0.85rem; color: var(--text-muted);">Question ${activeTestState.currentIndex + 1} of ${test.questions.length}</div>
        </div>
        <div class="timer-box" id="testTimerDisplay">
          <i class="fa-regular fa-clock"></i> <span id="timerText">00:00</span>
        </div>
      </div>

      <div class="test-layout-grid">
        <!-- Question Content -->
        <div class="question-box">
          <span class="q-number-badge">Question ${activeTestState.currentIndex + 1}</span>
          <h3 class="question-text">${q.text}</h3>

          <div class="options-list">
            ${q.options.map((optText, optIdx) => {
              const isSelected = activeTestState.answers[activeTestState.currentIndex] === optIdx;
              return `
                <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption(${optIdx})">
                  <input type="radio" name="q_opt" class="option-radio" ${isSelected ? 'checked' : ''}>
                  <span class="option-text">${optText}</span>
                </div>
              `;
            }).join('')}
          </div>

          <div class="test-controls-bar">
            <div>
              <button onclick="toggleMarkReview()" class="btn btn-secondary btn-sm">
                <i class="fa-solid fa-flag" style="color: var(--warning);"></i> ${activeTestState.reviewFlags[activeTestState.currentIndex] ? 'Unmark Review' : 'Mark for Review'}
              </button>
              <button onclick="clearResponse()" class="btn btn-secondary btn-sm" style="margin-left: 0.5rem;">
                Clear Selection
              </button>
            </div>

            <div style="display: flex; gap: 0.5rem;">
              <button onclick="navigateQuestion(-1)" class="btn btn-secondary" ${activeTestState.currentIndex === 0 ? 'disabled' : ''}>
                <i class="fa-solid fa-chevron-left"></i> Prev
              </button>
              ${activeTestState.currentIndex === test.questions.length - 1
                ? `<button onclick="confirmSubmitTest()" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i> Submit Test</button>`
                : `<button onclick="navigateQuestion(1)" class="btn btn-primary">Next <i class="fa-solid fa-chevron-right"></i></button>`
              }
            </div>
          </div>
        </div>

        <!-- Question Palette -->
        <div class="question-palette-box">
          <h4 class="palette-title">Question Palette</h4>
          
          <div class="palette-legend">
            <div class="legend-item"><div class="legend-dot current"></div> Current</div>
            <div class="legend-item"><div class="legend-dot answered"></div> Answered</div>
            <div class="legend-item"><div class="legend-dot unanswered"></div> Unanswered</div>
            <div class="legend-item"><div class="legend-dot review"></div> Review</div>
          </div>

          <div class="palette-grid">
            ${test.questions.map((_, idx) => {
              let statusClass = 'unanswered';
              if (idx === activeTestState.currentIndex) statusClass = 'current';
              else if (activeTestState.reviewFlags[idx]) statusClass = 'review';
              else if (activeTestState.answers[idx] !== null) statusClass = 'answered';

              return `
                <button onclick="jumpToQuestion(${idx})" class="palette-btn ${statusClass}">
                  ${idx + 1}
                </button>
              `;
            }).join('')}
          </div>

          <button onclick="confirmSubmitTest()" class="btn btn-danger btn-block" style="margin-top: 2rem;">
            End & Submit Test
          </button>
        </div>
      </div>
    </div>
  `;

  mainWrapper.innerHTML = html;
  updateTimerDisplay();
}

function startCountdown() {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (!activeTestState) return;

    activeTestState.secondsLeft--;
    updateTimerDisplay();

    if (activeTestState.secondsLeft <= 0) {
      clearInterval(timerInterval);
      showToast('Time expired! Auto submitting test...', 'warning');
      submitTestEngine();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerText = document.getElementById('timerText');
  if (!timerText || !activeTestState) return;

  const mins = Math.floor(activeTestState.secondsLeft / 60);
  const secs = activeTestState.secondsLeft % 60;
  timerText.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function selectOption(optIndex) {
  activeTestState.answers[activeTestState.currentIndex] = optIndex;
  renderTestInterface();
}

function clearResponse() {
  activeTestState.answers[activeTestState.currentIndex] = null;
  renderTestInterface();
}

function toggleMarkReview() {
  const curr = activeTestState.currentIndex;
  activeTestState.reviewFlags[curr] = !activeTestState.reviewFlags[curr];
  renderTestInterface();
}

function navigateQuestion(direction) {
  const nextIdx = activeTestState.currentIndex + direction;
  if (nextIdx >= 0 && nextIdx < activeTestState.testInfo.questions.length) {
    activeTestState.currentIndex = nextIdx;
    renderTestInterface();
  }
}

function jumpToQuestion(idx) {
  activeTestState.currentIndex = idx;
  renderTestInterface();
}

function confirmSubmitTest() {
  const answeredCount = activeTestState.answers.filter(a => a !== null).length;
  const total = activeTestState.testInfo.questions.length;

  const modalHtml = `
    <div class="modal-backdrop active" id="confirmSubmitModal">
      <div class="modal-dialog" style="max-width: 480px;">
        <div class="modal-header">
          <h3 class="modal-title">Submit Mock Test?</h3>
          <button class="modal-close" onclick="document.getElementById('confirmSubmitModal').remove()">&times;</button>
        </div>
        <div class="modal-body">
          <p style="margin-bottom: 1rem;">Are you sure you want to finish and submit your test?</p>
          <div style="background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-md); font-size: 0.9rem;">
            <div><strong>Answered Questions:</strong> ${answeredCount} / ${total}</div>
            <div><strong>Unanswered Questions:</strong> ${total - answeredCount}</div>
          </div>
        </div>
        <div class="modal-footer">
          <button onclick="document.getElementById('confirmSubmitModal').remove()" class="btn btn-secondary">Continue Test</button>
          <button onclick="submitTestEngine()" class="btn btn-primary">Yes, Submit Now</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function submitTestEngine() {
  if (timerInterval) clearInterval(timerInterval);
  const confirmModal = document.getElementById('confirmSubmitModal');
  if (confirmModal) confirmModal.remove();

  const test = activeTestState.testInfo;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  test.questions.forEach((q, idx) => {
    const userAns = activeTestState.answers[idx];
    if (userAns === null) {
      unansweredCount++;
    } else if (userAns === q.correctIndex) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const totalQuestions = test.questions.length;
  const score = correctCount * 2;
  const maxScore = totalQuestions * 2;
  const percentage = Math.round((score / maxScore) * 100);
  const timeTakenSeconds = (test.durationMinutes * 60) - activeTestState.secondsLeft;

  // Save result attempt to localStorage
  const resultRecord = {
    testId: test.id,
    testTitle: test.title,
    subject: test.subject,
    score: score,
    maxScore: maxScore,
    percentage: percentage,
    correctCount: correctCount,
    incorrectCount: incorrectCount,
    unansweredCount: unansweredCount,
    date: new Date().toLocaleDateString(),
    timeTaken: `${Math.floor(timeTakenSeconds / 60)}m ${timeTakenSeconds % 60}s`
  };

  let history = JSON.parse(localStorage.getItem('tka_test_history') || '[]');
  history.unshift(resultRecord);
  localStorage.setItem('tka_test_history', JSON.stringify(history));

  renderResultsScreen(resultRecord, test);
}

function renderResultsScreen(result, test) {
  const mainWrapper = document.getElementById('testMainApp') || document.body;

  const html = `
    <div class="container section-padding">
      <div class="results-card">
        <h2 style="font-size: 2rem;">Test Score Summary</h2>
        <p style="color: var(--text-muted);">${result.testTitle}</p>

        <div class="score-badge-circle">
          <div class="score-num">${result.score}/${result.maxScore}</div>
          <div class="score-pct">${result.percentage}% Marks</div>
        </div>

        <div style="font-size: 1.1rem; font-weight: 700; color: ${result.percentage >= 60 ? 'var(--success)' : 'var(--danger)'}; margin-bottom: 1.5rem;">
          ${result.percentage >= 60 ? '<i class="fa-solid fa-circle-check"></i> Passed - Outstanding Performance!' : '<i class="fa-solid fa-circle-xmark"></i> Needs Practice - Keep Learning!'}
        </div>

        <div class="breakdown-grid">
          <div class="bk-box">
            <div class="bk-val" style="color: var(--success);">${result.correctCount}</div>
            <div class="bk-lbl">Correct</div>
          </div>
          <div class="bk-box">
            <div class="bk-val" style="color: var(--danger);">${result.incorrectCount}</div>
            <div class="bk-lbl">Incorrect</div>
          </div>
          <div class="bk-box">
            <div class="bk-val" style="color: var(--warning);">${result.unansweredCount}</div>
            <div class="bk-lbl">Unanswered</div>
          </div>
          <div class="bk-box">
            <div class="bk-val" style="color: var(--primary);">${result.timeTaken}</div>
            <div class="bk-lbl">Time Spent</div>
          </div>
        </div>

        <!-- Answer Key & Detailed Review -->
        <h3 style="text-align: left; margin: 2rem 0 1rem 0; font-size: 1.25rem;">Question & Answer Solutions Review</h3>
        ${test.questions.map((q, idx) => {
          const userAns = activeTestState.answers[idx];
          const isCorrect = userAns === q.correctIndex;
          const isUnanswered = userAns === null;

          return `
            <div class="review-item" style="border-left: 4px solid ${isCorrect ? 'var(--success)' : isUnanswered ? 'var(--warning)' : 'var(--danger)'};">
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem;">
                Question ${idx + 1} - ${isCorrect ? '<span style="color:var(--success);">Correct (+2)</span>' : isUnanswered ? '<span style="color:var(--warning);">Unanswered (0)</span>' : '<span style="color:var(--danger);">Incorrect (0)</span>'}
              </div>
              <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem;">${q.text}</h4>
              
              <div style="font-size: 0.9rem;">
                <div><strong>Your Answer:</strong> ${isUnanswered ? '<em>Not Answered</em>' : q.options[userAns]}</div>
                <div><strong>Correct Answer:</strong> <span style="color: var(--success); font-weight:700;">${q.options[q.correctIndex]}</span></div>
              </div>

              <div class="review-explanation">
                <strong>Explanation:</strong> ${q.explanation}
              </div>
            </div>
          `;
        }).join('')}

        <div style="margin-top: 2.5rem; display: flex; gap: 1rem; justify-content: center;">
          <a href="mock-tests.html" class="btn btn-secondary">Back to All Mock Tests</a>
          <a href="dashboard.html" class="btn btn-primary">Go to Student Dashboard</a>
        </div>
      </div>
    </div>
  `;

  mainWrapper.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
