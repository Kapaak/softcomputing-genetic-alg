import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Button } from "../styles/UIComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import { resetPopulation, setup } from "../redux/slices/population";
import { generatePopulation } from "../genetic/population";
import { resetDynamicState, updateMembers } from "../redux/slices/dynamicState";
import { RootState } from "../redux/store";

const Settings = () => {
	const {
		register,
		handleSubmit,
		reset: resetForm,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();

	const active = useSelector<RootState, boolean>(
		state => state.dynamicState.active
	);

	const onSubmit: SubmitHandler<FieldValues> = data => {
		dispatch(setup(data));
		const pop = generatePopulation({
			target: data.targetWord,
			membersCount: data.populationSize,
		});

		dispatch(updateMembers(pop));
	};

	const onReset = () => {
		dispatch(resetDynamicState());
		dispatch(resetPopulation());
		resetForm();
	};

	return (
		<SSetings>
			<h2>Settings</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<LabelInput>
					<label>target word</label>
					<input
						type="text"
						{...register("targetWord", {
							pattern: /^[a-z]+$/,
							minLength: 1,
							required: true,
						})}
					/>
				</LabelInput>
				<LabelInput>
					<label>mutation rate</label>
					<input
						type="number"
						{...register("mutationRate", { required: true })}
						step="0.1"
					/>
				</LabelInput>
				<LabelInput>
					<label>population size</label>
					<input
						type="number"
						{...register("populationSize", { min: 2, required: true })}
					/>
				</LabelInput>
				{errors.targetWord && (
					<ErrorMessage>
						only lowercase words without spaces and special characters are
						allowed
					</ErrorMessage>
				)}
				{errors.membersInPopulation && (
					<ErrorMessage>
						there must be atleast 2 members in population
					</ErrorMessage>
				)}
				<br />
				<Buttons>
					<Button disabled={active} type="submit">
						create new population
					</Button>
					<Button specialType={true} disabled={!active} onClick={onReset}>
						reset
					</Button>
				</Buttons>
			</form>
		</SSetings>
	);
};

export default Settings;

const SSetings = styled.div``;

const Buttons = styled.div`
	display: flex;
	gap: 1rem;
`;

const ErrorMessage = styled.p`
	color: #f31515;
`;

const LabelInput = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	height: 3.4rem;

	label {
		width: 10rem;
	}

	input {
		padding: 0.4rem 0.8rem;
	}
`;
