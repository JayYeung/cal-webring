import { members } from "../members";

export default function HomePage() {
  return (
    <main>
      <h1>Cal Webring</h1>
      <p>A webring connecting UC Berkeley students' personal sites.</p>

      <h2>Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.url}>
            <a href={member.url}>{member.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}