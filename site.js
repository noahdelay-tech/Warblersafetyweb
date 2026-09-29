const examples = {
  cost: {
    response: '“It costs more than I expected.”',
    handoff: 'Explain approved cost-support options and check whether they help. Escalate unresolved costs.'
  },
  delivery: {
    response: '“My refill hasn’t arrived.”',
    handoff: 'Guide the patient through delivery-support options. Check whether the barrier is resolved.'
  },
  question: {
    response: '“I have a question about side effects.”',
    handoff: 'Capture the concern and automatically book an appointment based on the pharmacist’s availability.'
  }
};
for (const button of document.querySelectorAll('[data-scenario]')) {
  button.addEventListener('click', () => {
    const example = examples[button.dataset.scenario];
    if (!example) return;
    for (const [id, value] of Object.entries(example)) document.getElementById(id).textContent = value;
    for (const candidate of document.querySelectorAll('[data-scenario]')) {
      candidate.setAttribute('aria-pressed', String(candidate === button));
    }
  });
}

const workflowVideo = document.querySelector('#workflow-video');
const workflowPlay = document.querySelector('.film-play');
if (workflowVideo && workflowPlay) {
  workflowPlay.addEventListener('click', async () => {
    try {
      await workflowVideo.play();
    } catch {
      workflowPlay.hidden = false;
    }
  });
  workflowVideo.addEventListener('play', () => { workflowPlay.hidden = true; });
  workflowVideo.addEventListener('ended', () => { workflowPlay.hidden = false; });
}
