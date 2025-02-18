import React from "react";

const SUCCESS_STORIES = [
  {
    name: "Aditi Sharma",
    feedback:
      "I was so confused about which stream to choose after Class 10. Uprise Education helped me understand my strengths and guided me toward the right path. Their counseling sessions were so helpful, and now I feel confident about my career choices. Thank you for making everything so clear and easy!",
    designation: "11th Class Student, Fergusson College",
  },
  {
    name: "Umesh and Priti Kulkarni",
    feedback:
      "As parents, we wanted to ensure our child makes the right decisions, but we were very much confused with so many options. Uprise Education gave us clarity and direction. Their guidance was not only professional but also very personal. We are so grateful for their support in planning our child's future!",
    designation: "Parents of Shantanu Kulkarni",
  },
  {
    name: "Aarti Jadhav",
    feedback:
      "Uprise Education has been a blessing for our students. Their personalized approach and dedication to guiding each student towards the right career path are remarkable. It’s heartwarming to see the positive impact they’ve made on so many lives. We truly value their contribution to shaping bright futures!",
    designation: "Teacher, Local School",
  },
  {
    name: "Rohit Mehta",
    feedback:
      "Thanks to Uprise Education, I discovered my passion for engineering. Their aptitude tests and counseling sessions were instrumental in shaping my future. I can’t thank them enough for guiding me in the right direction.",
    designation: "12th Class Student, Modern College",
  },
  {
    name: "Sunita Rao",
    feedback:
      "The team at Uprise Education is outstanding. They understood my son’s strengths and weaknesses and created a detailed career roadmap for him. Today, he’s studying at one of the best universities, and we owe it all to their guidance.",
    designation: "Parent of Ravi Rao",
  },
  {
    name: "Ankita Joshi",
    feedback:
      "Being a teacher, I always look for resources to help my students with their career planning. Uprise Education has been an incredible partner in this journey. Their workshops are engaging, and their guidance is invaluable.",
    designation: "Teacher, Vidya Valley School",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full bg-gray-100 text-gray-700 py-16 px-6" id="success-stories">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Success Stories
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
          Hear from students, parents, and educators who have experienced the transformational impact of Uprise Education.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 italic mb-4">
                &quot;{story.feedback}&quot;
              </p>
              <h4 className="text-blue-600 font-semibold text-lg">{story.name}</h4>
              <p className="text-gray-600 text-sm">{story.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
