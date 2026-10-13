const keys = [
    ['C', ['C', 'D', 'E', 'F', 'G', 'A', 'B']],
    ['D♭', ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C']],
    ['D', ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯']],
    ['E♭', ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D']],
    ['E', ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯']],
    ['F', ['F', 'G', 'A', 'B♭', 'C', 'D', 'E']],
    ['F♯', ['F♯', 'G♯', 'A♯', 'B', 'C♯', 'D♯', 'E♯']],
    ['G', ['G', 'A', 'B', 'C', 'D', 'E', 'F♯']],
    ['A♭', ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G']],
    ['A', ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯']],
    ['B♭', ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A']],
    ['B', ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯']]
];
let current = -1;
const el = id => document.getElementById(id);
function nextKey() {
    const choices = keys.map((_, i) => i).filter(i => i !== current);
    current = choices[Math.floor(Math.random() * choices.length)];
    el('key').textContent = keys[current][0];
    el('minor').innerHTML = '<span class="hidden-copy">Can you name the relative minor?</span>';
    el('scale').innerHTML = '<span class="hidden-copy">Can you name all seven notes?</span>';
    for (const type of ['minor', 'scale']) { el('reveal-' + type).setAttribute('aria-expanded', 'false'); el('reveal-' + type).textContent = type === 'minor' ? 'Reveal relative minor' : 'Reveal major scale'; }
}
el('next').addEventListener('click', nextKey);
for (const type of ['minor', 'scale']) el('reveal-' + type).addEventListener('click', () => {
    const button = el('reveal-' + type), shown = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!shown));
    button.textContent = (shown ? 'Reveal ' : 'Hide ') + (type === 'minor' ? 'relative minor' : 'major scale');
    if (shown) { el(type).innerHTML = '<span class="hidden-copy">' + (type === 'minor' ? 'Can you name the relative minor?' : 'Can you name all seven notes?') + '</span>'; return; }
    if (type === 'minor') el(type).textContent = keys[current][1][5] + ' minor';
    else el(type).innerHTML = [...keys[current][1], keys[current][0]].map(note => '<span class="scale-note">' + note + '</span>').join(' ');
});
document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.repeat || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
    const key = event.key.toLowerCase();
    if (['arrowright', 'arrowleft', 'n'].includes(key) || (key === ' ' && event.target.tagName !== 'BUTTON')) { event.preventDefault(); nextKey(); }
    else if (key === 'm' || key === 's') { event.preventDefault(); el(key === 'm' ? 'reveal-minor' : 'reveal-scale').click(); }
});
nextKey();
