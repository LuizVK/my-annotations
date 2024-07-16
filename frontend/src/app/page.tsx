import AnnotationCard from "./ui/dashboard/annotation-card";
import NewAnnotationButton from "./ui/new-annotation-button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Annotation } from "./lib/definitions";

library.add(fab, fas, far)

const annotation: Annotation = {
  _id: '1',
  title: 'Minha anotação Minha anotação Minha anotação Minha anotação Minha anotação',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, expedita ut exercitationem nemo suscipit, optio accusamus dolore natus iusto reprehenderit a, voluptatum distinctio adipisci itaque. Iure esse corrupti dolor? Recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, expedita ut exercitationem nemo suscipit, optio accusamus dolore natus iusto reprehenderit a, voluptatum distinctio adipisci itaque. Iure esse corrupti dolor? Recusandae.',
  technologies: [
    {
      _id: '1',
      name: 'NodeJs',
      icon: { iconPrefix: 'fab', iconName: "node-js" }
    }, 
    {
      _id: '2',
      name: 'JavaScript',
      icon: { iconPrefix: 'fab', iconName: 'square-js' }
    },
    {
      _id: '3',
      name: 'HTML',
      icon: { iconPrefix: 'fab', iconName: 'html5' }
    },
    {
      _id: '4',
      name: 'CSS',
      icon: { iconPrefix: 'fab', iconName: 'css3-alt' }
    }
  ]
}

export default function Home() {
  return (
    <>
      <NewAnnotationButton />
      <div className="px-14 py-14 w-full h-full flex flex-col gap-8 items-center border-x bg-white">
        <AnnotationCard annotation={annotation}/>
      </div>
    </>
  );
}

export { library } 