import iconReact from "../assets/react.webp";
import Javascript from "../assets/js.webp";
import SiTypescript from "../assets/ts.webp";
// import SiCsharp from "../assets/csharp.webp";
import SiRedux from "../assets/redux.webp";
// import SiDotnet from "../assets/dotnet.webp";
import SiHtml5 from "../assets/html.webp";
import SiCss3 from "../assets/css.webp";
import SiNodedotjs from "../assets/node.webp";
import SiMicrosoftsqlserver from "../assets/sqlserver.webp";
import SiPostgresql from "../assets/postgre.webp";
import SiSequelize from "../assets/sequelize.webp";
import Angular from "../assets/angular.webp"

export const stacksList = [
    {
        id: 1,
        title: "Frontend Skills",
        stacks: [
            {
                stack: 'ReactJS',
                level: 'Intermidiate',
                logo: iconReact
            },
            {
                stack: 'Redux',
                level: 'Intermidiate',
                logo: SiRedux
            },
            {
                stack: 'Angular',
                level: 'Intermidiate',
                logo: Angular
            },
            {
                stack: 'JavaScript',
                level: 'Intermediate',
                logo: Javascript
            },
            {
                stack: 'TypeScript',
                level: 'Intermidiate',
                logo: SiTypescript
            },
            {
                stack: 'HTML5',
                level: 'Intermidiate',
                logo: SiHtml5
            },
            {
                stack: 'CSS3',
                level: 'Intermidiate',
                logo: SiCss3
            }
        ]
    },
    {   
        id: 2,
        title: "Backend Skills",
        stacks: [
            {
                "stack": "Sequelize",
                "level": "Intermidiate",
                "logo": SiSequelize
            },
            {
                "stack": "PostgreSQL",
                "level": "Intermidiate",
                "logo": SiPostgresql
            },
            {
                "stack": "SQL Server",
                "level": "Intermidiate",
                "logo": SiMicrosoftsqlserver
            },
            {
                "stack": "NodeJS",
                "level": "Intermidiate",
                "logo": SiNodedotjs
            },
            // {
            //     "stack": ".Net",
            //     "level": "Intermidiate",
            //     "logo": SiDotnet
            // },
            // {
            //     "stack": "C#",
            //     "level": "Initial",
            //     "logo": SiCsharp
            // }
        ]
    }
]

