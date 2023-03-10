import { ChangeEvent } from 'react'

type InputTypeProps = {
	setTitle: (title: string) => void
	title: string
}

export const Input = (props: InputTypeProps) => {

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setTitle(event.currentTarget.value)
	}

	return (
		<>
			<input value={props.title} onChange={onChangeInputHandler} />
		</>
	)
}