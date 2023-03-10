import { ChangeEvent, useState } from 'react';

type InputTypeProps = {
	callBack: (title: string) => void
}

export const InputWithButton = (props: InputTypeProps) => {

	let [title, setTitle] = useState('')

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}

	const onClickHandler = () => {
		props.callBack(title)
		setTitle('');
	}


	return (
		<div>
			<input value={title} onChange={onChangeInputHandler} />
			<button onClick={onClickHandler}>+</button>
		</div>
	)
}