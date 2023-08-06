type Props = {
    texto: string
}

export const Title = (props: Props) => {
    const {texto} = props;
  return (
    <h1 className="text-lg font-semibold">{texto}</h1>
  )
}