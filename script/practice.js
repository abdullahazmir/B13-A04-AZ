const totalCount = document.getElementById('total-count')
const interviewCount = document.getElementById('interview-count')
const rejectedCount = document.getElementById('rejected-count')

// counting-------
let interviewList = [];
let rejectedList = [];

// filter button

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

// no card section
const noCardSection = document.getElementById('no-card-section')

// main delegation
const mainContainer = document.querySelector('main');

console.log(mainContainer)

const allJobs = document.getElementById('all-jobs');
console.log(allJobs.children.length);

function calculateCount() {
    totalCount.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-600', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white')

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black')
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-600', 'text-white')
    selected.classList.remove('bg-gray-300', 'text-black')
}