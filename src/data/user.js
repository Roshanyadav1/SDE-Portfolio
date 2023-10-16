import logo from '../assets/react.svg'
import profile from '../assets/profile.jpg' 

const INFO = {
	main: {
		title: "Roshan",
		name: "Roshan Y.",
		email: "mrroshan738949@gmail.com",
		logo: profile,
	},

	socials: { 
		github: "https://github.com/Roshanyadav1",
		linkedin: "https://www.linkedin.com/in/roshan-yadav-1bb350215/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
	},

	homepage: {
		title: "Front-end wizard conjuring immersive web and mobile experiences, while also indulging in the art of sketching.",
		description:"I am a frontend developer with expertise in React. I have experience in building interactive, user-friendly web applications using React along with various related technologies and libraries. I enjoy crafting engaging user interfaces and solving complex challenges in the world of web development. My passion lies in creating well-structured, maintainable code that adheres to best practices and follows industry standards. I'm constantly on the lookout for fresh challenges and opportunities to expand my skills as a React developer."
	},

	about: {
		title: "I am Roshan Yadav, residing in Khategaon, Madhya Pradesh, India.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Singaji Central (Collage management system)",
			description:
			"In our college, we are creating an online system where a student can take Admission and all the functionality of our college can be automated by the application.",
			logo: logo,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "HR Managment (Parivaar Organization)",
			description:
			"Parivaar is an NGO that provides free education and accommodation to poor students. We are developing human resource management to help maintain records of all employees and activities.",
			logo: logo,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Bharosa Agri Tech",
			description:
			"A Portal where we have all our farmers, their land & crop information, can verify their basic info & land geotag info from the portal and generate the reports for their land, which will help to get the loans from Bank.",
			logo:logo,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Adsprint",
			description:
			"It offers news agencies a platform to post ads, simplifying the advertising process with a variety of types of advertising, including classifieds, obituaries, displays, as well as audited and unaudited financial reports. It functions as an online advertising company in Bengaluru that specializes in providing a web based application.",
			logo: logo,
			linkText: "View Project",
			link: "https://wfs.adsprint.in/",
		},
		
		{
			title: "Cyber Defense Portal (Cyberstash Pvt Ltd)",
			description:
			"The SOAR service within the CDP will enable security analysts to automate and streamline incident response processes, reducing manual effort and response times. By leveraging the Shuffler API, the SOAR service will facilitate the integration of various security tools, data sources, and workflows to enable efficient incident investigation, containment, and remediation.",
			logo: logo,
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
