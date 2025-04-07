import { MessageSquareQuote} from "lucide-react";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <h2 className="text-xl self-center rounded-full px-5 py-2.5 flex gap-2 items-center bg-foreground/5 backdrop-blur-sm dark:bg-white/10">
        <MessageSquareQuote />
        Testimonials
      </h2>
      <p className="text-md text-muted-foreground text-center max-w-xl mx-auto">
        Discover what professionals from Healthcare, Manufacturing,
        Cybersecurity, and more have to say about collaborating with us.
      </p>
      <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
        <div className="col-span-2 border rounded-lg px-8 py-6 bg-gradient-to-br from-violet-500 to-violet-800 dark:to-violet-950 text-white">
          <p className="text-justify">
            " There's always something more to learn from these youngsters. I
            have seen them handle projects very efficiently and realized the
            potential they hold. Age is really just a number for them! Their
            team spirit, expertise, project delivery, adherence to timelines,
            professional etiquettes and leadership has left me speechless. All
            the best leaders of tomorrow! "
            <br />
            <span className="inline-block mt-4 text-sm rounded-full px-2 bg-white/20 border border-violet-100">Manufacturing</span>
          </p>
        </div>
        <div className="col-span-3 border rounded-lg px-8 py-6 place-self-end bg-gradient-to-bl from-blue-500 to-blue-800 dark:to-blue-950 text-white">
          <p className="text-justify">
            " Within two months of delivering our first project audited by
            Vulenris, we received 4 more projects through the same client.
            Their apt security consultancy, prompt and accurate IT security
            service, gave us the confidence to partner with Vulenris. Soon,
            we connected with Mandar's team on strategic fronts and this helped
            us immensely in penetrating the Cyber Security market in Middle
            East. "
            <br />
            <span className="inline-block mt-4 text-sm rounded-full px-2 bg-white/20 border border-violet-100">Consultancy</span>
          </p>
        </div>
        <div className="col-span-3 border rounded-lg px-8 py-6 place-self-start bg-gradient-to-tr from-red-500 to-red-800 dark:to-red-950 text-white">
          <p className="text-justify">
            " We are now associated with Vulenris for the last two years for
            security services. I found them extremely professional and very
            accommodating. Their understanding and positioning of services in
            Cyber Security is outstanding. In particular, my wavelength
            instantly synced with Aishwarya, who stands out in this
            male-dominated industry with her proficiency in cyber security. "
            <br />
            <span className="inline-block mt-4 text-sm rounded-full px-2 bg-white/20 border border-violet-100">CyberSecurity</span>
          </p>
        </div>
        <div className="col-span-2 border rounded-lg px-8 py-6 bg-gradient-to-tl from-violet-500 to-violet-800 dark:to-violet-950 text-white">
          <p className="text-justify">
            " Our journey truly began when we got our first HIPAA Audit conducted
            by Vulenris when our product was in an early stage. We received
            tremendous support and handholding to define and maintain the
            security posture of not just our product, but also our entire
            organization. Vulenris team has been very cooperative and
            continue to be on our speed dial for all security. "
            <br />
            <span className="inline-block mt-4 text-sm rounded-full px-2 bg-white/20 border border-violet-100">Healthcare</span>
          </p>
        </div>
      </div>
    </div>
  );
}
