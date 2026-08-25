import resumeHtml from '@/assets/Sajid_Masood_Resume.html?raw';

export function downloadCv() {
  const blob = new Blob([resumeHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank', 'noopener');
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
