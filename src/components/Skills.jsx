import { JSIcon, HTMLIcon, CSSIcon, TailwindIcon } from '../data/svgIcons';

const skills = [
  { id: 1, name: 'JavaScript', Icon: JSIcon },
  { id: 2, name: 'HTML', Icon: HTMLIcon },
  { id: 3, name: 'CSS', Icon: CSSIcon },
  { id: 4, name: 'TailwindCSS', Icon: TailwindIcon },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-content">
        <div className="skills-title">
          <h1>Habilidades</h1>
        </div>

        <div className="skills-container">
          {skills.map(({ id, name, Icon }) => (
            <div className="skill-card" key={id}>
              <div className="skill-icon">
                <Icon />
              </div>
              <h2>{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
