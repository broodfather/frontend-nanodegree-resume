
var buildInformation = function(){
    buildBio();
    buildEducation();
    buildWork();
    buildProjects();

};

var buildBio = function(){

};

var buildEducation = function(){

};

var buildWork = function(){

};

var buildProjects = function(){

};








//TODO
//TODO JSON data here
//TODO
var JSON = {
    bio: {
        name: 'Christopher R. Dahm',
        role: 'Software/Mobile Developer',
        contacts: {
            mobile: '(419) 202-7968',
            email: 'cdahm11@gmail.com',
            github: 'https://github.com/broodfather',
            twitter: null,
            location: 'Michigan, United States'
        },
        welcomeMessage: 'Let\'s build things!',
        skills: [
            'Web Development',
            'Object Oriented Programming (OOP)',
            'Full Stack Development',
            'Database Development',
            'Database Administration',
            'Android Development',
            'Database Migration',
            'Version Control',
            'Testing',
            '3D Modeling',
            'Rapid Prototyping',
            'CNC Machining',
            'Manual Machining',
            'CNC Programming',
            '3D Printing',
            'Circuits',
            'Teaching',
            'Quality Assurance',
            'Statistics',
            'Neural Net Analysis',
            'Data Mining',
            'Data Visualization',
            'Data Capture',
            'School Work'
        ],
        biopic: 'url',
        display: 'function taking no parameters'
    },

    education: {
        schools: [
            {
                name: 'EHOVE Career Center',
                location: 'Ohio, United States',
                degree: 'Engineering Industrial Technology',
                majors: [
                    'Engineering'
                ],
                dates: 20090626,
                url: 'http://www.ehove.net/high-school/programs/engineering-tech.html'
            },
            {
                name: 'Bowling Green State University',
                location: 'Ohio, United States',
                degree: null,
                majors: [
                    'Computer Science',
                    'Electronics and Computer Technology'
                ],
                dates: null,
                url: 'https://www.bgsu.edu/arts-and-sciences/computer-science.html'
            }
        ],
        onlineCourses: [
            {
                title: 'Ethics in Technology',
                school: 'Bowling Green State University',
                date: '20130523',
                url: null,
                display: 'function taking no parameters'
            }
        ]
    },

    work: {
        jobs: [
            {
                employer: 'Independent Freelance Work',
                title: 'Freelancer',
                location: 'United States',
                dates: '20150301',
                description: 'Take on freelance work and fun projects for web/mobile technologies.',
                display: 'function taking no parameters'
            },
            {
                employer: 'Kunz, Leigh, and Associates',
                title: 'Developer',
                location: 'Michigan, United States',
                dates: '20150223',
                description: 'Develop, maintain, test, and support code in an agile environment.',
                display: 'function taking no parameters'
            },
            {
                employer: 'Macy\'s Systems and Technologies',
                title: 'Intern, Developer I',
                location: 'Ohio, United States',
                dates: '20130601-20150220',
                description: 'Develop and test code in an agile environment.',
                display: 'function taking no parameters'
            },
            {
                employer: 'Tsubaki Engineering Chain Division',
                title: 'CNC Programmer',
                location: 'Ohio, United States',
                dates: '20110520-20130601',
                description: 'Set up, programmed, interfaced robots, ran CNC machines.',
                display: 'function taking no parameters'
            },
            {
                employer: 'Chick-fil-a',
                title: 'Team Member, Supervisor',
                location: 'Ohio, United States',
                dates: '20060601-20091131',
                description: 'A little but of everything.',
                display: 'function taking no parameters'
            }
        ]
    },

    projects: [
        {
            title: 'Hello World',
            dates: '20150531',
            description: 'A simple hello world for this course',
            images: null,
            display: 'function taking no parameters'
        },
        {
            title: 'Node Data Solutions',
            dates: '20150301',
            description: 'An in-progress website/app that focuses on FIRST robotics data.',
            images: null,
            display: 'function taking no parameters'
        }
    ]
};