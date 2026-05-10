import { useState } from 'react';
import { JSIcon, HTMLIcon, CSSIcon, TailwindIcon, TSIcon, NodeIcon, ReactIcon, NextIcon, PostgreSQLIcon, MongoDBIcon, MySQLIcon, ExpressIcon, FastifyIcon, PrismaIcon } from '../data/svgIcons';

const DEFAULT_SKILLS = [
  { id: 1,  name: 'JavaScript',  Icon: JSIcon         },
  { id: 2,  name: 'HTML',        Icon: HTMLIcon        },
  { id: 3,  name: 'CSS',         Icon: CSSIcon         },
  { id: 4,  name: 'TailwindCSS', Icon: TailwindIcon    },
];

const EXTRA_SKILLS = [
  { id: 5,  name: 'TypeScript',  Icon: TSIcon          },
  { id: 6,  name: 'Node.js',     Icon: NodeIcon        },
  { id: 7,  name: 'React',       Icon: ReactIcon       },
  { id: 8,  name: 'Next.js',     Icon: NextIcon        },
  { id: 9,  name: 'PostgreSQL',  Icon: PostgreSQLIcon  },
  { id: 10, name: 'MongoDB',     Icon: MongoDBIcon     },
  { id: 11, name: 'MySQL',       Icon: MySQLIcon       },
  { id: 12, name: 'Express.js',  Icon: ExpressIcon     },
  { id: 13, name: 'Fastify',     Icon: FastifyIcon     },
  { id: 14, name: 'Prisma',      Icon: PrismaIcon      },
];

export default function Skills() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills">
      <div className="skills-content">
        <div className="skills-title">
          <h1>Habilidades</h1>
        </div>

        <div className="skills-grid">
          {DEFAULT_SKILLS.map(({ id, name, Icon }) => (
            <div className="skill-card" key={id}>
              <div className="skill-icon"><Icon /></div>
              <h2>{name}</h2>
            </div>
          ))}
        </div>

        <div className={`skills-extra-collapse ${expanded ? 'skills-extra-collapse--open' : ''}`}>
          <div className="skills-grid skills-grid--extra">
            {EXTRA_SKILLS.map(({ id, name, Icon }) => (
              <div className="skill-card" key={id}>
                <div className="skill-icon"><Icon /></div>
                <h2>{name}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-toggle">
          <button
            className="glow-on-hover skills-toggle__btn"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? (
              <>Mostrar menos <i className="fas fa-chevron-up"></i></>
            ) : (
              <>Mostrar mais <i className="fas fa-chevron-down"></i></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
