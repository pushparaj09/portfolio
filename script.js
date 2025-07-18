// Skill icon hover effect
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseover', () => {
    skill.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
  });
  skill.addEventListener('mouseout', () => {
    skill.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  });
});