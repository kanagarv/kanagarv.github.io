import { InfoBox } from "./InfoBox";

interface WikipediaContentProps {
  activeSection: string;
}

export function WikipediaContent({
  activeSection,
}: WikipediaContentProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="flex-1 max-w-5xl p-8">
      <article className="bg-white">
        <h1 className="text-4xl font-serif mb-2 border-b border-gray-300 pb-2">
          Venkat Kanagarajamuthaly
        </h1>

        <div className="text-xs text-gray-600 mb-6 italic">
          Based on Wikipedia, my favourite website
        </div>

        <InfoBox
          name="Venkat Kanagarajamuthaly"
          imageUrl="https://github.com/kanagarv/university_enroll/blob/d06a781c38e952a67ee994d2e159d2d39309e414/IMG_4576.jpeg?raw=true"
          occupation="Computer Engineer"
          location="Hamilton, ON"
          email="venkat.muthaly@outlook.com"
          linkedin="https://www.linkedin.com/in/venkatmuthaly"
          website="https://venkatmuthaly.com"
          education="McMaster University, B.Eng. Computer Engineering - 2026 Grad"
        />

        <div className="text-justify leading-relaxed">
          <p className="mb-4">
            <strong>Venkat Kanagarajamuthaly</strong> is a{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Computer Engineering
            </a>{" "}
            student graduating from McMaster University for
            2026! He's worked on a load of fields, from ML to
            fintech to even medical imaging. Growing up in
            Toronto, he's volunteered for charitable
            organization all his life, and hs been active in
            campus culture since he started his undergrad in
            2021. He's looking to work in firmware, electrical,
            and hardware engineering, and maybe even medical
            device engineering. In his spare time, he tends to
            rock climb, read, look at pokemon cards, and hang
            out with friends. You can reach him anywhere at
            anytime.
          </p>
        </div>

        <section id="early-life" className="mt-8 scroll-mt-8">
          <h2 className="text-2xl font-serif border-b border-gray-300 pb-1 mb-4">
            Early life and community leadership
          </h2>
          <p className="mb-4 text-justify leading-relaxed">
            Kanagarajamuthaly demonstrated an early commitment
            to community service and youth development. From
            2014 to 2018, he served as a Literacy Mentor with
            Leading to Reading, helping elementary students
            improve their reading comprehension. He continued
            his community engagement as a Youth Leader with Mid
            Scarborough Youth Leadership (2018-2020) and as a
            Mentor for Big Brothers Big Sisters Canada in 2019,
            fostering confidence and social skills in young
            children.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            At the university level, Kanagarajamuthaly actively
            engaged in student governance, serving as the
            President of the South Indian Student Association
            (2023) and the Associate Vice President of Clubs for
            the McMaster Engineering Society (2022). Until now,
            he continues to volunteer for organizations such as
            Green Ventures, though infrequently.
          </p>
        </section>

        <section id="education" className="mt-8 scroll-mt-8">
          <h2 className="text-2xl font-serif border-b border-gray-300 pb-1 mb-4">
            Education
          </h2>
          <p className="mb-4 text-justify leading-relaxed">
            Kanagarajamuthaly is currently attending{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              McMaster University
            </a>
            , pursuing a Bachelor of Engineering in Computer
            Engineering, with an expected graduation in June
            2026.
          </p>
        </section>

        <section id="career" className="mt-8 scroll-mt-8">
          <h2 className="text-2xl font-serif border-b border-gray-300 pb-1 mb-4">
            Career
          </h2>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Early career and entrepreneurship (2020–2022)
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            Kanagarajamuthaly began their professional career as
            a Software Developer at BrandEQ in 2020, programming
            and optimizing website models for over 15 business
            clients using HTML and C++. In March 2021, they
            co-founded BitSwap, functioning as a Product
            Manager. The cryptocurrency platform successfully
            managed over $1M and facilitated thousands of trades
            before being sold for $10M. During this period, they
            also worked as a Research Clinician at the UHN
            Princess Margaret Cancer Centre, scoping hundreds of
            research papers for an LGBTQ+ intersectionality
            study. In the summer of 2022, they interned at
            Tangerine, ensuring the accuracy of over $100M in
            capital by analyzing thousands of client cheques.
          </p>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Technical Clubs & Engineering Research (2023–2024)
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            From May 2023 to May 2024, Kanagarajamuthaly served
            a dual role across different sectors. They joined
            the Canadian Space Agency's McMaster
            Interdisciplinary Satellite Team as a Firmware
            Specialist, developing C-based firmware for the
            PRESET satellite and designing communication
            modules. Simultaneously, they acted as the Tech and
            AI Lead for the Canadian Marketing League
            (Microsoft), collaborating with stakeholders to
            deliver innovative AI solutions within a $100K
            program that aligned with strategic business goals.
            In the summer of 2024, they worked as a Machine
            Learning Developer in Healthcare R&A, building
            Python models to identify mineral deposits and
            generate actionable heatmaps across 400+ Quebec
            locations.
          </p>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Recent Work (2024–present)
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            Kanagarajamuthaly was a Data Analytics & BI Intern
            at John Deere. They designed and managed over 15
            software products globally, utilizing SQL on
            Databricks, PowerBI, and Tableau to generate over
            $10M in savings for high-level executives. Notably,
            they built a Tableau dashboard tracking product
            deliveries and employee performance, which improved
            visibility and accountability for over 100 employees
            by more than 40%, and worked here from 2024 to 2025.
          </p>
        </section>

        <section id="projects" className="mt-8 scroll-mt-8">
          <h2 className="text-2xl font-serif border-b border-gray-300 pb-1 mb-4">
            Selected projects
          </h2>

          <h3 className="text-xl font-serif mt-6 mb-3">
            <a
              href="https://github.com/sartajo/Sonolite"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SonoLite - Portable Ultrasound
            </a>
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            A battery-powered, handheld ultrasound imaging
            system. The capstone project features FPGA-based
            beamforming, real-time signal processing, and analog
            front-end design optimized for low-cost medical
            diagnostics using Altium Designer and Vivado.
          </p>

          <h3 className="text-xl font-serif mt-6 mb-3">
            PlantCare
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            A plant species and care identifier application
            leveraging machine learning and AI algorithms. The
            project was implemented using React.js and PyTorch.
          </p>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Spatial Mapping Using Time-of-Flight Sensor
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            A hardware/software project involving the creation
            of a spatial mapping device using C, with mappings
            simulated on a microprocessor using Python and
            Open3D.
          </p>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Hardware Implementation of Image Decompressor
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            Hardware image decompression developed in Verilog
            using Quartus, with ModelSim utilized for
            testbenching.
          </p>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Software Defined Radio
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            A real-time Software Defined Radio (SDR) capable of
            processing mono/stereo FM and RDS signals, developed
            using modern C++ and Python.
          </p>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Reach RBC Kiosk
          </h3>
          <p className="mb-4 text-justify leading-relaxed">
            An airport kiosk application built with React.js,
            Figma, and Google APIs to provide accessible banking
            information. This project secured second place at
            DeltaHacks X RBC.
          </p>
        </section>

        <section id="skills" className="mt-8 scroll-mt-8">
          <h2 className="text-2xl font-serif border-b border-gray-300 pb-1 mb-4">
            Skills & expertise
          </h2>

          <h3 className="text-xl font-serif mt-6 mb-3">
            Technical skills
          </h3>
          <ul className="list-disc ml-8 mb-4 space-y-2">
            <li>
              <strong>
                Programming Languages & Frameworks:
              </strong>{" "}
              Python, C, C++, Verilog, HTML/CSS, React.js,
              Simulink, R, SQL, PyTorch
            </li>
            <li>
              <strong>Engineering Software:</strong> Altium
              Designer, Cadence, PSpice/LTSpice, Autodesk
              Inventor, Open3D
            </li>
            <li>
              <strong>FPGA & Digital Design:</strong> Quartus,
              Vivado, ModelSim
            </li>
            <li>
              <strong>Data & Version Control:</strong> Tableau,
              PowerBI, Databricks, Git
            </li>
          </ul>
        </section>

        <section id="personal" className="mt-8 scroll-mt-8">
          <h2 className="text-2xl font-serif border-b border-gray-300 pb-1 mb-4">
            Personal life
          </h2>
          <p className="mb-4 text-justify leading-relaxed">
            Outside of their technical and academic pursuits,
            Kanagarajamuthaly is an avid outdoor enthusiast who
            enjoys rock climbing and nature hikes. Their
            creative hobbies include reading, sketching, and
            card collecting. They also continue to volunteer for
            local environmental stewardship initiatives,
            participating in litter pickup and tree planting
            with Green Ventures in 2025.
          </p>
        </section>

        <div className="mt-8 p-4 bg-gray-100 border border-gray-300 text-sm">
          <p className="mb-2">
            <strong>Categories:</strong>{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Living people
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Canadian computer engineers
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              McMaster University alumni
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Technology entrepreneurs
            </a>
          </p>
        </div>

        <div className="mt-4 text-xs text-gray-600">
          <p>
            This page was last edited on 9 March 2026, at 14:30
            (UTC).
          </p>
          <p className="mt-1">
            Text is available under the Creative Commons
            Attribution-ShareAlike License; additional terms may
            apply.
          </p>
        </div>
      </article>
    </main>
  );
}