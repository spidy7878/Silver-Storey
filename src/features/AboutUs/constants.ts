import type { Stat, ProcessStep, ProcessPhase } from './types';

export const QUOTE =
  'Our advice to those who have never worked with a designer, \u201cWe are here to make the process fun and simple for you! There is easy access these days to design tips and ideas, which is wonderful, but it can be stressful to try to incorporate that into your own space. Let the designer do that work and iron out details which you might not consider. We are happy to create space that are a reflection of you, forming comforting sentiments and place for the best memories to be made\u201d';

export const stats: Stat[] = [
  { value: '60+', label: 'Happy Customers' },
  { value: '50000', label: 'Square Feet Transformed' },
  { value: '30+', label: 'Expert Team Members' },
  { value: '15', label: 'Years of Experience' },
];

// ── Phase 1: Initial Assessment ───────────────────────────────────────────────
const assessmentSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Site Assessment',
    items: [
      {
        bold: 'Prepare a Checklist:',
        text: 'List out everything you need to assess\u2014dimensions, lighting, existing furnishings, architectural details, and any structural elements.',
      },
      {
        bold: 'Assess Lighting:',
        text: 'Observe both natural and artificial lighting at different times of the day. This will help you understand how light affects the space.',
      },
      {
        bold: 'Understand the Client\u2019s Vision:',
        text: 'If this visit is for a client, make sure you have a clear understanding of their preferences, lifestyle, and budget.',
      },
    ],
  },
  {
    number: '02',
    title: 'Preliminary Design and Concept Development',
    items: [
      {
        bold: 'Conceptual Design:',
        text: 'Create initial design concepts or mood boards based on the client\u2019s preferences and the site assessment.',
      },
      {
        bold: 'Space Planning:',
        text: 'Develop preliminary layouts to show how furniture and other elements will fit within the space.',
      },
    ],
  },
  {
    number: '03',
    title: 'Estimating & Budgeting',
    items: [
      {
        bold: 'Material Costs:',
        text: 'Estimate the cost of materials, including flooring, paint, wallpaper, and finishes. Research prices and consider options within the client\u2019s budget.',
      },
      {
        bold: 'Labor Costs:',
        text: 'Estimate costs for any required contractors, such as painters, carpenters, or electricians.',
      },
      {
        bold: 'Design Fees:',
        text: 'Include your own design fees based on your pricing structure. This could be an hourly rate, a flat fee, or a percentage of the total project cost.',
      },
    ],
  },
  {
    number: '04',
    title: 'Book the Project with Initial Token and Approvals',
    items: [
      {
        bold: 'Refine Design:',
        text: 'Adjust the design and budget based on client feedback and any additional site considerations.',
      },
      {
        bold: 'Obtain Approvals:',
        text: 'Get final approval from the client on the design and budget before proceeding to the next stages of the project.',
      },
    ],
  },
];

// ── Phase 2: Design Phase ─────────────────────────────────────────────────────
const designPhaseSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Design Development',
    items: [
      {
        bold: 'Detailed Drawings:',
        text: 'Create detailed drawings, including floor plans, elevations, and sections. These should show how different elements will be installed and how they relate to each other.',
      },
      {
        bold: 'Materials and Finishes:',
        text: 'Choose materials, finishes, and colors. Present samples and swatches to the client for approval.',
      },
      {
        bold: 'Lighting Design:',
        text: 'Plan the lighting scheme, including types of fixtures, placement, and lighting effects. Consider natural and artificial light sources.',
      },
    ],
  },
  {
    number: '02',
    title: 'Presentation',
    items: [
      {
        bold: 'Design Presentation:',
        text: 'Prepare a comprehensive presentation for the client that includes visualizations such as renderings, 3D models, or virtual tours. This helps the client visualize the final outcome.',
      },
      {
        bold: 'Revisions:',
        text: 'Gather feedback from the client and make necessary revisions to the design. Address any concerns or additional requests.',
      },
    ],
  },
  {
    number: '03',
    title: 'Specifications and Documentation',
    items: [
      {
        bold: 'Specification Sheets:',
        text: 'Prepare detailed specification sheets for all materials, fixtures, and furnishings. Include information on suppliers, product codes, and installation requirements.',
      },
      {
        bold: 'Budget and Cost Estimates:',
        text: 'Update the budget with any changes based on the finalized design. Provide a detailed cost estimate for materials, labor, and other expenses.',
      },
    ],
  },
];

