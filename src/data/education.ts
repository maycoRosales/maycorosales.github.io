interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Desarrollo de Software",
        startDate: "2022-06-01",
        endDate: "2023-10-01",
        school: "Coderhouse",
        location: "Argentina",
        description: "Cursos de desarrollo web utilizando Javascript, React, NodeJs, and MongoDB.",
        currentUni: false,
    },
    {
        title: "Programación web Full Stack",
        startDate: "2021-03-01",
        endDate: "2021-09-30",
        school: "Egg Academy",
        location: "Argentina",
        description: "Curso de Desarrolo web fullstack utilizando java y mysql.",
        currentUni: false,
    },
    {
        title: "Programación como autodidacta",
        startDate: "2020-09-01",
        endDate: "",
        school: "Youtube, Udemy, FreeCodeCamp",
        location: "Argentina",
        description: "Cursos y proyectos personales y de estudio que enriquecen mis conocimientos en programación.",
        currentUni: true,
    },
];

export default education;