import HoverCard from "@/components/shared/HoverCard";

type ExamplesSectionProps = {
	examples: Array<{
		title: string;
		image: { asset: { url: string } };
		description: string;
	}>;
};

function ExamplesSection({ examples }: ExamplesSectionProps) {
	return (
		<section
			className="w-full flex justify-center items-center py-12"
			id="examples"
		>
			<div className="container flex flex-col gap-12 text-white px-4">
				<h2 className="text-3xl md:text-5xl font-bold">
					Examples of <span className="grad">AI/ML & Predictive Analytics</span>
				</h2>
				<div className="bg-[#1E2029] rounded-[20px] px-2 sm:px-6 relative 2xl:px-32 py-6 xl:py-16 z-10 flex flex-col lg:flex-row items-center justify-center gap-8 2xl:gap-12">
					{examples?.map(({ image, title, description }, i) => (
						<HoverCard image={image} title={title} info={description} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
export default ExamplesSection;
