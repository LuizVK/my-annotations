import styles from './FormInput.module.css'

interface InputProps {
    name: string
    type: 'text' | 'number' | 'email'
    label: string
    value: any
    readonly?: boolean
    handleOnChange: (e: any) => void
}

export default function Input(props: InputProps) {
    const defValue = props.type !== 'number' ? '' : 0

    return (
        <div className={`${styles.formControl}`}>
            <label htmlFor={props.name}>{props.label}: </label>
            <input 
                type={props.type} 
                name={props.name} 
                value={props.value || defValue} 
                readOnly={props.readonly ?? false}
                onChange={props.handleOnChange}
            />
        </div>
    )
}