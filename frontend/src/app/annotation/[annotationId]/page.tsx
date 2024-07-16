export default function Page({ params }: { params: { annotationId: string }}) {
    const id = params.annotationId
    return (
        <div>
            <h1>Anotação {id}</h1>
        </div>
    )
}