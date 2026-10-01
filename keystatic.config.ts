import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    profile: singleton({
      label: 'Profile',
      path: 'src/content/profile',
      schema: {
        name: fields.text({ label: 'Full Name' }),
        nickname: fields.text({ label: 'Nickname' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        email: fields.text({ label: 'Email' }),
        github: fields.text({ label: 'GitHub URL' }),
        linkedin: fields.text({ label: 'LinkedIn URL' }),
        phone: fields.text({ label: 'Phone' }),
        resumeUrl: fields.text({ label: 'Resume URL' }),
      },
    }),
    hero: singleton({
      label: 'Hero Section',
      path: 'src/content/hero',
      schema: {
        greeting: fields.text({ label: 'Greeting' }),
        headline: fields.text({ label: 'Headline' }),
        subheadline: fields.text({ label: 'Sub-headline' }),
        description: fields.text({ label: 'Description', multiline: true }),
        ctaText: fields.text({ label: 'CTA Button Text' }),
      },
    }),
    education: singleton({
      label: 'Education',
      path: 'src/content/education',
      schema: {
        school: fields.text({ label: 'School Name' }),
        degree: fields.text({ label: 'Degree' }),
        gpa: fields.text({ label: 'GPA' }),
        subjects: fields.array(
          fields.text({ label: 'Subject' }),
          { label: 'Relevant Subjects', itemLabel: props => props.value ?? 'Subject' }
        ),
      },
    }),
  },
  collections: {
    experiences: collection({
      label: 'Experiences',
      slugField: 'title',
      path: 'src/content/experiences/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tech Stack', itemLabel: props => props.value ?? 'Tag' }
        ),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      },
    }),
  },
});
