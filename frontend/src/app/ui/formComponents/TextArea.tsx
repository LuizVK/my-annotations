import styles from './FormInput.module.css'

interface TextAreaProps {
    name: string
    label: string
    value: any
    readonly?: boolean
    rows?: number
    handleOnChange: (e: any) => void
}

export default function TextArea(props: TextAreaProps) {
    return (
        <div className={`${styles.formControl}`}>
            <label htmlFor={props.name}>{props.label}: </label>
            <textarea 
                rows={props.rows ?? 5}
                name={props.name} 
                value={props.value || ''} 
                readOnly={props.readonly ?? false}
                onChange={props.handleOnChange}
            />
        </div>
    )
}