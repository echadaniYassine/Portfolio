//components/sections/Testimonials.jsx

const Testimonials = ({ dictionary }) => (
<section id="testimonials" className="scroll-mt-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold">{dictionary.title}</h2>
</div>
<div className="max-w-3xl mx-auto text-center bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg">
<p className="italic text-gray-600 dark:text-gray-400">
"{dictionary.testimonial1}"
</p>
<div className="mt-6">
{/* You can add an image of the person here */}
{/* <img src="/amina-s.jpg" alt={dictionary.name1} className="w-12 h-12 rounded-full mx-auto mb-2" /> */}
<p className="font-bold">{dictionary.name1}</p>
<p className="text-sm text-gray-500">{dictionary.role1}</p>
</div>
</div>
</section>
);
export default Testimonials;