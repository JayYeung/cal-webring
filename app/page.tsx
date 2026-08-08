import { members } from "../members";

export default function HomePage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-[#003262] mb-2">Cal Webring</h1>
      <p className="text-base text-gray-600 mb-8">A webring connecting UC Berkeley students' personal sites.</p>

      <h2 className="text-2xl font-semibold text-[#003262] mb-4">Members</h2>
      <table className="border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left pr-4 pb-2">Name</th>
            <th className="text-left pr-4 pb-2">Major</th>
            <th className="text-left pr-4 pb-2">Year</th>
            <th className="text-left pb-2">URL</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.url} className="border-b">
              <td className="pr-4 py-2">
                <a href={member.url} className=" hover:text-[#B8860B] transition-colors">{member.name}</a>
              </td>
              <td className="pr-4 py-2">{member.major}</td>
              <td className="pr-4 py-2">{member.year}</td>
              <td className="py-2">
                <a href={member.url} className="underline text-[#064077] hover:text-[#B8860B] transition-colors">
                  {member.url.replace(/^https?:\/\//, "")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </main>
  );
}