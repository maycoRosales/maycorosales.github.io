/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Auxiliar de mesa de ayuda",
        startDate: "2022-06-01",
        company: "Dinosaurio SA",
        location: "Cordoba, Argentina",
        description: "Auxiliar de mesa de ayuda",
        goals: [
            "Desempeño tareas operativas correspondientes al area de sistemas de la empresa.",
            "Brindo soporte técnico a los usuarios de la empresa.",
            "Realizo mantenimoientos de hardware y software en las computadoras de la empresa.",
        ],
        currentJob: true,
    },
    {
        title: "Repositor",
        startDate: "2018-04-20",
        endDate: "2022-06-01",
        company: "Dinosaurio SA",
        location: "Cordoba, Argentina",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "Realize tareas de reposición en el sector de almacén.",
            "manejo de montacargas.",
            "trabajo en equipo.",
        ],
        currentJob: false,
    },
];
export default workExperience;