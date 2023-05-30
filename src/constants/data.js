import images from "./images";

const experiences = [
    {
        image: `${images.experience_img_1}`,
        title: "Backend Software Engineer Trainee | foodpanda | Oct 2022 - Mar 2023",
        paragraphs: [
            "Completed 3 months of intensive training on Golang and Scrum Master Course, gaining proficiency in software development and project management methodologies",
            "Worked as a backend developer trainee for foodpanda's delivery service, pandago, implementing end-to-end features with guidance and practice of TDD",
            "Contributed to the development of proof of pickup and delivery feature",
            "Demonstrated a strong ability to write maintainable code, consistently producing clean, well-documented code that was easy to understand and modify"
        ]
    },
]

const projects = [
    {
        image: `${images.project_img_1}`,
        title: "Mart Recursive Order",
        description: "This is a web-based program that enables users to recur their order without doing anything and the order will be placed upon the given time",
        link: "https://github.com/vitorio-p/pandaREmart",
    },
    {
        image: `${images.project_img_2}`,
        title: "Dental Appointment System",
        description: "A prototype of web-based program, mainly focusing on the backend development in a Client-Server Setup",
        link: "https://github.com/wkcjay/Dental-Appointment",
    },
    {
        image: `${images.project_img_3}`,
        title: "Data Science and Machine Learning Project",
        description: "An university project assignment that predict the probability of death when taking a certain aircraft model and maker to certain location in which month and year",
        link: "https://github.com/wkcjay/DSAI-Aviation",
    }
]
export {experiences,projects};