import { Variants, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const variantsLeft: Variants = {
	initial: {
		opacity: 0,
		y: 0,
		x: "-100%",
		transition: {
			duration: 0,
		},
	},
	slide: {
		opacity: 1,
		x: "0%",
		transition: {
			duration: 1.5,
		},
	},
	exit: {
		opacity: 0,
		y: 50,
		transition: { duration: 1.5 },
	},
};

const variantsRight: Variants = {
	initial: {
		opacity: 0,
		y: 0,
		x: "100%",
		transition: {
			duration: 0,
		},
	},
	slide: {
		opacity: 1,
		x: "0%",
		transition: {
			duration: 1.5,
		},
	},
	exit: {
		opacity: 0,
		y: 100,
		transition: { duration: 1.5 },
	},
};

type QuestionsProps = {
	data: Array<{
		title: string;
		answer: string;
	}>;
};

function Questions({ data }: QuestionsProps) {
	const [offset, setOffset] = useState(0);
	const controls = useAnimation();
	const repeatDelay = 6000;

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;
		const show = () => {
			interval = setInterval(async () => {
				setOffset((prev) => (prev + 1) % data.length);
				await controls.start("initial");
				await controls.start("slide");
				setTimeout(() => {
					controls.start("exit");
				}, 3000);
			}, repeatDelay);
		};
		show();

		return () => clearInterval(interval);
	}, [controls, repeatDelay, data.length]);

	return (
		<div className="w-full gap-4 flex items-center justify-center flex-col">
			<div className="overflow-hidden relative">
				<span className="opacity-0">{data[offset].title}</span>
				<motion.div
					variants={variantsLeft}
					initial="slide"
					animate={controls}
					className="absolute top-0"
				>
					{data[offset].title}
				</motion.div>
			</div>
			<div className="overflow-hidden relative">
				<span className="opacity-0">{data[offset].answer}</span>
				<motion.div
					variants={variantsRight}
					initial="slide"
					animate={controls}
					className="absolute top-0"
				>
					{data[offset].answer}
				</motion.div>
			</div>
		</div>
	);
}
export default Questions;