// ── Phase 3: Implementation Phase ────────────────────────────────────────────
const implementationPhaseSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Pre-Construction Preparations',
    items: [
      {
        bold: 'Finalize Documentation:',
        text: 'Ensure all design documents, including drawings, specifications, and contracts, are finalized and approved.',
      },
      {
        bold: 'Procure Materials:',
        text: 'Confirm orders for materials, furnishings, and fixtures. Coordinate delivery schedules with suppliers to ensure timely arrival.',
      },
    ],
  },
  {
    number: '02',
    title: 'Project Kickoff',
    items: [
      {
        bold: 'Team Briefing:',
        text: 'Conduct a kickoff meeting with all stakeholders, including contractors, subcontractors, and suppliers. Review the project scope, schedule, and roles.',
      },
      {
        bold: 'Site Preparation:',
        text: 'Prepare the site for construction or renovation. This may involve clearing out existing furniture, protecting floors and surfaces, and setting up work areas.',
      },
    ],
  },
  {
    number: '03',
    title: 'Construction and Installation',
    items: [
      {
        bold: 'Monitor Progress:',
        text: 'Regularly check the progress of construction or renovation work.',
      },
      {
        bold: 'Quality Control:',
        text: 'Inspect workmanship and materials to ensure they meet the specified quality standards.',
      },
      {
        bold: 'Installations:',
        text: 'Oversee the installation of furniture, fixtures, and finishes.',
      },
    ],
  },
  {
    number: '04',
    title: 'Coordination and Communication',
    items: [
      {
        bold: 'Regular Updates:',
        text: 'Maintain regular communication with the client to provide updates on progress, address any concerns, and adjust plans as needed.',
      },
      {
        bold: 'Problem Solving:',
        text: 'Be prepared to address and resolve any issues that arise during the execution phase, such as unexpected delays or changes.',
      },
    ],
  },
  {
    number: '05',
    title: 'Site Management',
    items: [
      {
        bold: 'Safety and Cleanliness:',
        text: 'Ensure that the site is safe and clean. This includes managing construction debris, securing tools and materials, and following safety protocols.',
      },
      {
        bold: 'Supervision:',
        text: 'Supervise the work to ensure adherence to the design and quality standards. Conduct site visits to monitor progress and make any necessary adjustments.',
      },
    ],
  },
  {
    number: '06',
    title: 'Final Inspections',
    items: [
      {
        bold: 'Inspect Work:',
        text: 'Inspect the completed work to ensure it meets the design specifications and quality standards.',
      },
      {
        bold: 'Punch List:',
        text: 'Create a punch list of any remaining tasks, corrections, or touch-ups required. Ensure that all items on the list are addressed before final completion.',
      },
    ],
  },
  {
    number: '07',
    title: 'Client Walkthrough',
    items: [
      {
        bold: 'Review Completion:',
        text: 'Schedule a final walkthrough with the client to review the completed project. Address any final adjustments or concerns they may have.',
      },
      {
        bold: 'Client Approval:',
        text: 'Obtain formal approval from the client that the project meets their expectations and requirements.',
      },
    ],
  },
  {
    number: '08',
    title: 'Project Handover',
    items: [
      {
        bold: 'Documentation:',
        text: 'Provide the client with all necessary documentation, including warranties, maintenance instructions, and any relevant certificates.',
      },
      {
        bold: 'Final Payment:',
        text: 'Ensure that all financial matters are settled, including final payments to contractors, suppliers, and any remaining balances.',
      },
    ],
  },
];

// ── Phase 4: Post Completion ──────────────────────────────────────────────────
const postCompletionSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Client Support and Feedback',
    items: [
      {
        bold: 'Provide Documentation:',
        text: 'Supply the client with any necessary documentation, such as warranties for products, maintenance instructions, and care guidelines for materials.',
      },
      {
        bold: 'Feedback Collection:',
        text: 'Solicit feedback from the client about their experience with the project. This can be done through surveys, interviews, or informal discussions.',
      },
    ],
  },
  {
    number: '02',
    title: 'Warranty and Maintenance',
    items: [
      {
        bold: 'Warranty Services:',
        text: 'Ensure that the client understands the warranty coverage for any products or services provided. Offer support for any warranty claims if needed.',
      },
      {
        bold: 'Maintenance Advice:',
        text: 'Provide guidance on how to maintain and care for the new furnishings and finishes to ensure longevity and continued satisfaction.',
      },
    ],
  },
  {
    number: '03',
    title: 'Addressing Post-Completion Issues',
    items: [
      {
        bold: 'Follow-Up Visits:',
        text: 'Schedule follow-up visits if necessary to address any issues that have arisen after the client has started using the space.',
      },
      {
        bold: 'Issue Resolution:',
        text: 'Resolve any problems or defects promptly. This could involve coordinating with contractors, suppliers, or other professionals to fix issues.',
      },
    ],
  },
  {
    number: '04',
    title: 'Ongoing Support',
    items: [
      {
        bold: 'Client Communication:',
        text: 'Keep in touch with the client to offer continued support and to check in on their satisfaction with the completed project.',
      },
      {
        bold: 'Additional Services:',
        text: 'Be available for any additional services or modifications the client might request in the future.',
      },
    ],
  },
  {
    number: '05',
    title: 'Documentation and Closure',
    items: [
      {
        bold: 'Complete Documentation:',
        text: 'Ensure all project documentation is complete and properly archived, including design plans, correspondence, and any project-related paperwork.',
      },
      {
        bold: 'Formal Closure:',
        text: 'Officially close the project by finalizing all administrative tasks, including financial matters.',
      },
    ],
  },
  {
    number: '06',
    title: 'Client Appreciation',
    items: [
      {
        bold: 'Show Appreciation:',
        text: 'Consider sending a thank-you note or a small gift to express appreciation for the client\u2019s business and to maintain a positive relationship.',
      },
      {
        bold: 'Referral Requests:',
        text: 'If appropriate, ask the client for referrals or testimonials if they are satisfied with your work. This can help build your reputation and attract new clients.',
      },
    ],
  },
  {
    number: '07',
    title: 'Future Collaboration',
    items: [
      {
        bold: 'Stay Connected:',
        text: 'Keep the lines of communication open for potential future projects or updates. This can help foster long-term relationships and encourage repeat business.',
      },
    ],
  },
];

// ── All phases (in order) ─────────────────────────────────────────────────────
export const processPhases: ProcessPhase[] = [
  { heading: 'Initial Assessment', steps: assessmentSteps },
  { heading: 'Design Phase', steps: designPhaseSteps },
  { heading: 'Implementation Phase', steps: implementationPhaseSteps },
  { heading: 'Post Completion Phase', steps: postCompletionSteps },
];
