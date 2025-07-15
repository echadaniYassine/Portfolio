//components/sections/Experience.jsx

const Experience = ({ dictionary }) => (
<section id="experience" className="scroll-mt-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold">{dictionary.title}</h2>
</div>
<div className="relative border-l-2 border-light-primary/30 dark:border-dark-primary/30 pl-10 space-y-12">
{/* Timeline Item 1 */}
<div className="relative">
<div className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-light-primary dark:bg-dark-primary border-4 border-light-background dark:border-dark-background"></div>
<p className="text-sm text-gray-500">2022 - 2024</p>
<h4 className="font-bold text-xl">{dictionary.education2_title}</h4>
<p className="text-gray-600 dark:text-gray-400">{dictionary.education2_details}</p>
</div>
{/* Timeline Item 2 */}
<div className="relative">
<div className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-light-primary dark:bg-dark-primary border-4 border-light-background dark:border-dark-background"></div>
<p className="text-sm text-gray-500">Apr - Jul 2024</p>
<h4 className="font-bold text-xl">{dictionary.work1_title}</h4>
<p className="text-gray-600 dark:text-gray-400">{dictionary.work1_details}</p>
</div>
{/* Add more timeline items as needed */}
</div>
</section>
);
export default Experience;