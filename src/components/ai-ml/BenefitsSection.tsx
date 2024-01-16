import Image from "next/image";
import { twMerge } from "tailwind-merge";

type BenefitsSectionProps = {
	cards: Array<{ title: string; icon: { asset: { url: string } } }>;
};

function BenefitsSection({ cards }: BenefitsSectionProps) {
	return (
		<section
			className="w-full flex justify-center items-center py-12"
			id="benefits"
		>
			<div className="container flex flex-col gap-12 text-white px-4">
				<h2 className="text-3xl md:text-5xl font-bold">
					Benefits of <span className="grad">AI/ML and Data Science</span>
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3">
					<div className="w-full bg-Gray/10 p-4 h-[170px] hidden md:block"></div>
					<div className="w-full bg-Gray/5  p-4 h-[170px] hidden md:block"></div>
					<div className="w-full bg-Gray/5  p-4 h-[170px] col-start-1 col-end-2 row-start-2 row-end-3 hidden md:block"></div>
					{cards.map(({ title, icon }, i) => (
						<div
							key={i}
							className={twMerge(
								"w-full flex flex-col justify-between odd:bg-customNeutral even:bg-Gray p-4 h-[170px]",
								i === 0 && "md:even:bg-customNeutral"
							)}
						>
							<div className="text-lg md:text-2xl">{title}</div>
							{!!icon && (
								<Image
									src={icon.asset.url}
									alt={title}
									width={40}
									height={40}
									className="ml-auto"
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
export default BenefitsSection;
