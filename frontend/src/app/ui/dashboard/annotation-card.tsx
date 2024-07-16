import { Annotation } from "@/app/lib/definitions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline"
import { Tooltip } from "@nextui-org/tooltip"
import Link from "next/link"

interface AnnotationCardProps {
    annotation: Annotation
}

export default function AnnotationCard(props: AnnotationCardProps) {
    return (
        <Link href={`/annotation/${props.annotation._id}`} className="border rounded-md w-3/4 md:w-2/3 lg:w-1/2 h-52 shadow-md hover:shadow-lg hover:scale-[1.01] transition duration-300 ease-in-out flex flex-col overflow-hidden">
            <div id={props.annotation._id} >
                <div className="w-full h-10 flex items-center justify-between p-2 text-white bg-gradient-to-r from-fuchsia-900 from-0% via-purple-900 via-50% to-violet-950">
                    <h1 className="text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">{props.annotation.title ?? ''}</h1>
                    {/* <i className="w-10 mx-2">
                    <Link href={`/annotation/${props.annotation._id}`}>
                    <ArrowRightEndOnRectangleIcon />
                    </Link>
                    </i> */}
                </div>
                <div className="w-full p-2">
                    <div className="w-full overflow-hidden text-xl">
                        <p style={{
                            display: "-webkit-box",
                            width: "100%",
                            WebkitLineClamp: "4",
                            WebkitBoxOrient: "vertical"
                        }}>
                            {props.annotation.description ?? ''}
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-2 flex-nowrap overflow-hidden justify-end">
                        {props.annotation.technologies?.length > 0 && (
                            props.annotation.technologies.map((tech) => (
                                <Tooltip 
                                    key={`${props.annotation._id}-${tech.icon.iconPrefix}-${tech.icon.iconName}`} 
                                    color="default" 
                                    content={`${tech.name}`} 
                                    className="text-xs bg-gray-800 text-white rounded-2xl px-2 py-1"
                                    delay={1000}
                                >
                                    <i className="w-6 text-gray-800">
                                        <FontAwesomeIcon icon={[tech.icon.iconPrefix, tech.icon.iconName]} />
                                    </i>
                                </Tooltip>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}