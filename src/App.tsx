import { profile } from './content/profile.ts'

export default function App() {
  return (
    <main>
      <header>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
      </header>
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section aria-labelledby="links-heading">
        <h2 id="links-heading">Links</h2>
        <ul>
          <li>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.cvPath}>CV</a>
          </li>
        </ul>
      </section>
    </main>
  )
}
