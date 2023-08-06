import {useLocation} from 'react-router-dom'

type Props = {
    texto: string
}

export const Title = (props: Props) => {
    const {pathname} = useLocation();
    const {texto} = props;
  return (
    <h1 className="text-lg font-semibold">{texto} {pathname}</h1>
  )
}