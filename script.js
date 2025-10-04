
function toggleRule(ruleId) {
  const ruleContent = document.getElementById(ruleId);
  const ruleHeader = ruleContent.previousElementSibling;
  
  // Toggle active class
  ruleContent.classList.toggle('active');
  ruleHeader.classList.toggle('active');
  
  // Close other open sections
  const allRuleContents = document.querySelectorAll('.rule-content');
  const allRuleHeaders = document.querySelectorAll('.rule-header');
  
  allRuleContents.forEach((content, index) => {
    if (content !== ruleContent && content.classList.contains('active')) {
      content.classList.remove('active');
      allRuleHeaders[index].classList.remove('active');
    }
  });
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.rule-section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.5s ease';
  observer.observe(section);
});
