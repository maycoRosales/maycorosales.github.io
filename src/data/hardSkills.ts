interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description: "Mi generador de sitios estáticos favorito para crear sitios web modernos.",
    icon: "astro_dark"
  },
  {
    name: "ReactJs",
    description: "Mi framework favorito para crear aplicaciones web modernas",
    icon: "nextjs_icon_dark"
  },
  {
    name: "NodeJs",
    description: "Usando NodeJs para el desarrollo backend desde 2018",
    icon: "nodejs"
  },
  {
    name: "MongoDB",
    description: "Mi base de datos favorita para aplicaciones modernas",
    icon: "mongodb"
  }
];

export default hardSkills;