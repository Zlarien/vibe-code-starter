const DEFAULT_AUDIENCE = 'Beginner vibe coders';

const STACK_MAP = [
  { keyword: /(dashboard|admin|saas|analytics|plateforme|platform)/i, stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Clerk/Auth.js', 'Vercel'] },
  { keyword: /(mobile|ios|android|app mobile)/i, stack: ['React Native (Expo)', 'TypeScript', 'NativeWind', 'Supabase', 'EAS Build'] },
  { keyword: /(ai|assistant|chat|llm|gpt)/i, stack: ['Next.js 15', 'TypeScript', 'OpenAI/Anthropic SDK', 'tRPC', 'PostgreSQL', 'Vercel'] },
  { keyword: /(marketplace|ecommerce|shop|store|boutique)/i, stack: ['Next.js 15', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Resend', 'Vercel'] }
];

function recommendStack(idea) {
  const match = STACK_MAP.find((entry) => entry.keyword.test(idea));
  if (match) return match.stack;
  return ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'PostHog'];
}

function buildOrderedSteps() {
  return [
    'Define the smallest useful version (MVP) and one measurable user outcome.',
    'Generate your implementation prompt and copy it into Cursor/Lovable/Bolt.',
    'Scaffold the project and set up auth + database schema first.',
    'Build core user flow end-to-end before secondary features.',
    'Add monetization (Free with ads / Pro at €7 per month) with feature gates.',
    'Instrument analytics and error tracking to observe beginner onboarding.',
    'Test critical paths locally (happy path + payment + onboarding).',
    'Deploy and iterate weekly based on user friction signals.'
  ];
}

function buildPerfectPrompt(idea, stack) {
  const stackText = stack.map((item) => `- ${item}`).join('\n');

  return `You are a senior product engineer and pragmatic startup CTO.\n\nTask: Build \"${idea}\" for ${DEFAULT_AUDIENCE}.\n\nConstraints:\n- Optimize for speed, clarity, and beginner-friendly UX\n- Monetization model is fixed: Free with ads, or Pro at €7/month\n- Output production-ready code with explicit file structure\n- Include onboarding copy suitable for first-time vibe coders\n\nRecommended stack:\n${stackText}\n\nDelivery format required:\n1) Architecture (3-6 bullets)\n2) Exact file tree\n3) Step-by-step implementation in execution order\n4) Monetization wiring (ads for free tier, paywall for Pro)\n5) QA checklist and launch checklist\n\nDo not give vague advice. Return concrete implementation artifacts.`;
}

export function generateVibeStarter(idea) {
  if (typeof idea !== 'string' || idea.trim().length === 0) {
    throw new Error('Idea must be a non-empty string.');
  }

  const cleanIdea = idea.trim();
  const recommendedStack = recommendStack(cleanIdea);

  return {
    idea: cleanIdea,
    targetAudience: DEFAULT_AUDIENCE,
    perfectPrompt: buildPerfectPrompt(cleanIdea, recommendedStack),
    recommendedStack,
    orderedSteps: buildOrderedSteps(),
    monetization: {
      freePlan: 'Free tier with ads',
      proPlan: '€7/month Pro (no ads + advanced exports + priority generation)'
    }
  };
}
