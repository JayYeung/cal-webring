import { members } from "../members";
import RingGraph from "./RingGraph";


export default function HomePage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-[#003262] mb-4">UC Berkeley Webring</h1>
      <p className="text-base text-gray-600 mb-5">   __________ </p>
      <p className="text-base text-gray-600 mb-8">A webring connecting the personal websites and portfolios of Berkeley students, alumni, and faculty.</p>

      <p className="text-base text-gray-600 mb-8 max-w-xl">
  A webring is an old-school way of connecting personal websites — each
  site links to the next and previous one in the ring, so you can click
  through a whole community of pages instead of relying on search
  engines. Want to join?{" "}
  
   <a href="https://github.com/wuuski/cal-webring"
    className="underline text-[#064077] hover:text-[#B8860B] transition-colors"
  >
    Fork the repo and open a pull request
  </a>
  .
</p>

      <div className="flex flex-col md:flex-row gap-8 items-start">
    <div className="flex-1">
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
      
      
    <div className="w-full md:w-150 shrink-0">
      <RingGraph />
    </div>
    

    </div>
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <a href="https://calwebring.com/prev?current=YOUR_URL_HERE">←</a>
      <a href="https://calwebring.com">
        <img src="https://calwebring.com/badge.png" width="36" />
      </a>
      <a href="https://calwebring.com/next?current=YOUR_URL_HERE">→</a>
    </div>
    </div>
    </main>
  );
}