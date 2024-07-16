import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

export type Annotation = {
    _id: string
    title: string
    description: string
    technologies: Technology[]
}

export type TechnologyIcon = {
    iconPrefix: IconPrefix
    iconName: IconName
}

export type Technology = {
    _id: string
    name: string
    icon: TechnologyIcon
}