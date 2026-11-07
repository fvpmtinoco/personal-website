export type Profile = {
  name: string
  role: string
  about: readonly string[]
  githubUrl: string
  cvPath: string
}

export const profile: Profile = {
  name: 'Your Name',
  role: 'Your role',
  about: [
    'Replace this paragraph with a short professional summary.',
    'Replace this paragraph with the kind of work you do and the problems you take on.',
  ],
  githubUrl: 'https://github.com/your-username',
  cvPath: 'cv.pdf',
}
